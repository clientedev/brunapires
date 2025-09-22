import { Link } from "wouter";
import bpcLogo from "@assets/image_1758569920171.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src={bpcLogo} 
                alt="BPC Consultoria Financeira & Plano de Saúde" 
                className="h-16 w-auto brightness-0 invert"
                data-testid="img-footer-logo"
              />
            </div>
            <p className="text-background/70 text-sm">
              Desde 2018 oferecendo consultoria especializada em planejamento financeiro e planos de saúde, com transparência e comprometimento.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/planos-saude" data-testid="link-footer-planos" className="hover:text-primary transition-colors">
                  Planos de Saúde
                </Link>
              </li>
              <li>
                <Link href="/seguro-vida" data-testid="link-footer-seguro" className="hover:text-primary transition-colors">
                  Seguro de Vida
                </Link>
              </li>
              <li>
                <Link href="/contato" data-testid="link-footer-consultoria" className="hover:text-primary transition-colors">
                  Consultoria
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/sobre" data-testid="link-footer-sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" data-testid="link-footer-blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" data-testid="link-footer-contato" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p data-testid="text-footer-email">bpcplanejamento@outlook.com</p>
              <p data-testid="text-footer-horario">Segunda a Sexta: 8h às 18h</p>
              <p data-testid="text-footer-atendimento">Atendimento online</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70 text-sm" data-testid="text-copyright">
            © 2025 BPC Planejamento e Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
