import { useState, useEffect } from "react";
import contentData from "../content/site-content.json";

export interface SiteContent {
  header: {
    announcements: {
      enabled: boolean;
      current: string;
      types: {
        [key: string]: {
          style: "primary" | "success" | "warning" | "info";
          icon: string;
          text: string;
          actions: Array<{
            text: string;
            href: string;
            external: boolean;
            primary?: boolean;
          }>;
        };
      };
    };
    navigation: Array<{ href: string; text: string }>;
    social: Array<{ href: string; text: string }>;
  };
  hero: {
    tags: string[];
    title: {
      line1: string;
      line2: string;
      line3: string;
    };
    description: {
      intro: string;
      holochain_text: string;
      holochain_url: string;
      rea_text: string;
      rea_url: string;
      valueflows_text: string;
      valueflows_url: string;
      main_description: string;
    };
    buttons: {
      learn_more: { text: string; href: string };
      sponsor: { text: string; href: string };
    };
  };
  sections: {
    how_it_works: {
      caption: string;
      title: {
        line1: string;
        line2: string;
        line3: string;
      };
      features: Array<{
        title: string;
        description: string;
      }>;
    };
    who_is_for: {
      caption: string;
      title: {
        line1: string;
        line2: string;
        line3: string;
      };
      audiences: Array<{
        highlight: string;
        description: string;
      }>;
    };
    roadmap: {
      caption: string;
      phases: Array<{
        title: string;
        period: string;
        items: Array<{
          text: string;
          link?: {
            text: string;
            url: string;
          };
        }>;
      }>;
    };
    funding: {
      enabled: boolean;
      caption: string;
      title: {
        line1: string;
        line2: string;
      };
      description: string;
      links: {
        opencollective: string;
      };
    };
    get_involved: {
      caption: string;
      title: {
        line1: string;
        line2: string;
      };
      description: string;
      discord_url: string;
    };
  };
  footer: {
    sponsors: {
      oak: {
        title: string;
        items: Array<{
          name: string;
          url: string | null;
          logo?: boolean;
        }>;
      };
      sapling: {
        title: string;
        items: Array<{
          name: string;
          url: string | null;
        }>;
      };
    };
    legal: {
      text: string;
      license_url: string;
    };
    social: Array<{ text: string; url: string }>;
    credits: {
      design: { text: string; url: string };
      logo: { text: string; url: string };
    };
  };
}

/**
 * Custom hook to load and provide site content
 * This allows Lynn to edit content in JSON files without touching JSX components
 */
export const useContent = (): SiteContent => {
  const [content, setContent] = useState<SiteContent>(
    contentData as SiteContent,
  );

  useEffect(() => {
    // Content is already loaded from JSON import
    // This hook can be extended later for dynamic loading if needed
    setContent(contentData as SiteContent);
  }, []);

  return content;
};

export default useContent;
