/* Date updated: Fri JUN 16, 3:50PM */

function getVariableValueOrDefault(variable, defaultValue) {
  return typeof window[variable] !== 'undefined' ? window[variable] : defaultValue;
}

const linguanaLanguagesList = [
  {
    guid: "d9a680d4-8f6e-4ada-b66d-04606041ed21",
    name: "Pashto",
    code: "ps",
    emoji: "🇦🇫",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
  },
  {
    guid: "7d627497-7f83-48de-b19b-89fdd84a58f8",
    name: "Albanian",
    code: "sq",
    emoji: "🇦🇱",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
  },
  {
    guid: "29276940-9f7b-4346-b27f-2cf35c815627",
    name: "Catalan",
    code: "ca",
    emoji: "🇦🇩",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
  },
  {
    guid: "a0450026-b3e4-4538-967d-0b57b3b334a4",
    name: "Armenian",
    code: "hy",
    emoji: "🇦🇲",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
  },
  {
    guid: "de71cc1d-3a8a-4833-b45a-692d53368654",
    name: "Azerbaijani",
    code: "az",
    emoji: "🇦🇿",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg",
  },
  {
    guid: "88ffdbc2-eb93-4a50-a5ff-9001aec3bf0a",
    name: "Bengali",
    code: "bn",
    emoji: "🇧🇩",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
  },
  {
    guid: "057a62c8-9f9e-447f-ac6b-f542a7f800ed",
    name: "Belarusian",
    code: "be",
    emoji: "🇧🇾",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg",
  },
  {
    guid: "48ba96f3-f653-48c4-9e87-71b0db22a619",
    name: "Bosnian",
    code: "bs",
    emoji: "🇧🇦",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg",
  },
  {
    guid: "ba2ba1bd-bf23-4826-b353-08253b343389",
    name: "Norwegian",
    code: "no",
    emoji: "🇧🇻",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg",
  },
  {
    guid: "76b2559b-d7ad-4513-bdd3-dd0481222bea",
    name: "Malay",
    code: "ms",
    emoji: "🇧🇳",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg",
  },
  {
    guid: "25372fa8-a768-409a-ad5a-313a59a5b8f3",
    name: "Bulgarian",
    code: "bg",
    emoji: "🇧🇬",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg",
  },
  {
    guid: "e69050e5-e595-4573-9fd6-00b3bd7b134d",
    name: "Khmer",
    code: "km",
    emoji: "🇰🇭",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg",
  },
  {
    guid: "82715620-519e-43bd-8fd2-975b2e92da99",
    name: "Chinese (Simplified)",
    code: "zh",
    emoji: "🇨🇳",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
  },
  {
    guid: "61f6ff17-8823-4114-b6c5-d889ac55a209",
    name: "Croatian",
    code: "hr",
    emoji: "🇭🇷",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
  },
  {
    guid: "d22aa25c-1787-4c11-b59c-1dfe5aed4cfd",
    name: "Czech",
    code: "cs",
    emoji: "🇨🇿",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg",
  },
  {
    guid: "1c6d2d48-d791-4da9-8f71-bf6e5d6a9f6d",
    name: "Danish",
    code: "da",
    emoji: "🇩🇰",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg",
  },
  {
    guid: "0784febb-34b8-4928-8723-5a3bf9933f73",
    name: "Estonian",
    code: "et",
    emoji: "🇪🇪",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg",
  },
  {
    guid: "cab036f5-7654-469a-9cdf-e19048f55bf0",
    name: "Amharic",
    code: "am",
    emoji: "🇪🇹",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg",
  },
  {
    guid: "328e8038-2c28-4d36-a49a-3e36ab1cc1de",
    name: "Finnish",
    code: "fi",
    emoji: "🇫🇮",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg",
  },
  {
    guid: "387fcd49-e661-4ffe-8e08-e59e58c63142",
    name: "French",
    code: "fr",
    emoji: "🇫🇷",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
  },
  {
    guid: "1d3cdfa8-e765-4aeb-9a18-f849539970f3",
    name: "Georgian",
    code: "ka",
    emoji: "🇬🇪",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg",
  },
  {
    guid: "0702c3be-3f38-41ca-932d-40af94128ce4",
    name: "German",
    code: "de",
    emoji: "🇩🇪",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
  },
  {
    guid: "549c3ac3-acb5-4edd-b23f-1a17b3ea91df",
    name: "Greek (modern)",
    code: "el",
    emoji: "🇬🇷",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
  },
  {
    guid: "4c27104b-4950-4ef1-b5f9-d0ee18788ae6",
    name: "Hungarian",
    code: "hu",
    emoji: "🇭🇺",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg",
  },
  {
    guid: "0e4b66c9-fbdb-42b8-9649-7712b301fefd",
    name: "Icelandic",
    code: "is",
    emoji: "🇮🇸",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg",
  },
  {
    guid: "09f37eec-ba64-452b-a31a-ac630f2f7842",
    name: "Hindi",
    code: "hi",
    emoji: "🇮🇳",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
  },
  {
    guid: "3f4b0172-0bc3-4134-bdee-09abddd91ec4",
    name: "Indonesian",
    code: "id",
    emoji: "🇮🇩",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
  },
  {
    guid: "59bfd1df-5be7-40ea-844e-057d5093411a",
    name: "Persian (Farsi)",
    code: "fa",
    emoji: "🇮🇷",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg",
  },
  {
    guid: "b5159564-7379-45dd-9908-bdd580fe9b53",
    name: "Irish",
    code: "ga",
    emoji: "🇮🇪",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg",
  },
  {
    guid: "b266133e-a70c-457f-84a0-29a4a31b05b5",
    name: "Hebrew (modern)",
    code: "he",
    emoji: "🇮🇱",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg",
  },
  {
    guid: "ed727dbd-55f1-4bdf-b4d7-7ac4f96a920c",
    name: "Italian",
    code: "it",
    emoji: "🇮🇹",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
  },
  {
    guid: "ab86b605-6f65-4025-81ce-d8ae1c855198",
    name: "Japanese",
    code: "ja",
    emoji: "🇯🇵",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg",
  },
  {
    guid: "e3008d3b-d9f0-4dfb-8d67-5f309a6a8ce6",
    name: "Kazakh",
    code: "kk",
    emoji: "🇰🇿",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg",
  },
  {
    guid: "af505bce-0a05-4540-a700-cb7ed05b550d",
    name: "Korean",
    code: "ko",
    emoji: "🇰🇷",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg",
  },
  {
    guid: "9b7e7c1f-10e2-4022-8c35-9068c96fc4c3",
    name: "Lao",
    code: "lo",
    emoji: "🇱🇦",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg",
  },
  {
    guid: "10989450-7e30-4f24-bb47-83ccf9ea46c5",
    name: "Latvian",
    code: "lv",
    emoji: "🇱🇻",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg",
  },
  {
    guid: "1f9a9c43-1d39-4176-aa18-c2b4d3dbbc6a",
    name: "Lithuanian",
    code: "lt",
    emoji: "🇱🇹",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg",
  },
  {
    guid: "c4be3e2e-6d5f-48b2-99d3-5a571f02ad1e",
    name: "Macedonian",
    code: "mk",
    emoji: "🇲🇰",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg",
  },
  {
    guid: "e49ffefa-8797-41c1-992a-138eab6a72f0",
    name: "Malayalam",
    code: "ml",
    emoji: "🇮🇳",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
  },
  {
    guid: "e31e9474-d4d3-41d5-b86a-f0159f7d5436",
    name: "Maltese",
    code: "mt",
    emoji: "🇲🇹",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg",
  },
  {
    guid: "77e0f1a4-d0e7-4882-89f9-8bfe8df93017",
    name: "Nepali",
    code: "ne",
    emoji: "🇳🇵",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg",
  },
  {
    guid: "16b5f2f5-9004-4e8d-9d74-6ebceabf0fe2",
    name: "Dutch",
    code: "nl",
    emoji: "🇳🇱",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg",
  },
  {
    guid: "c9ea6309-0c62-4967-8d6d-1397ef1b1e12",
    name: "Polish",
    code: "pl",
    emoji: "🇵🇱",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
  },
  {
    guid: "7c7882b7-3f61-419b-a733-1f9328a24c06",
    name: "Portuguese",
    code: "pt",
    emoji: "🇵🇹",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
  },
  {
    guid: "dbd0d4d9-8dd6-4b2f-80f9-58c26fd64830",
    name: "Romanian",
    code: "ro",
    emoji: "🇷🇴",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg",
  },
  {
    guid: "0e1dbfab-b30a-437b-99b1-87e6c06d867e",
    name: "Russian",
    code: "ru",
    emoji: "🇷🇺",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg",
  },
  {
    guid: "edca2085-df92-40a5-96e2-5b11f9b30f02",
    name: "Serbian",
    code: "sr",
    emoji: "🇷🇸",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg",
  },
  {
    guid: "c81948fd-21d9-40f3-8f32-79a5d55c0b6b",
    name: "Sinhala",
    code: "si",
    emoji: "🇱🇰",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg",
  },
  {
    guid: "d6e3f94c-b4eb-4c24-85a4-42ce4a9d0904",
    name: "Slovak",
    code: "sk",
    emoji: "🇸🇰",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg",
  },
  {
    guid: "9874e419-88d4-4be0-993e-1bcf6d3e70f3",
    name: "Slovenian",
    code: "sl",
    emoji: "🇸🇮",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg",
  },
  {
    guid: "b7893692-45f3-4689-b0c6-394e1c92e55b",
    name: "Spanish",
    code: "es",
    emoji: "🇪🇸",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
  },
  {
    guid: "a725daea-d7be-4e41-bf0d-6a4c2cc6e9e1",
    name: "Swahili",
    code: "sw",
    emoji: "🇹🇿",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg",
  },
  {
    guid: "9dbf476a-eb75-4d7c-a612-783b7e8b8a9d",
    name: "Swedish",
    code: "sv",
    emoji: "🇸🇪",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg",
  },
  {
    guid: "08a46db9-b39d-4949-b29d-7a534b6f5e47",
    name: "Tamil",
    code: "ta",
    emoji: "🇮🇳",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
  },
  {
    guid: "4316df0f-4d45-45dd-94a0-8ccdb0a3e74a",
    name: "Telugu",
    code: "te",
    emoji: "🇮🇳",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
  },
  {
    guid: "ae7167d5-3c2f-44d9-9f38-bd1677538f2e",
    name: "Thai",
    code: "th",
    emoji: "🇹🇭",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg",
  },
  {
    guid: "a5a39e2e-1c25-4a70-8f0d-9c3af31f6c92",
    name: "Turkish",
    code: "tr",
    emoji: "🇹🇷",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg",
  },
  {
    guid: "b2e5a166-dde7-459f-865f-43f5c61f7a16",
    name: "Ukrainian",
    code: "uk",
    emoji: "🇺🇦",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg",
  },
  {
    guid: "9c78be3b-8b2e-4aeb-a3b5-bc76a42d33de",
    name: "Urdu",
    code: "ur",
    emoji: "🇵🇰",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg",
  },
  {
    guid: "cb5a8a9a-458d-4d96-af7f-259a7777c033",
    name: "Uzbek",
    code: "uz",
    emoji: "🇺🇿",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
  },
  {
    guid: "db7c59db-b201-46f4-8038-4e16f1daa186",
    name: "Vietnamese",
    code: "vi",
    emoji: "🇻🇳",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg",
  },
];

