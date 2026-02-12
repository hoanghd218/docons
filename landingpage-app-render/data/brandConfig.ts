/**
 * DOCONS Brand Configuration
 * Centralized brand information for consistent usage across the application
 */

export const brandConfig = {
  company: {
    fullName: "CÔNG TY TNHH GIẢI PHÁP XÂY DỰNG DOCONS",
    shortName: "DOCONS",
    tagline: "Sẻ Chia Giá Trị - Kiến Tạo Tương Lai",
    taglineEn: "Share Value - Build Future",
  },
  contact: {
    phone: "0345 406 157",
    phoneFormatted: "0345406157",
    email: "xaydungdocons@gmail.com",
    website: "www.xaydungdocons.com",
    websiteUrl: "http://xaydungdocons.com",
  },
  location: {
    address: "64 Phạm Văn Đồng, phường Thanh Điền, tỉnh Tây Ninh",
    mapUrl: "https://maps.app.goo.gl/ysdRf3RYEJBJtg4x5",
    directionsUrl: "https://maps.app.goo.gl/fyrXCEa2YM76K89B8?g_st=ipc",
  },
  social: {
    facebook: "https://www.facebook.com/xaydungdocons",
    zalo: "https://zalo.me/0345406157",
    zaloGroup: "https://zalo.me/g/kjykoa854",
  },
  branding: {
    logo: "/logo.png",
    logoAlt: "DOCONS Logo",
  },
} as const;

export type BrandConfig = typeof brandConfig;
