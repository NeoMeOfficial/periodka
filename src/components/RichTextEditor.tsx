import { useCallback, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const imageHandler = useCallback(async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    
    input.onchange = async () => {
      if (!input.files || !input.files[0]) return;
      
      const file = input.files[0];
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: 'Chyba',
          description: 'Obrázok je príliš veľký. Maximálna veľkosť je 5MB.',
          variant: 'destructive',
        });
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: 'Chyba',
          description: 'Prosím vyberte platný obrázok.',
          variant: 'destructive',
        });
        return;
      }

      setUploading(true);
      
      try {
        // Generate unique filename
        const timestamp = new Date().toISOString();
        const fileExt = file.name.split('.').pop();
        const fileName = `${timestamp}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        
        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
          .from('blog-images')
          .upload(fileName, file);

        if (error) throw error;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('blog-images')
          .getPublicUrl(data.path);

        // Insert image into editor
        const quill = (window as any).quillEditor;
        if (quill) {
          const range = quill.getSelection();
          const index = range ? range.index : quill.getLength();
          quill.insertEmbed(index, 'image', publicUrl);
          quill.setSelection(index + 1);
        }

        toast({
          title: 'Úspech',
          description: 'Obrázok bol úspešne nahraný.',
        });
      } catch (error) {
        console.error('Error uploading image:', error);
        toast({
          title: 'Chyba',
          description: 'Nepodarilo sa nahrať obrázok.',
          variant: 'destructive',
        });
      } finally {
        setUploading(false);
      }
    };
    
    input.click();
  }, [toast]);

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['blockquote', 'code-block'],
        ['clean']
      ],
      handlers: {
        image: imageHandler
      }
    },
    clipboard: {
      matchVisual: false,
    }
  }), [imageHandler]);

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'color', 'background',
    'align', 'script',
    'direction', 'code-block'
  ];

  return (
    <div className="relative">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        style={{ 
          backgroundColor: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))'
        }}
        ref={(el) => {
          if (el) {
            (window as any).quillEditor = el.getEditor();
          }
        }}
      />
      {uploading && (
        <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
          <div className="bg-card p-4 rounded-lg shadow-lg">
            <p className="text-sm text-muted-foreground">Nahrávam obrázok...</p>
          </div>
        </div>
      )}
      
      <style>{`
        .ql-editor {
          background-color: hsl(var(--background)) !important;
          color: hsl(var(--foreground)) !important;
          border-color: hsl(var(--border)) !important;
        }
        
        .ql-toolbar {
          background-color: hsl(var(--card)) !important;
          border-color: hsl(var(--border)) !important;
        }
        
        .ql-toolbar .ql-stroke {
          stroke: hsl(var(--foreground)) !important;
        }
        
        .ql-toolbar .ql-fill {
          fill: hsl(var(--foreground)) !important;
        }
        
        .ql-toolbar button:hover {
          background-color: hsl(var(--accent)) !important;
        }
        
        .ql-container {
          border-color: hsl(var(--border)) !important;
        }
        
        .ql-snow .ql-picker {
          color: hsl(var(--foreground)) !important;
        }
        
        .ql-snow .ql-picker-options {
          background-color: hsl(var(--card)) !important;
          border-color: hsl(var(--border)) !important;
        }
        
        .ql-snow .ql-picker-item:hover {
          background-color: hsl(var(--accent)) !important;
        }
      `}</style>
    </div>
  );
}