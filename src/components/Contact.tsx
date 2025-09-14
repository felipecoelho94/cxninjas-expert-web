import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica dos campos obrigatórios
    if (!name || !email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos o nome e email.",
        variant: "destructive",
      });
      return;
    }

    // URL do Power Automate Flow
    const flowUrl = "https://defaultacf7a1732d014ef8b4e6f02ac8045b.fe.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/57efbfc065714a4d9bcc8958bd245121/triggers/manual/paths/invoke/?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=dAN207_P48iFca56F1vPKZFrQkGfKyqB-fkXsfCO4eg";

    try {
      setIsSending(true);
      
      // Dados do contato no formato exato que funcionou no Postman
      const contactData = {
        "name": name,
        "email": email,
        "company": company,
        "phone": phone,
        "message": message
      };

      const response = await fetch(flowUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar dados: ${response.status}`);
      }

      const data = await response.json();
      console.log('Resposta do Power Automate:', data);

      toast({
        title: "Mensagem enviada!",
        description: "Recebemos sua solicitação e entraremos em contato em breve.",
      });

      // Limpar o formulário após envio bem-sucedido
      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      toast({
        title: "Falha ao enviar",
        description: err instanceof Error ? err.message : "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Fale com nossa equipe
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos elevar a experiência 
            do cliente no seu negócio ao próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contato@cxninjas.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-ninja-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-muted-foreground">+55 (31) 3181-1515</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Localização</h3>
                    <p className="text-muted-foreground">Belo Horizonte, MG</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ninja mascot */}
            <div className="flex justify-center pt-8">
              <img 
                src="/lovable-uploads/a60216fb-d9dc-4bf9-82cc-d6fef4223ae6.png" 
                alt="CX Ninjas Mascot" 
                className="w-28 h-24 animate-float object-contain"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Solicite uma Consultoria Gratuita
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome Completo
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Seu nome completo"
                        className="bg-background border-border"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="seu.email@empresa.com"
                        className="bg-background border-border"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Empresa
                      </label>
                      <Input 
                        id="company" 
                        placeholder="Nome da sua empresa"
                        className="bg-background border-border"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefone
                      </label>
                      <Input 
                        id="phone" 
                        placeholder="(31) 3181-1515"
                        className="bg-background border-border"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Como podemos ajudar?
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Conte-nos sobre seus desafios de Customer Experience..."
                      rows={4}
                      className="bg-background border-border"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <Button variant="ninja" size="lg" className="w-full" type="submit" disabled={isSending}>
                    {isSending ? "Enviando..." : "Enviar Solicitação"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;