console.log(linguanaLanguagesList);

var DEFAULT_LINGUANA_MAIN_LANGUAGE_CODE = getVariableValueOrDefault(
  "LINGUANA_MAIN_LANGUAGE_CODE",
  "en"
);
var DEFAULT_LINGUANA_SWITCH_CUSTOM_CONTAINER_ID = getVariableValueOrDefault(
  "LINGUANA_SWITCH_CUSTOM_CONTAINER_ID",
  "linguana-lang-switcher"
);
var DEFAULT_LINGUANA_SWITCH_TOGGLE_BUTTON_ID = getVariableValueOrDefault(
  "LINGUANA_SWITCH_TOGGLE_BUTTON_ID",
  "linguana-lang-switcher-toggle"
);
var DEFAULT_LINGUANA_OPTIONS_CONTAINER_ID = getVariableValueOrDefault(
  "LINGUANA_OPTIONS_CONTAINER_ID",
  "linguana-lang-switcher-options-container"
);
var DEFAULT_LINGUANA_SINGLE_OPTION_CLASS = getVariableValueOrDefault(
  "LINGUANA_SINGLE_OPTION_CLASS",
  "linguana-lang-switcher-link"
);
var DEFAULT_LINGUANA_SINGLE_OPTION_FLAG_CONTAINER_CLASS = getVariableValueOrDefault(
  "LINGUANA_SINGLE_OPTION_FLAG_CONTAINER_CLASS",
  "linguana-lang-switcher-flag"
);
var DEFAULT_LINGUANA_SINGLE_OPTION_LABEL_CONTAINER_CLASS = getVariableValueOrDefault(
  "LINGUANA_SINGLE_OPTION_LABEL_CONTAINER_CLASS",
  "linguana-lang-switcher-label"
);
var DEFAULT_LINGUANA_SHOW_LANGUAGE_CODE = getVariableValueOrDefault(
  "LINGUANA_SHOW_LANGUAGE_CODE",
  true
);
var DEFAULT_LINGUANA_SHOW_LANGUAGE_EMOJI = getVariableValueOrDefault(
  "LINGUANA_SHOW_LANGUAGE_EMOJI",
  true
);
var DEFAULT_LINGUANA_SHOW_LANGUAGE_NAME = getVariableValueOrDefault(
  "LINGUANA_SHOW_LANGUAGE_NAME",
  false
);

