import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

export const BlogPreview = () => {
  // Pegar os 3 artigos mais recentes
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Blog: Dicas e Informações
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conteúdo especializado sobre desenvolvimento infantil para famílias de Aracaju e região metropolitana
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-4xl">{post.slug.includes('fono') ? '🗣️' : post.slug.includes('psicologia') ? '🧠' : post.slug.includes('tdah') ? '⚡' : post.slug.includes('autismo') ? '🧩' : post.slug.includes('psicopedagogia') ? '📚' : '✨'}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</span>
                  <span className="mx-1">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="group">
            <Link to="/blog">
              Ver todos os artigos
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
