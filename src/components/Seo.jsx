import { Helmet } from "react-helmet";

export default function Seo({ title, description }) {
  const defaultDescription =
    "Si-Ham, es una empresa del sector alimenticio con una basta experiencia en el sector, contando así con más de 40 años de existencia garantizando la experticia y calidad de nuestros productos.";

  return (
    <Helmet>
      <html lang="es" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <title>{title ? title : "si-ham"}</title>
      <meta
        name="description"
        content={description ? description : defaultDescription}
      />
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="icon" href="img/si-ham-logo.png" />
    </Helmet>
  );
}