const onLanguageSwitchClick = () => {
  const languageOptionsContainer = document.getElementById(
    DEFAULT_LINGUANA_OPTIONS_CONTAINER_ID
  );

  if (languageOptionsContainer.style.display === "flex") {
    languageOptionsContainer.style.display = "none";
  } else {
    languageOptionsContainer.style.display = "flex";
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(`#${DEFAULT_LINGUANA_SWITCH_TOGGLE_BUTTON_ID}`)) {
      languageOptionsContainer.style.display = "none";
    }
  });
};

const getLangByCode = (code) =>
  linguanaLanguagesList.find((language) => language.code === code);

var customSwitcher = false;

const getSelectedLanguage = () => {
  var selectedLanguageCode = DEFAULT_LINGUANA_MAIN_LANGUAGE_CODE;

  Object.keys(alternativeLanguagePages).some((page) => {
    if (
      alternativeLanguagePages[page].trim("/") ===
        (document.location.origin + document.location.pathname).trim("/") &&
      page !== "default"
    ) {
      selectedLanguageCode = page;
    }
  });

  return linguanaLanguagesList.find(
    (language) => language.code === selectedLanguageCode
  );
};

const getLanguageLabel = (language) => {
  const selectedLanguage = language || getSelectedLanguage();

  if (DEFAULT_LINGUANA_SHOW_LANGUAGE_CODE && DEFAULT_LINGUANA_SHOW_LANGUAGE_NAME) {
    return `${selectedLanguage.name.toUpperCase()} (${selectedLanguage.code.toUpperCase()})`;
  } else if (DEFAULT_LINGUANA_SHOW_LANGUAGE_CODE) {
    return `${selectedLanguage.code.toUpperCase()}`;
  } else if (DEFAULT_LINGUANA_SHOW_LANGUAGE_NAME) {
    return `${selectedLanguage.name.toUpperCase()}`;
  } else {
    return "";
  }
};

