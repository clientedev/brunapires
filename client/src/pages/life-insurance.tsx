import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, DollarSign, Heart, CheckCircle, Users, Briefcase } from "lucide-react";

export default function LifeInsurance() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="text-life-insurance-title">
                Seguro de Vida
              </h1>
              <p className="text-xl text-muted-foreground mb-6" data-testid="text-life-insurance-description">
                Complemento essencial ao seu plano de saúde, o seguro de vida oferece proteção financeira completa para você e sua família em momentos difíceis.
              </p>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-life-insurance-subtitle">
                Com coberturas personalizáveis e valores acessíveis, garantimos que sua família tenha segurança financeira quando mais precisar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button className="bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-colors shadow-lg" data-testid="button-saiba-mais-seguro">
                    Saiba mais sobre proteção
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button variant="outline" className="px-8 py-4 font-semibold" data-testid="button-cotacao-seguro">
                    Solicitar cotação
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Happy family representing financial security and protection" 
                className="rounded-xl shadow-xl w-full h-auto"
                data-testid="img-family-protection"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-benefits-life-title">
              Por que ter um Seguro de Vida?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-benefits-life-description">
              Proteção completa para você e sua família em todas as situações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center" data-testid="benefit-protecao-financeira">
              <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Proteção Financeira</h3>
              <p className="text-muted-foreground">
                Garante estabilidade financeira para seus beneficiários, cobrindo despesas e mantendo o padrão de vida da família.
              </p>
            </div>

            <div className="text-center" data-testid="benefit-coberturas-amplas">
              <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Coberturas Amplas</h3>
              <p className="text-muted-foreground">
                Morte natural, acidental, invalidez permanente e outras coberturas que podem ser personalizadas conforme sua necessidade.
              </p>
            </div>

            <div className="text-center" data-testid="benefit-flexibilidade">
              <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Flexibilidade</h3>
              <p className="text-muted-foreground">
                Coberturas e valores ajustáveis às suas necessidades e orçamento, permitindo personalização completa da proteção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-coverage-types-title">
              Tipos de Cobertura
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-coverage-types-description">
              Escolha as coberturas que melhor atendem às suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-cobertura-individual">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Proteção Individual</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Morte natural e acidental
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Invalidez permanente
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Auxílio funeral
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Assistência 24h
                  </li>
                </ul>
                <p className="text-muted-foreground text-sm">
                  Ideal para proteção pessoal com foco na segurança individual.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow" data-testid="card-cobertura-familiar">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Proteção Familiar</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Cobertura para cônjuge
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Proteção para filhos
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Auxílio educação
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Cesta básica
                  </li>
                </ul>
                <p className="text-muted-foreground text-sm">
                  Proteção completa para toda família com benefícios especiais.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow" data-testid="card-cobertura-empresarial">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Proteção Empresarial</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Proteção para funcionários
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Gestão simplificada
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Benefícios adicionais
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Relatórios detalhados
                  </li>
                </ul>
                <p className="text-muted-foreground text-sm">
                  Solução corporativa para proteger sua equipe de trabalho.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-why-choose-title">
                Por que escolher a BPC para seu Seguro de Vida?
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-why-choose-description">
                Expertise e dedicação para encontrar a proteção ideal para você
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start" data-testid="diferencial-consulta-personalizada">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Consulta Personalizada</h4>
                    <p className="text-muted-foreground">Analisamos seu perfil e necessidades para recomendar a proteção mais adequada.</p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="diferencial-comparacao-mercado">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Comparação de Mercado</h4>
                    <p className="text-muted-foreground">Comparamos diferentes seguradoras para garantir o melhor custo-benefício.</p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="diferencial-suporte-sinistro">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Suporte em Sinistros</h4>
                    <p className="text-muted-foreground">Acompanhamos todo o processo de sinistro, garantindo agilidade e tranquilidade.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start" data-testid="diferencial-orientacao-completa">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Orientação Completa</h4>
                    <p className="text-muted-foreground">Explicamos todas as coberturas e condições de forma clara e transparente.</p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="diferencial-atendimento-continuo">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Atendimento Contínuo</h4>
                    <p className="text-muted-foreground">Relacionamento de longo prazo com suporte sempre que você precisar.</p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="diferencial-sem-custo-adicional">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Sem Custo Adicional</h4>
                    <p className="text-muted-foreground">Nossa consultoria não gera custo extra. Recebemos comissão da seguradora.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6" data-testid="text-cta-insurance-title">
            Proteja Sua Família Hoje Mesmo
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto" data-testid="text-cta-insurance-description">
            Não deixe para amanhã a proteção que sua família precisa hoje. Entre em contato e descubra como podemos ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button variant="secondary" size="lg" className="px-8 py-4 font-semibold" data-testid="button-consultor-seguro">
                Falar com Consultor
              </Button>
            </Link>
            <Link href="/contato">
              <Button variant="outline" size="lg" className="px-8 py-4 font-semibold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-cotacao-rapida">
                Cotação Rápida
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
