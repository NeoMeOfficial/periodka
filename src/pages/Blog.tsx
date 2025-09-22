import React from 'react';
import { FloNavigation } from '@/components/FloNavigation';
import { FloFooter } from '@/components/FloFooter';
import { Calendar, Clock, User } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: "Ako sledovať menštruačný cyklus efektívne",
      excerpt: "Praktické tipy pre začínajúce používateľky aplikácie Periodka.",
      date: "15. marec 2025",
      author: "Dr. Anna Nováková",
      readTime: "5 min čítania"
    },
    {
      title: "Výživa počas menštruácie: Čo jesť a čomu sa vyhnúť",
      excerpt: "Komplexný sprievodca stravovaním počas rôznych fáz cyklu.",
      date: "10. marec 2025",
      author: "Mgr. Petra Kováčová",
      readTime: "8 min čítania"
    },
    {
      title: "PMS a ako si s ním poradiť prirodzene",
      excerpt: "Overené metódy na zmierňanie premenštruačného syndrómu.",
      date: "5. marec 2025",
      author: "Dr. Anna Nováková",
      readTime: "6 min čítania"
    },
    {
      title: "Cvičenie počas menštruácie: Mýty a fakty",
      excerpt: "Pravda o tom, či by ste mali cvičiť počas periody.",
      date: "28. február 2025",
      author: "Mgr. Jana Svobodová",
      readTime: "4 min čítania"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <FloNavigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="brand-text text-primary">Periodka</span>
                <span className="text-foreground"> Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Články, tipy a rady o ženskom zdraví, menštruačnom cykle a wellnesse.
              </p>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={index}
                  className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant hover:shadow-elevated transition-all cursor-pointer group"
                >
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Nezmeškajte nové články
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Prihláste sa na odber nášho newslettera a dostávajte najnovšie články priamo do emailu.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Váš email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Prihlásiť sa
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FloFooter />
    </div>
  );
}