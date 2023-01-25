export const LANGUAGES = [
  { label: "Amharic (am)", value: "am", key: "am" },
  { label: "German (de)", value: "de", key: "de" },
  { label: "Malayalam (ml)", value: "ml", key: "ml" },
  { label: "Slovak (sk)", value: "sk", key: "sk" },
  { label: "Arabic (ar)", value: "ar", key: "ar" },
  { label: "Greek (el)", value: "el", key: "el" },
  { label: "Maldivian (dv)", value: "dv", key: "dv" },
  { label: "Slovenian (sl)", value: "sl", key: "sl" },
  { label: "Armenian (hy)", value: "hy", key: "hy" },
  { label: "Gujarati (gu)", value: "gu", key: "gu" },
  { label: "Marathi (mr)", value: "mr", key: "mr" },
  { label: "Sorani Kurdish (ckb)", value: "ckb", key: "ckb" },
  { label: "Basque (eu)", value: "eu", key: "eu" },
  { label: "Haitian Creole (ht)", value: "ht", key: "ht" },
  { label: "Nepali (ne)", value: "ne", key: "ne" },
  { label: "Spanish (es)", value: "es", key: "es" },
  { label: "Bengali (bn)", value: "bn", key: "bn" },
  { label: "Hebrew (iw)", value: "iw", key: "iw" },
  { label: "Norwegian (no)", value: "no", key: "no" },
  { label: "Swedish (sv)", value: "sv", key: "sv" },
  { label: "Bosnian (bs)", value: "bs", key: "bs" },
  { label: "Hindi (hi)", value: "hi", key: "hi" },
  { label: "Oriya (or)", value: "or", key: "or" },
  { label: "Tagalog (tl)", value: "tl", key: "tl" },
  { label: "Bulgarian (bg)", value: "bg", key: "bg" },
  { label: "Latinized Hindi (hi-Latn)", value: "hi-Latn", key: "hi-Latn" },
  { label: "Panjabi (pa)", value: "pa", key: "pa" },
  { label: "Tamil (ta)", value: "ta", key: "ta" },
  { label: "Burmese (my)", value: "my", key: "my" },
  { label: "Hungarian (hu)", value: "hu", key: "hu" },
  { label: "Pashto (ps)", value: "ps", key: "ps" },
  { label: "Telugu (te)", value: "te", key: "te" },
  { label: "Croatian (hr)", value: "hr", key: "hr" },
  { label: "Icelandic (is)", value: "is", key: "is" },
  { label: "Persian (fa)", value: "fa", key: "fa" },
  { label: "Thai (th)", value: "th", key: "th" },
  { label: "Catalan (ca)", value: "ca", key: "ca" },
  { label: "Indonesian (in)", value: "in", key: "in" },
  { label: "Polish (pl)", value: "pl", key: "pl" },
  { label: "Tibetan (bo)", value: "bo", key: "bo" },
  { label: "Czech (cs)", value: "cs", key: "cs" },
  { label: "Italian (it)", value: "it", key: "it" },
  { label: "Portuguese (pt)", value: "pt", key: "pt" },
  { label: "Traditional Chinese (zh-TW)", value: "zh-TW", key: "zh-TW" },
  { label: "Danish (da)", value: "da", key: "da" },
  { label: "Japanese (ja)", value: "ja", key: "ja" },
  { label: "Romanian (ro)", value: "ro", key: "ro" },
  { label: "Turkish (tr)", value: "tr", key: "tr" },
  { label: "Dutch (nl)", value: "nl", key: "nl" },
  { label: "Kannada (kn)", value: "kn", key: "kn" },
  { label: "Russian (ru)", value: "ru", key: "ru" },
  { label: "Ukrainian (uk)", value: "uk", key: "uk" },
  { label: "English (en)", value: "en", key: "en" },
  { label: "Khmer (km)", value: "km", key: "km" },
  { label: "Serbian (sr)", value: "sr", key: "sr" },
  { label: "Urdu (ur)", value: "ur", key: "ur" },
  { label: "Estonian (et)", value: "et", key: "et" },
  { label: "Korean (ko)", value: "ko", key: "ko" },
  { label: "Simplified Chinese (zh-CN)", value: "zh-CN", key: "zh-CN" },
  { label: "Uyghur (ug)", value: "ug", key: "ug" },
  { label: "Finnish (fi)", value: "fi", key: "fi" },
  { label: "Lao (lo)", value: "lo", key: "lo" },
  { label: "Sindhi (sd)", value: "sd", key: "sd" },
  { label: "Vietnamese (vi)", value: "vi", key: "vi" },
  { label: "French (fr)", value: "fr", key: "fr" },
  { label: "Latvian (lv)", value: "lv", key: "lv" },
  { label: "Sinhala (si)", value: "si", key: "si" },
  { label: "Welsh (cy)", value: "cy", key: "cy" },
  { label: "Georgian (ka)", value: "ka", key: "ka" },
  { label: "Lithuanian (lt)", value: "lt", key: "lt" },
];

export const FORM_ITEM_TOOLTIP = {
  CASH_TAG: "",
  TWEET_COUNT:
    "Matches Tweets when the author has posted a number of Tweets that falls within the given range.",
  FOLLOWING_COUNT:
    "Matches Tweets when the author has a friends count (the number of users they follow) that falls within the given range.",
  FOLLOWER_COUNT:
    "Matches Tweets when the author has a followers count within the given range.",
  HAS_IMAGE: "Matches Tweets that contain a recognized URL to an image.",
  RULE_TAG: (
    <ul>
      <li>
        Rule tags have no special meaning as they are simply treated as opaque
        strings carried along with a rule. They are aimed at making
        distinguishing your rules easier at a higher level.
      </li>
      <li>
        Tags provide an easy way to create logical groupings of filtering rules.
        For example, you may generate a unique ID for a specific rule as its
        tag, and allow your app to reference that ID within activities it
        processes to associate a result with specific customers, campaigns,
        categories, or other related groups.
      </li>
      <li>
        Note that tags cannot be updated on an existing rule and can only be
        included when a rule is created.
      </li>
    </ul>
  ),
};
