import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, CheckCircle, Users, TrendingUp, Award } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="text-hero-title">
                Seu futuro e saúde <span className="text-primary">planejados com cuidado</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl" data-testid="text-hero-description">
                Consultoria especializada em planos de saúde e seguros de vida. Desde 2018 oferecendo soluções personalizadas com transparência e comprometimento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contato">
                  <Button className="bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-colors shadow-lg" data-testid="button-consultoria-gratuita">
                    Solicite sua consultoria gratuita
                  </Button>
                </Link>
                <Link href="/planos-saude">
                  <Button variant="outline" className="px-8 py-4 font-semibold" data-testid="button-cotacao">
                    Peça sua cotação agora
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional healthcare consultation" 
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="img-hero-consultation"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg" data-testid="card-hero-anos">
                <div className="text-2xl font-bold">2018</div>
                <div className="text-sm">Anos no mercado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
              Oferecemos soluções completas para proteger você e sua família com o melhor custo-benefício do mercado
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Health Insurance Card */}
            <Card className="hover:shadow-xl transition-shadow group" data-testid="card-planos-saude">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Planos de Saúde</h3>
                <p className="text-muted-foreground mb-6">
                  Consultoria especializada para encontrar o plano ideal para você, sua família ou empresa. Comparamos opções e garantimos a melhor escolha.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Análise personalizada das suas necessidades
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Comparação de operadoras e coberturas
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Acompanhamento pré e pós-contratação
                  </li>
                </ul>
                <Link href="/planos-saude">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-consultor-especializado">
                    Fale agora com um consultor especializado
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Life Insurance Card */}
            <Card className="hover:shadow-xl transition-shadow group" data-testid="card-seguro-vida">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                  <Shield className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Seguro de Vida</h3>
                <p className="text-muted-foreground mb-6">
                  Proteção financeira completa para sua família. Oferecemos as melhores opções do mercado com coberturas abrangentes e valores acessíveis.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Proteção financeira para a família
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Coberturas personalizáveis
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Complemento estratégico ao plano de saúde
                  </li>
                </ul>
                <Link href="/seguro-vida">
                  <Button variant="outline" className="w-full" data-testid="button-saiba-mais-protecao">
                    Saiba mais sobre proteção
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-stats-title">
              Números que Falam por Si
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-stats-description">
              Nossa trajetória de sucesso construída com dedicação e comprometimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="stat-experiencia">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <div className="text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center" data-testid="stat-clientes">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Clientes atendidos</div>
            </div>
            <div className="text-center" data-testid="stat-satisfacao">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6" data-testid="text-cta-title">
            Pronto para Proteger Seu Futuro?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar você a encontrar a proteção ideal para você e sua família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button variant="secondary" size="lg" className="px-8 py-4 font-semibold" data-testid="button-contato-agora">
                Entre em Contato Agora
              </Button>
            </Link>
            <Link href="/planos-saude">
              <Button variant="outline" size="lg" className="px-8 py-4 font-semibold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-ver-planos">
                Ver Planos Disponíveis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
