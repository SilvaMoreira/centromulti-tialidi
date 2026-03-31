import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead, buildBlogPostingSchema } from "@/components/SEOHead";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        keywords={post.keywords.join(", ")}
        type="article"
        publishedAt={post.publishedAt}
        jsonLd={buildBlogPostingSchema(post)}
      />
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Article Header */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o Blog
              </Link>
              
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              
              <h1 className="font-nunito text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} de leitura
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Compartilhar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:font-nunito prose-headings:text-foreground
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-muted-foreground prose-ul:my-4
                  prose-li:mb-2
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ol:text-muted-foreground"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/## /g, '<h2>')
                    .replace(/### /g, '<h3>')
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/\n- \*\*/g, '</p><ul><li><strong>')
                    .replace(/\*\* /g, '</strong> ')
                    .replace(/\n- /g, '</li><li>')
                    .replace(/\n1\. \*\*/g, '</p><ol><li><strong>')
                    .replace(/\n\d\. \*\*/g, '</li><li><strong>')
                    .split('\n').join('<br/>')
                }}
              />
              
              {/* Keywords */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="font-nunito font-semibold text-foreground mb-4">
                  Palavras-chave:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      <Tag className="w-3 h-3" />
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-2xl text-center">
                <h3 className="font-nunito text-2xl font-bold text-foreground mb-4">
                  Precisa de Ajuda Profissional?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nossa equipe está pronta para ajudar seu filho. Agende uma consulta no Centro Multidisciplinar Tia Lidi em Aracaju.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/#booking"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Agendar Consulta
                  </Link>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5579933005359&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors"
                  >
                    💬 Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-nunito text-2xl font-bold text-foreground mb-8 text-center">
                  Artigos Relacionados
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <article
                      key={relatedPost.id}
                      className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-border"
                    >
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-nunito text-lg font-bold text-foreground mb-2 line-clamp-2">
                        <Link to={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="text-primary text-sm font-medium hover:underline"
                      >
                        Ler mais →
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
