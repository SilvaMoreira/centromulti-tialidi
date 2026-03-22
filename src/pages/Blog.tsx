import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, Tag } from "lucide-react";

const Blog = () => {
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Blog - Dicas sobre Desenvolvimento Infantil"
        description="Artigos e dicas sobre psicopedagogia, psicologia infantil, fonoaudiologia e autismo em Aracaju, Sergipe. Conteúdo especializado para famílias."
        url="/blog"
        keywords="blog psicopedagogia aracaju, autismo aracaju, psicologia infantil sergipe, fonoaudiologia aracaju, desenvolvimento infantil"
      />
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-nunito text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog Tia Lidi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Artigos e dicas sobre desenvolvimento infantil, psicopedagogia, psicologia e fonoaudiologia 
              para famílias de Aracaju e região metropolitana de Sergipe.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="h-3 bg-gradient-to-r from-primary via-accent to-secondary" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="font-nunito text-xl font-bold text-foreground mb-3 line-clamp-2 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.keywords.slice(0, 3).map((keyword) => (
                        <span
                          key={keyword}
                          className="flex items-center gap-1 text-xs text-muted-foreground"
                        >
                          <Tag className="w-2 h-2" />
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                    >
                      Ler artigo completo →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-nunito text-2xl md:text-3xl font-bold text-foreground mb-6">
                Centro Multidisciplinar Infantil em Aracaju
              </h2>
              <p className="text-muted-foreground mb-4">
                O Centro Multidisciplinar Tia Lidi é referência em atendimento infantil especializado em Aracaju, Sergipe. 
                Oferecemos serviços de <strong>psicopedagogia</strong>, <strong>psicologia infantil</strong> e <strong>fonoaudiologia</strong> 
                para crianças de toda a região metropolitana, incluindo Nossa Senhora do Socorro, Barra dos Coqueiros, 
                São Cristóvão e Laranjeiras.
              </p>
              <p className="text-muted-foreground mb-6">
                Nossa equipe de profissionais especializados está localizada no bairro Grageru, 
                em um ambiente acolhedor e preparado para receber crianças e famílias que buscam 
                desenvolvimento educacional, emocional e de comunicação.
              </p>
              <Link
                to="/#booking"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Agende uma Consulta
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
