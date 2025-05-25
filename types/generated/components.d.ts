import type { Attribute, Schema } from '@strapi/strapi';

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    description: 'Global footer with about, quick links, contact info, quote, and social links';
    displayName: 'Footer';
  };
  attributes: {
    aboutDescription: Attribute.Text;
    aboutTitle: Attribute.String;
    contactEmail: Attribute.Email;
    contactLocation: Attribute.String;
    contactPhone: Attribute.String;
    logo: Attribute.Media<'images'>;
    quickLinks: Attribute.Component<'global.link-item', true>;
    quote: Attribute.Component<'global.quote'>;
    socialLinks: Attribute.Component<'global.social-link', true>;
  };
}

export interface GlobalHeader extends Schema.Component {
  collectionName: 'components_global_headers';
  info: {
    description: 'Global header navigation with logo, links, and contact button';
    displayName: 'Header';
  };
  attributes: {
    contactLabel: Attribute.String;
    contactPath: Attribute.String;
    logo: Attribute.Media<'images'> & Attribute.Required;
    navItems: Attribute.Component<'global.nav-item', true>;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface GlobalLinkItem extends Schema.Component {
  collectionName: 'components_global_link_items';
  info: {
    description: 'A quick link in the footer';
    displayName: 'Link Item';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
  };
}

export interface GlobalNavItem extends Schema.Component {
  collectionName: 'components_global_nav_items';
  info: {
    description: 'Navigation link item in the header';
    displayName: 'Nav Item';
  };
  attributes: {
    name: Attribute.String;
    nameEn: Attribute.String;
    path: Attribute.String;
  };
}

export interface GlobalQuote extends Schema.Component {
  collectionName: 'components_global_quotes';
  info: {
    description: 'Inspirational quote or slogan';
    displayName: 'Quote';
  };
  attributes: {
    author: Attribute.String;
    text: Attribute.Text;
  };
}

export interface GlobalSocialLink extends Schema.Component {
  collectionName: 'components_global_social_links';
  info: {
    description: 'Link to a social media platform';
    displayName: 'Social Link';
  };
  attributes: {
    platform: Attribute.Enumeration<['facebook', 'youtube']> &
      Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface SectionsAboutPreview extends Schema.Component {
  collectionName: 'components_sections_about_preview';
  info: {
    description: 'Section preview about with title, description, quote, core values, button, image, and stats';
    displayName: 'About Preview';
  };
  attributes: {
    button: Attribute.Component<'ui.button'>;
    coreValue: Attribute.Component<'ui.core-value-group'>;
    description: Attribute.RichText;
    image: Attribute.Media<'images'>;
    quote: Attribute.Text;
    stat: Attribute.Component<'ui.stat-group'>;
    title: Attribute.String;
  };
}

export interface SectionsDonation extends Schema.Component {
  collectionName: 'components_sections_donation';
  info: {
    description: 'A section encouraging users to donate, with donation info, support causes, and call-to-action buttons';
    displayName: 'Donation';
  };
  attributes: {
    bankInfo: Attribute.Component<'ui.bank-info'>;
    buttons: Attribute.Component<'ui.button', true>;
    description: Attribute.RichText;
    sponsoredItems: Attribute.Component<'ui.sponsored-item', true>;
    title: Attribute.String;
  };
}

export interface SectionsFeaturedPrograms extends Schema.Component {
  collectionName: 'components_sections_featured_programs';
  info: {
    description: 'Section hi\u1EC3n th\u1ECB c\u00E1c ch\u01B0\u01A1ng tr\u00ECnh n\u1ED5i b\u1EADt';
    displayName: 'Featured Programs';
  };
  attributes: {
    description: Attribute.RichText;
    programs: Attribute.Relation<
      'sections.featured-programs',
      'oneToMany',
      'api::program.program'
    >;
    title: Attribute.String;
    viewAllButton: Attribute.Component<'ui.button'>;
  };
}

export interface SectionsGalleryPreview extends Schema.Component {
  collectionName: 'components_sections_gallery_preview';
  info: {
    description: 'Section displaying a preview of gallery items';
    displayName: 'Gallery Preview Section';
  };
  attributes: {
    description: Attribute.Text &
      Attribute.DefaultTo<'M\u1ED7i h\u00ECnh \u1EA3nh l\u00E0 m\u1ED9t c\u00E2u chuy\u1EC7n, m\u1ED7i kho\u1EA3nh kh\u1EAFc \u0111\u1EC1u ch\u1EE9a \u0111\u1EF1ng t\u00ECnh ng\u01B0\u1EDDi v\u00E0 s\u1EF1 s\u1EBB chia.'>;
    galleryItems: Attribute.Relation<
      'sections.gallery-preview',
      'oneToMany',
      'api::gallery.gallery'
    >;
    title: Attribute.String &
      Attribute.DefaultTo<'Kho\u1EA3nh kh\u1EAFc t\u1EEB tr\u00E1i tim'>;
    viewAllButton: Attribute.Component<'ui.button'>;
  };
}

export interface SectionsHeader extends Schema.Component {
  collectionName: 'components_sessions_header';
  info: {
    description: 'Page header with background image and text';
    displayName: 'Header';
  };
  attributes: {
    backgroundImage: Attribute.Media<'images'>;
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_hero';
  info: {
    description: 'Hero section with title, subtitle, description, background image and buttons';
    displayName: 'Hero';
  };
  attributes: {
    backgroundImage: Attribute.Media<'images'>;
    buttons: Attribute.Component<'ui.button', true>;
    description: Attribute.RichText;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsImpactStats extends Schema.Component {
  collectionName: 'components_sections_impact_stats';
  info: {
    description: 'Section displaying multiple impact statistics';
    displayName: 'Impact Stats Section';
  };
  attributes: {
    stats: Attribute.Component<'ui.stat', true>;
    title: Attribute.String &
      Attribute.DefaultTo<'T\u00E1c \u0111\u1ED9ng c\u1EE7a ch\u00FAng t\u00F4i'>;
  };
}

export interface SectionsJoinUsCta extends Schema.Component {
  collectionName: 'components_sections_join_us_cta';
  info: {
    description: 'K\u00EAu g\u1ECDi ng\u01B0\u1EDDi d\u00F9ng tham gia c\u00F9ng t\u1ED5 ch\u1EE9c ho\u1EB7c \u1EE7ng h\u1ED9 ho\u1EA1t \u0111\u1ED9ng';
    displayName: 'Join Us CTA';
  };
  attributes: {
    buttons: Attribute.Component<'ui.button', true>;
    description: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsMissionAndValues extends Schema.Component {
  collectionName: 'components_sections_mission_and_values';
  info: {
    description: '';
    displayName: 'Mission and Values';
  };
  attributes: {
    button: Attribute.Component<'ui.button'>;
    coreValues: Attribute.Component<'shared.core-value', true>;
    description: Attribute.Text;
    missionItems: Attribute.Component<'shared.mission-item', true>;
    title: Attribute.String;
  };
}

export interface SectionsNewsPreview extends Schema.Component {
  collectionName: 'components_sections_news_preview';
  info: {
    description: 'Section hi\u1EC3n th\u1ECB c\u00E1c b\u00E0i vi\u1EBFt tin t\u1EE9c & ho\u1EA1t \u0111\u1ED9ng m\u1EDBi nh\u1EA5t';
    displayName: 'News Preview';
  };
  attributes: {
    description: Attribute.RichText;
    newsItems: Attribute.Relation<
      'sections.news-preview',
      'oneToMany',
      'api::article.article'
    >;
    title: Attribute.String;
    viewAllButton: Attribute.Component<'ui.button'>;
  };
}

export interface SectionsOurStory extends Schema.Component {
  collectionName: 'components_sections_our_story';
  info: {
    description: 'Section gi\u1EDBi thi\u1EC7u c\u00E2u chuy\u1EC7n c\u1EE7a Smile Gift v\u1EDBi n\u1ED9i dung, h\u00ECnh \u1EA3nh v\u00E0 tr\u00EDch d\u1EABn';
    displayName: 'Our Story';
  };
  attributes: {
    content: Attribute.RichText;
    highlightBox: Attribute.Component<'shared.quote_box'>;
    mainImage: Attribute.Media<'images'>;
    quoteBox: Attribute.Component<'shared.quote_box'>;
    title: Attribute.String;
  };
}

export interface SectionsProgramHero extends Schema.Component {
  collectionName: 'components_sections_program_hero';
  info: {
    description: 'Ph\u1EA7n hero \u0111\u1EA7u trang ch\u01B0\u01A1ng tr\u00ECnh';
    displayName: 'Program Hero';
  };
  attributes: {
    beneficiaries: Attribute.Integer;
    buttons: Attribute.Component<'ui.button', true>;
    date: Attribute.Date;
    image: Attribute.Media & Attribute.Required;
    location: Attribute.String;
    maxAttendees: Attribute.Integer;
    status: Attribute.Enumeration<['upcoming', 'completed']> &
      Attribute.DefaultTo<'upcoming'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsTeam extends Schema.Component {
  collectionName: 'components_sections_team_section';
  info: {
    description: 'Section hi\u1EC3n th\u1ECB \u0111\u1ED9i ng\u0169 c\u1EE7a CLB v\u1EDBi \u1EA3nh, t\u00EAn, ch\u1EE9c v\u1EE5 v\u00E0 li\u00EAn k\u1EBFt m\u1EA1ng x\u00E3 h\u1ED9i';
    displayName: 'Team Section';
  };
  attributes: {
    description: Attribute.Text;
    members: Attribute.Component<'shared.team-member', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsTestimonial extends Schema.Component {
  collectionName: 'components_sections_testimonials_section';
  info: {
    description: 'M\u1ED9t section hi\u1EC3n th\u1ECB danh s\u00E1ch testimonials';
    displayName: 'Testimonials Section';
  };
  attributes: {
    description: Attribute.Text &
      Attribute.DefaultTo<'Nh\u1EEFng chia s\u1EBB ch\u00E2n th\u00E0nh t\u1EEB c\u00E1c t\u00ECnh nguy\u1EC7n vi\u00EAn, m\u1EA1nh th\u01B0\u1EDDng qu\u00E2n v\u00E0 ng\u01B0\u1EDDi th\u1EE5 h\u01B0\u1EDFng.'>;
    testimonials: Attribute.Relation<
      'sections.testimonial',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Attribute.String &
      Attribute.DefaultTo<'C\u00E2u chuy\u1EC7n t\u1EEB c\u1ED9ng \u0111\u1ED3ng'>;
  };
}

export interface SectionsVolunteerCta extends Schema.Component {
  collectionName: 'components_sections_volunteer_cta';
  info: {
    description: 'Section k\u00EAu g\u1ECDi t\u00ECnh nguy\u1EC7n vi\u00EAn';
    displayName: 'Volunteer CTA';
  };
  attributes: {
    benefits: Attribute.Component<'ui.benefit', true>;
    button: Attribute.Component<'ui.button'>;
    description: Attribute.RichText;
    roles: Attribute.Relation<
      'sections.volunteer-cta',
      'manyToMany',
      'api::volunteer-role.volunteer-role'
    >;
    title: Attribute.String;
  };
}

export interface SharedCoreValue extends Schema.Component {
  collectionName: 'components_shared_core_values';
  info: {
    displayName: 'Core Value';
  };
  attributes: {
    description: Attribute.Text;
    icon: Attribute.String;
    title: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedMissionItem extends Schema.Component {
  collectionName: 'components_shared_mission_items';
  info: {
    displayName: 'Mission Item';
  };
  attributes: {
    icon: Attribute.String;
    text: Attribute.String;
  };
}

export interface SharedQuoteBox extends Schema.Component {
  collectionName: 'components_shared_quote_box';
  info: {
    description: 'Box ch\u1EE9a tr\u00EDch d\u1EABn v\u00E0 ng\u01B0\u1EDDi tr\u00EDch d\u1EABn';
    displayName: 'Quote Box';
  };
  attributes: {
    attribution: Attribute.String;
    quote: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'> &
      Attribute.Required;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

export interface SharedTeamMember extends Schema.Component {
  collectionName: 'components_shared_team_member';
  info: {
    description: 'Th\u00E0nh vi\u00EAn trong \u0111\u1ED9i ng\u0169';
    displayName: 'Team Member';
  };
  attributes: {
    email: Attribute.Email;
    facebookUrl: Attribute.String;
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    role: Attribute.String;
  };
}

export interface UiBankInfo extends Schema.Component {
  collectionName: 'components_ui_bank_info';
  info: {
    description: 'Bank donation details';
    displayName: 'Bank Info';
  };
  attributes: {
    accountHolder: Attribute.String;
    accountNumber: Attribute.String;
    bankName: Attribute.String;
  };
}

export interface UiBenefit extends Schema.Component {
  collectionName: 'components_ui_benefit';
  info: {
    description: 'L\u1EE3i \u00EDch khi tham gia t\u00ECnh nguy\u1EC7n';
    displayName: 'Benefit';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_button';
  info: {
    description: 'Button with text, link, variant and icon';
    displayName: 'Button';
  };
  attributes: {
    icon: Attribute.String;
    link: Attribute.String;
    text: Attribute.String;
    variant: Attribute.Enumeration<['primary', 'secondary', 'outline']>;
  };
}

export interface UiCoreValue extends Schema.Component {
  collectionName: 'components_ui_core_value';
  info: {
    description: 'A core value text';
    displayName: 'Core Value';
  };
  attributes: {
    value: Attribute.String;
  };
}

export interface UiCoreValueGroup extends Schema.Component {
  collectionName: 'components_ui_core_value_group';
  info: {
    description: 'Group of Core values with a title';
    displayName: 'Core value group';
  };
  attributes: {
    items: Attribute.Component<'ui.core-value', true>;
    title: Attribute.String;
  };
}

export interface UiGalleryItem extends Schema.Component {
  collectionName: 'components_ui_gallery_item';
  info: {
    description: 'A single gallery item with image, title and date';
    displayName: 'Gallery Item';
  };
  attributes: {
    date: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface UiProgramResults extends Schema.Component {
  collectionName: 'components_ui_program_results';
  info: {
    description: 'Outcomes and metrics for completed programs';
    displayName: 'Program Results';
  };
  attributes: {
    attendees: Attribute.Integer;
    beneficiaries: Attribute.Integer;
    foodServings: Attribute.Integer;
    fundsRaised: Attribute.String;
    fundsUsed: Attribute.String;
    giftsDistributed: Attribute.Integer;
    mealsServed: Attribute.Integer;
    scholarshipAmount: Attribute.String;
    scholarshipsAwarded: Attribute.Integer;
    volunteersParticipated: Attribute.Integer;
  };
}

export interface UiProgramScheduleItem extends Schema.Component {
  collectionName: 'components_ui_program_schedule_items';
  info: {
    displayName: 'Program schedule item';
  };
  attributes: {
    activity: Attribute.String & Attribute.Required;
    time: Attribute.String & Attribute.Required;
  };
}

export interface UiSponsoredItem extends Schema.Component {
  collectionName: 'components_ui_sponsored_item';
  info: {
    description: 'Item representing a cause being supported';
    displayName: 'Cause Item';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface UiStat extends Schema.Component {
  collectionName: 'components_ui_stat';
  info: {
    description: 'Single impact statistic with icon, value, unit, description';
    displayName: 'Stat';
  };
  attributes: {
    description: Attribute.String;
    icon: Attribute.String;
    unit: Attribute.String;
    value: Attribute.String;
  };
}

export interface UiStatGroup extends Schema.Component {
  collectionName: 'components_ui_stat_group';
  info: {
    description: 'Group of stats with a title';
    displayName: 'Stat Group';
  };
  attributes: {
    items: Attribute.Component<'ui.stat', true>;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.footer': GlobalFooter;
      'global.header': GlobalHeader;
      'global.link-item': GlobalLinkItem;
      'global.nav-item': GlobalNavItem;
      'global.quote': GlobalQuote;
      'global.social-link': GlobalSocialLink;
      'sections.about-preview': SectionsAboutPreview;
      'sections.donation': SectionsDonation;
      'sections.featured-programs': SectionsFeaturedPrograms;
      'sections.gallery-preview': SectionsGalleryPreview;
      'sections.header': SectionsHeader;
      'sections.hero': SectionsHero;
      'sections.impact-stats': SectionsImpactStats;
      'sections.join-us-cta': SectionsJoinUsCta;
      'sections.mission-and-values': SectionsMissionAndValues;
      'sections.news-preview': SectionsNewsPreview;
      'sections.our-story': SectionsOurStory;
      'sections.program-hero': SectionsProgramHero;
      'sections.team': SectionsTeam;
      'sections.testimonial': SectionsTestimonial;
      'sections.volunteer-cta': SectionsVolunteerCta;
      'shared.core-value': SharedCoreValue;
      'shared.meta-social': SharedMetaSocial;
      'shared.mission-item': SharedMissionItem;
      'shared.quote_box': SharedQuoteBox;
      'shared.seo': SharedSeo;
      'shared.team-member': SharedTeamMember;
      'ui.bank-info': UiBankInfo;
      'ui.benefit': UiBenefit;
      'ui.button': UiButton;
      'ui.core-value': UiCoreValue;
      'ui.core-value-group': UiCoreValueGroup;
      'ui.gallery-item': UiGalleryItem;
      'ui.program-results': UiProgramResults;
      'ui.program-schedule-item': UiProgramScheduleItem;
      'ui.sponsored-item': UiSponsoredItem;
      'ui.stat': UiStat;
      'ui.stat-group': UiStatGroup;
    }
  }
}
