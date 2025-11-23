// TypeScript types for Prismic CMS data structures

export interface PrismicSlice {
    slice_type: string;
    variation?: string;
    primary: any;
    items?: any[];
}

export interface PrismicDocument {
    data: {
        slices: PrismicSlice[];
    };
}

export interface ProductDetailSliceProps {
    slice: {
        id: string;
        slice_type: string;
        variation: string;
        primary: {
            product_title: Array<{ text: string }>;
            product_summary: Array<{ text: string }>;
            product_price: number;
            currency_symbol: string;
            gallery_main_image: any;
            gallery_images: Array<{ image: any }>;
            badges: Array<{ badge_icon: any; badge_label: string }>;
            color_variants: Array<{ color_value: string; color_label: string }>;
            collab_variants: Array<{ collab_name: string }>;
            has_personalization: boolean;
            personalization_label: string;
            personalization_price: number;
            add_to_cart_link: any;
            warranty_info: any;
            feature_highlights: Array<{ feature_icon: any; feature_label: string }>;
            purchase_help_link: any;
            button: Array<{ feature: any; techspec: any; support: any }>;
            video_section: Array<{ image: any; heading: string; description: string; icon: any }>;
            headings: Array<{ heading: any; paragraph: string }>;
            row: Array<{ media_image: any; heading: any; body: any; cta: any }>;
            banner_image: any;
            play_time_description: string;
        };
    };
}

export interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
}
