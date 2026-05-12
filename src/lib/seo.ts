import { company, siteUrl } from "@/constants/siteData";

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`
    }))
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  description: company.description,
  telephone: company.phones[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khasra No. 990/336/1, Near Basai Flyover, Basai Village, Sector 9B",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122006",
    addressCountry: "IN"
  }
};
