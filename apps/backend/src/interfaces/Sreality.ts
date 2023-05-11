export interface SrealityInterface {
  meta_description: string;
  result_size: number;
  _embedded: {
    estates: SrealityEstate[];
    is_saved: {
      email_notification: boolean;
      notification_advert_count: number;
      stack_id: number;
      push_notification: boolean;
      _links: {
        self: {
          href: string;
        };
      };
      removed: boolean;
      saved: boolean;
    };
    not_precise_location_count: {
      result_size_auction: number;
      result_size: number;
      _links: {
        self: {
          profile: string;
          href: string;
          title: string;
        };
      };
    };
  };
  filterLabels: string[];
  title: string;
  filter: {
    category_main_cb: string;
    suggested_districtId: number;
    category_type_cb: string;
    suggested_regionId: number;
  };
  _links: {
    self: {
      href: string;
    };
    clusters_with_bounding_box_of_first_10: {
      href: string;
    };
    rss: {
      href: string;
    };
  };
  locality: string;
  locality_dativ: string;
  logged_in: boolean;
  per_page: number;
  category_instrumental: string;
  page: number;
  filterLabels2: {
    something_more3_3310: string;
    something_more1_3120: string;
    something_more1_3100: string;
    furnished_1: string;
    furnished_2: string;
    furnished_3: string;
    building_condition_9: string;
    something_more2_3150: string;
    something_more2_3130: string;
    ownership_1: string;
    ownership_3: string;
    ownership_2: string;
    something_more3_1820: string;
    energy_efficiency_rating_search_7: string;
    energy_efficiency_rating_search_6: string;
    energy_efficiency_rating_search_5: string;
    energy_efficiency_rating_search_4: string;
    energy_efficiency_rating_search_3: string;
    energy_efficiency_rating_search_2: string;
    energy_efficiency_rating_search_1: string;
    something_more1_3110: string;
    building_condition_6: string;
    something_more1_3090: string;
    building_condition_4: string;
    building_type_search_3: string;
    something_more2_3120: string;
    building_type_search_1: string;
    something_more2_3140: string;
    something_more1_200222: string;
    building_type_search_2: string;
  };
}

interface SrealityURL {
  href: string;
}

interface SrealityEstate {
  labelsReleased: string[][];
  has_panorama: number;
  labels: string[];
  is_auction: boolean;
  labelsAll: string[][];
  seo: {
    category_main_cb: number;
    category_sub_cb: number;
    category_type_cb: number;
    locality: string;
  };
  exclusively_at_rk: number;
  category: number;
  has_floor_plan: number;
  _embedded: {
    favourite: {
      is_favourite: boolean;
      _links: {
        self: {
          profile: string;
          href: string;
          title: string;
        };
      };
    };
    note: {
      note: string;
      _links: {
        self: {
          profile: string;
          href: string;
          title: string;
        };
      };
      has_note: boolean;
    };
  };
  paid_logo: number;
  locality: string;
  has_video: boolean;
  advert_images_count: number;
  new: boolean;
  auctionPrice: number;
  type: number;
  hash_id: number;
  attractive_offer: number;
  price: number;
  price_czk: {
    value_raw: number;
    unit: string;
    name: string;
  };
  _links: {
    dynamicDown: SrealityURL[];
    dynamicUp: SrealityURL[];
    iterator: {
      href: string;
    };
    self: {
      href: string;
    };
    images: SrealityURL[];
    image_middle2: SrealityURL[];
  };
  rus: boolean;
  name: string;
  region_tip: number;
  gps: {
    lat: number;
    lon: number;
  };
  has_matterport_url: boolean;
}