const showLinguanaLanguageSwitcher = () => {
  if (typeof alternativeLanguagePages === "undefined") {
    return;
  }

  let languageSwitcherContainer;

  if (document.getElementById(DEFAULT_LINGUANA_SWITCH_CUSTOM_CONTAINER_ID)) {
    customSwitcher = true;
    languageSwitcherContainer = document.getElementById(
      DEFAULT_LINGUANA_SWITCH_CUSTOM_CONTAINER_ID
    );
  } else {
    languageSwitcherContainer = document.createElement("div");
    languageSwitcherContainer.id = DEFAULT_LINGUANA_SWITCH_CUSTOM_CONTAINER_ID;
  }

  const languageToggleBtn = document.createElement("div");
  languageToggleBtn.id = DEFAULT_LINGUANA_SWITCH_TOGGLE_BUTTON_ID;

  if (!customSwitcher) {
    languageToggleBtn.onclick = onLanguageSwitchClick;
  }

  languageToggleBtn.innerHTML = DEFAULT_LINGUANA_SHOW_LANGUAGE_EMOJI
    ? `<div class="${DEFAULT_LINGUANA_SINGLE_OPTION_FLAG_CONTAINER_CLASS}">${getSelectedLanguage().emoji}</div>`
    : "";

  if (getLanguageLabel()) {
    languageToggleBtn.innerHTML +=
      '\n    <div class="' +
      DEFAULT_LINGUANA_SINGLE_OPTION_LABEL_CONTAINER_CLASS +
      '">' +
      getLanguageLabel() +
      "</div>\n\n    ";
  }

  const languageOptionsContainer = document.createElement("div");
  languageOptionsContainer.id = DEFAULT_LINGUANA_OPTIONS_CONTAINER_ID;
  languageOptionsContainer.style.display = customSwitcher ? "flex" : "none";

  Object.keys(alternativeLanguagePages).map((page) => {
    const languageCode = page === "default" ? DEFAULT_LINGUANA_MAIN_LANGUAGE_CODE : page;
    const language = getLangByCode(languageCode);

    if (!language) {
      return;
    }

    const languageOptionLink = document.createElement("a");
    languageOptionLink.innerHTML = DEFAULT_LINGUANA_SHOW_LANGUAGE_EMOJI
      ?
