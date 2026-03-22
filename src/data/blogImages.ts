import psicologiaImg from "@/assets/blog/psicologia-infantil.jpg";
import fonoaudiologiaImg from "@/assets/blog/fonoaudiologia-infantil.jpg";
import autismoImg from "@/assets/blog/autismo-infantil.jpg";
import psicopedagogiaImg from "@/assets/blog/psicopedagogia.jpg";
import inclusaoImg from "@/assets/blog/inclusao-escolar.jpg";
import ansiedadeImg from "@/assets/blog/ansiedade-infantil.jpg";

const categoryImages: Record<string, string> = {
  "Psicologia": psicologiaImg,
  "Fonoaudiologia": fonoaudiologiaImg,
  "Autismo": autismoImg,
  "Psicopedagogia": psicopedagogiaImg,
  "Pedagogia": inclusaoImg,
};

const slugOverrides: Record<string, string> = {
  "ansiedade-infantil-aracaju-tratamento": ansiedadeImg,
  "autismo-escola-inclusao-aracaju": inclusaoImg,
};

export function getBlogImage(slug: string, category: string): string {
  return slugOverrides[slug] || categoryImages[category] || psicopedagogiaImg;
}
