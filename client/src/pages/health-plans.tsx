import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Users, Building, User } from "lucide-react";

export default function HealthPlans() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="text-health-plans-title">
            Planos de Saúde
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-health-plans-description">
            Encontre o plano ideal para suas necessidades com nossa consultoria especializada. Comparamos opções e garantimos transparência em todas as etapas.
          </p>
          <Link href="/contato">
            <Button size="lg" className="px-8 py-4" data-testid="button-consultoria-especializada">
              Fale com um consultor especializado
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-benefits-title">
              Por que escolher nossa consultoria?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-benefits-description">
              Nossa consultoria traz segurança, economia e clareza nas escolhas dos planos de saúde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center" data-testid="benefit-economia">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Economia Garantida</h3>
              <p className="text-muted-foreground">
                Encontramos as melhores condições do mercado, garantindo economia sem abrir mão da qualidade.
              </p>
            </div>

            <div className="text-center" data-testid="benefit-transparencia">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Transparência Total</h3>
              <p className="text-muted-foreground">
                Explicamos todos os detalhes, carências e coberturas para você tomar a decisão mais informada.
              </p>
            </div>

            <div className="text-center" data-testid="benefit-acompanhamento">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Acompanhamento Contínuo</h3>
              <p className="text-muted-foreground">
                Suporte antes, durante e após a contratação. Estamos sempre aqui para ajudar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Comparison Cards */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-plans-comparison-title">
              Tipos de Planos Disponíveis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-plans-comparison-description">
              Oferecemos soluções para diferentes perfis e necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-plano-individual">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Plano Individual</h3>
                  <p className="text-muted-foreground">Proteção personalizada para você</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Cobertura nacional</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Consultas e exames</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Internações</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Cirurgias</span>
                  </li>
                </ul>
                <Link href="/contato">
                  <Button variant="outline" className="w-full" data-testid="button-cotacao-individual">
                    Solicitar cotação
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative hover:shadow-lg transition-shadow" data-testid="card-plano-familiar">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">Mais Popular</span>
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Plano Familiar</h3>
                  <p className="text-muted-foreground">Proteção completa para toda família</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Tudo do plano individual</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Cobertura para dependentes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Pediatria especializada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Desconto progressivo</span>
                  </li>
                </ul>
                <Link href="/contato">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-cotacao-familiar">
                    Solicitar cotação
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow" data-testid="card-plano-empresarial">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Plano Empresarial</h3>
                  <p className="text-muted-foreground">Solução corporativa completa</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Cobertura para equipe</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Gestão administrativa</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Relatórios mensais</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm">Preços especiais</span>
                  </li>
                </ul>
                <Link href="/contato">
                  <Button variant="outline" className="w-full" data-testid="button-cotacao-empresarial">
                    Solicitar cotação
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-faq-title">
                Perguntas Frequentes - Planos de Saúde
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-faq-description">
                Esclarecemos as principais dúvidas sobre planos de saúde
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" data-testid="faq-como-escolher">
                <AccordionTrigger className="text-left">Como escolher o plano ideal?</AccordionTrigger>
                <AccordionContent>
                  Nossa consultoria analisa seu perfil, necessidades médicas, orçamento e preferências para encontrar a melhor opção. Consideramos fatores como rede credenciada, cobertura, carências e custo-benefício.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" data-testid="faq-carencia">
                <AccordionTrigger className="text-left">Qual o prazo de carência?</AccordionTrigger>
                <AccordionContent>
                  Os prazos de carência variam conforme o procedimento e operadora. Urgência e emergência têm carência de 24h, consultas até 30 dias, exames até 30 dias, e cirurgias até 180 dias. Explicamos todos os prazos durante a consultoria.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" data-testid="faq-dependentes">
                <AccordionTrigger className="text-left">Posso incluir dependentes depois?</AccordionTrigger>
                <AccordionContent>
                  Sim, na maioria dos casos é possível incluir dependentes posteriormente, respeitando as carências. Analisamos as melhores condições para inclusão de dependentes e orientamos sobre documentação necessária.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" data-testid="faq-reajuste">
                <AccordionTrigger className="text-left">Como funciona o reajuste?</AccordionTrigger>
                <AccordionContent>
                  Os reajustes seguem diretrizes da ANS (Agência Nacional de Saúde Suplementar). Há reajuste anual autorizado pela ANS e reajuste por mudança de faixa etária. Explicamos todo o processo e acompanhamos os reajustes para garantir transparência.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" data-testid="faq-cobertura">
                <AccordionTrigger className="text-left">O que está coberto no plano?</AccordionTrigger>
                <AccordionContent>
                  A cobertura varia por tipo de plano, mas geralmente inclui consultas, exames, internações, cirurgias, urgência e emergência. Alguns planos incluem também obstetrícia, odontologia e terapias. Detalhamos toda a cobertura durante a consultoria.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" data-testid="faq-rede-credenciada">
                <AccordionTrigger className="text-left">Como consultar a rede credenciada?</AccordionTrigger>
                <AccordionContent>
                  Fornecemos acesso completo à rede credenciada de cada operadora, incluindo hospitais, clínicas, laboratórios e médicos. Ajudamos a verificar se seus médicos de preferência estão na rede e orientamos sobre como utilizá-la.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6" data-testid="text-cta-plans-title">
            Pronto para Encontrar Seu Plano Ideal?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto" data-testid="text-cta-plans-description">
            Nossa equipe especializada está pronta para ajudar você a escolher o melhor plano de saúde para suas necessidades.
          </p>
          <Link href="/contato">
            <Button variant="secondary" size="lg" className="px-8 py-4 font-semibold" data-testid="button-consultoria-agora">
              Fale com um Consultor Agora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
