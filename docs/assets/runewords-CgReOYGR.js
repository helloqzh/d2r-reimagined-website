import { C as CustomElement, w as watch, c as customElement, b as bindable } from "./index-rZJrTnJD.js";
import { d as debounce } from "./debounce-ZwsFz6hU.js";
const name = "runewords";
const template = '<template>\r\n    <h3 class="text-center my-4">\r\n        共 ${filteredRunewords.length} 符文之語\r\n    </h3>\r\n    <div class="container">\r\n        <div class="row align-content-center justify-content-center text-center mb-5">\r\n            <div class="col-12 col-md-4 col-lg-3">\r\n                <div class="au-select mb-2">\r\n                    <moo-select\r\n                            class="w-100"\r\n                            label="凹槽数量"\r\n                            options.bind="amounts"\r\n                            class="standard-betsy-select"\r\n                            value.bind="selectedAmount"\r\n                    ></moo-select>\r\n                </div>\r\n            </div>\r\n            <div class="col-12 col-md-4 col-lg-3">\r\n                <div class="au-select mb-2">\r\n                    <moo-select\r\n                            class="w-100"\r\n                            label="底材类型"\r\n                            options.bind="types"\r\n                            class="standard-betsy-select"\r\n                            value.bind="selectedType"\r\n                    ></moo-select>\r\n                    <moo-checkbox checked.bind="exclusiveType" id="exclusiveType">Exact type only</moo-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class="col-12 col-md-4 col-lg-3">\r\n                <div class="mb-2">\r\n                    <moo-text-field\r\n                            class="w-100"\r\n                            label="Search Runewords"\r\n                            type="text"\r\n                            value.bind="search"\r\n                    ></moo-text-field>\r\n                </div>\r\n            </div>\r\n            <div class="col-12 col-md-4 col-lg-3">\r\n                <div class="mb-2">\r\n                    <moo-text-field\r\n                            class="w-100"\r\n                            label="Runes"\r\n                            type="text"\r\n                            value.bind="searchRunes"\r\n                    ></moo-text-field>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="row gy-5 px-5 text-center">\r\n        <div class="col-12 col-md-6 col-xxl-4" repeat.for="runeword of filteredRunewords">\r\n            <div class="card bg-dark p-2">\r\n                <div class="unique-text fs-4 mb-1">\r\n                    ${runeword.Name}\r\n                </div>\r\n                <div class="combo">\r\n                    <span repeat.for="rune of runeword.Runes">\r\n                        ${rune.Name | runeName} ${$index + 1 !== runeword.Runes.length ? \' + \' : \'\'}\r\n                    </span>\r\n                </div>\r\n                <div class="types py-2">\r\n                    <span repeat.for="type of runeword.Types">\r\n                        ${transformTypeName(type.Name)} ${$index + 1 !== runeword.Types.length ? \' or \' : \'\'}\r\n                    </span>\r\n                </div>\r\n                <div class="requirement" if.bind="actualLevelRequirement(runeword) > 0">\r\n                    等級需求：${actualLevelRequirement(runeword)}\r\n                </div>\r\n                <div class="mt-2">\r\n                    <div class="enhanced" repeat.for="property of runeword.Properties">\r\n                        ${property.PropertyString}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n';
const dependencies = [];
const bindables = {};
let _e;
function register(container) {
  if (!_e) {
    _e = CustomElement.define({ name, template, dependencies, bindables });
  }
  container.register(_e);
}
const __au2ViewDef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bindables,
  default: template,
  dependencies,
  name,
  register,
  template
}, Symbol.toStringTag, { value: "Module" }));
const json = [
  {
    Runes: [
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      }
    ],
    Name: "律法 (Law)",
    Index: "Law",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 33,
    RequiredLevel: 0,
    Code: "Law",
    Properties: [
      {
        PropertyString: "攻擊速度 +15%",
        Index: 2
      },
      {
        PropertyString: "+120-170% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "殺死的怪物就此安息",
        Index: 6
      },
      {
        PropertyString: "使目標減慢 30%",
        Index: 5
      },
      {
        PropertyString: "+48 生命",
        Index: 3
      },
      {
        PropertyString: "+24 法力",
        Index: 4
      },
      {
        PropertyString: "+26 需求等級",
        Index: 0
      },
      {
        PropertyString: "需求 -40%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      }
    ],
    Name: "學識 (Knowledge)",
    Index: "Knowledge",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 11,
    RequiredLevel: 11,
    Code: "Knowledge",
    Properties: [
      {
        PropertyString: "+1 所有技能",
        Index: 3
      },
      {
        PropertyString: "攻擊速度 +15%",
        Index: 4
      },
      {
        PropertyString: "+100% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+1.5 最大傷害 （依角色等級而定）",
        Index: 1
      },
      {
        PropertyString: "+150 準確率",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +10%",
        Index: 2
      },
      {
        PropertyString: "照亮範圍 +3",
        Index: 0
      },
      {
        PropertyString: "+11 需求等級",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      },
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "渴望 (Desire)",
    Index: "Desire",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 13,
    RequiredLevel: 13,
    Code: "Desire",
    Properties: [
      {
        PropertyString: "+30-50% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+30-50% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "+5 所有屬性",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +20-25%",
        Index: 3
      },
      {
        PropertyString: "+100 準確率 （只限武器）",
        Index: 1
      },
      {
        PropertyString: "照亮範圍 +2 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +2 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+30 防禦 （只限盔甲）",
        Index: 1
      },
      {
        PropertyString: "照亮範圍 +2 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "+30 防禦 （只限盾牌）",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "天底 (Nadir)",
    Index: "Nadir",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 13,
    RequiredLevel: 13,
    Code: "Nadir",
    Properties: [
      {
        PropertyString: "+50% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+10 防禦",
        Index: 1
      },
      {
        PropertyString: "+30 對遠程防禦",
        Index: 0
      },
      {
        PropertyString: "+5 力量",
        Index: 5
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 -33%",
        Index: 4
      },
      {
        PropertyString: "照亮範圍 -3",
        Index: 2
      },
      {
        PropertyString: "等級 13 魔影斗蓬（9 次）",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "鋼鐵 (Steel)",
    Index: "Steel",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 13,
    RequiredLevel: 13,
    Code: "Steel",
    Properties: [
      {
        PropertyString: "攻擊速度 +25%",
        Index: 0
      },
      {
        PropertyString: "+20% 傷害強化",
        Index: 4
      },
      {
        PropertyString: "+3 最小傷害",
        Index: 1
      },
      {
        PropertyString: "+3 最大傷害",
        Index: 2
      },
      {
        PropertyString: "+50 準確率",
        Index: 1
      },
      {
        PropertyString: "+50% 機率造成開放傷口",
        Index: 3
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "斥候 (Scout)",
    Index: "Scout",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 13,
    RequiredLevel: 13,
    Code: "Scout",
    Properties: [
      {
        PropertyString: "+1 閃躲",
        Index: 4
      },
      {
        PropertyString: "+10% 跑步 / 行走速度",
        Index: 0
      },
      {
        PropertyString: "+10% 打擊恢復",
        Index: 1
      },
      {
        PropertyString: "+15 防禦",
        Index: 1
      },
      {
        PropertyString: "+30 對遠程防禦",
        Index: 0
      },
      {
        PropertyString: "+5 敏捷",
        Index: 2
      },
      {
        PropertyString: "照亮範圍 +12",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      }
    ],
    Name: "老本的拐杖 (Old Ben's Walking Stick)",
    Index: "Old Ben's Walking Stick",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 13,
    RequiredLevel: 13,
    Code: "Old Ben's Walking Stick",
    Properties: [
      {
        PropertyString: "當你升級時有 100% 機率施展等級 1 速度爆發",
        Index: 3
      },
      {
        PropertyString: "+100% 跑步 / 行走速度",
        Index: 1
      },
      {
        PropertyString: "+50 準確率",
        Index: 1
      },
      {
        PropertyString: "吸取生命 -3.75 （依角色等級而定）",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 -100%",
        Index: 5
      },
      {
        PropertyString: "尋獲魔法物品機率提高 -100%",
        Index: 4
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      },
      {
        PropertyString: "等級 1 傳送術（5 次）",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "機會 (Chance)",
    Index: "Chance",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 15,
    RequiredLevel: 15,
    Code: "Chance",
    Properties: [
      {
        PropertyString: "+15% 施法速度",
        Index: 3
      },
      {
        PropertyString: "+20% 格擋速度",
        Index: 1
      },
      {
        PropertyString: "格擋機率提高 +15%",
        Index: 0
      },
      {
        PropertyString: "+25 法力",
        Index: 2
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +75%",
        Index: 5
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +20-30%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Melee Weapon",
        Index: "Melee Weapon",
        Class: ""
      }
    ],
    Name: "怨恨 (Malice)",
    Index: "Malice",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 15,
    RequiredLevel: 15,
    Code: "Malice",
    Properties: [
      {
        PropertyString: "+33% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+100% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 2
      },
      {
        PropertyString: "每次攻擊降低敵人防禦 100",
        Index: 1
      },
      {
        PropertyString: "+15 防禦",
        Index: 1
      },
      {
        PropertyString: "吸取生命 -5",
        Index: 5
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +0",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "懺悔 (Penitence)",
    Index: "Penitence",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 15,
    RequiredLevel: 15,
    Code: "Penitence",
    Properties: [
      {
        PropertyString: "+15% 打擊恢復",
        Index: 1
      },
      {
        PropertyString: "+15% 格擋速度",
        Index: 0
      },
      {
        PropertyString: "冰凍時間減半",
        Index: 3
      },
      {
        PropertyString: "中毒的時效縮短 50%",
        Index: 4
      },
      {
        PropertyString: "每 1 秒修復 0.1 點耐久度",
        Index: 2
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復 （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tal Rune",
        ItemLevel: 17,
        RequiredLevel: 17,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      }
    ],
    Name: "妒忌 (Jealousy)",
    Index: "Jealousy",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 17,
    RequiredLevel: 17,
    Code: "Jealousy",
    Properties: [
      {
        PropertyString: "+3 戳刺",
        Index: 3
      },
      {
        PropertyString: "+3 近戰精通",
        Index: 4
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 5
      },
      {
        PropertyString: "+122% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+75% 對不死怪物的傷害",
        Index: 1
      },
      {
        PropertyString: "+50 對不死怪物的准确率",
        Index: 0
      },
      {
        PropertyString: "+76 毒素傷害，時效 5 秒",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +7% 法力",
        Index: 2
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tal Rune",
        ItemLevel: 17,
        RequiredLevel: 17,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "隱密 (Stealth)",
    Index: "Stealth",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 17,
    RequiredLevel: 17,
    Code: "Stealth",
    Properties: [
      {
        PropertyString: "+25% 跑步 / 行走速度",
        Index: 2
      },
      {
        PropertyString: "+25% 施法速度",
        Index: 3
      },
      {
        PropertyString: "+25% 打擊恢復",
        Index: 4
      },
      {
        PropertyString: "+6 敏捷",
        Index: 1
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 0
      },
      {
        PropertyString: "毒素抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 3",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tal Rune",
        ItemLevel: 17,
        RequiredLevel: 17,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "螫刺 (Sting)",
    Index: "Sting",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 17,
    RequiredLevel: 17,
    Code: "Sting",
    Properties: [
      {
        PropertyString: "+3 多重箭",
        Index: 3
      },
      {
        PropertyString: "+5 寒冰箭",
        Index: 4
      },
      {
        PropertyString: "攻擊速度 +15%",
        Index: 1
      },
      {
        PropertyString: "+25-40 最大傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 5-8% 法力",
        Index: 2
      },
      {
        PropertyString: "+30 對遠程防禦",
        Index: 0
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 0
      },
      {
        PropertyString: "毒素抗性 +30%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      }
    ],
    Name: "葉子 (Leaf)",
    Index: "Leaf",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 19,
    RequiredLevel: 19,
    Code: "Leaf",
    Properties: [
      {
        PropertyString: "+3 火焰技能",
        Index: 0
      },
      {
        PropertyString: "增加 5-30 火焰傷害",
        Index: 0
      },
      {
        PropertyString: "+3 煉獄之火（只限魔法使）",
        Index: 3
      },
      {
        PropertyString: "+3 火焰彈（只限魔法使）",
        Index: 4
      },
      {
        PropertyString: "+3 暖流（只限魔法使）",
        Index: 5
      },
      {
        PropertyString: "+2 防禦 （依角色等級而定）",
        Index: 1
      },
      {
        PropertyString: "冰寒抗性 +33%",
        Index: 2
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      },
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "耐心 (Patience)",
    Index: "Patience",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 19,
    RequiredLevel: 19,
    Code: "Patience",
    Properties: [
      {
        PropertyString: "+15% 跑步 / 行走速度",
        Index: 5
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+20-25 生命",
        Index: 2
      },
      {
        PropertyString: "+3-5 擊殺生命恢復",
        Index: 3
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 4
      },
      {
        PropertyString: "獲得的經驗值 +1-3%",
        Index: 1
      },
      {
        PropertyString: "+50 對不死怪物的准确率 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+75% 對不死怪物的傷害 （只限武器）",
        Index: 1
      },
      {
        PropertyString: "增加 5-30 火焰傷害 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "擊退 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+30 對遠程防禦 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+5 擊殺生命恢復 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "火焰抗性 +30% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+30 對遠程防禦 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "格擋機率提高 +7% （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "火焰抗性 +35% （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tal Rune",
        ItemLevel: 17,
        RequiredLevel: 17,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "先祖之契 (Ancient's Pledge)",
    Index: "Ancient's Pledge",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 21,
    RequiredLevel: 21,
    Code: "Ancient's Pledge",
    Properties: [
      {
        PropertyString: "+50% 防禦強化",
        Index: 2
      },
      {
        PropertyString: "冰寒抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "電擊抗性 +35%",
        Index: 0
      },
      {
        PropertyString: "火焰抗性 +35%",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +13%",
        Index: 1
      },
      {
        PropertyString: "毒素抗性 +35%",
        Index: 0
      },
      {
        PropertyString: "+10% 受到的傷害轉為法力",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tal Rune",
        ItemLevel: 17,
        RequiredLevel: 17,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      }
    ],
    Name: "神聖雷擊 (Holy Thunder)",
    Index: "Holy Thunder",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 21,
    RequiredLevel: 21,
    Code: "Holy Thunder",
    Properties: [
      {
        PropertyString: "+60% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+10 最大傷害",
        Index: 2
      },
      {
        PropertyString: "-25% 目標防禦",
        Index: 0
      },
      {
        PropertyString: "增加 5-30 火焰傷害",
        Index: 0
      },
      {
        PropertyString: "增加 21-110 電擊傷害",
        Index: 1
      },
      {
        PropertyString: "+76 毒素傷害，時效 5 秒",
        Index: 0
      },
      {
        PropertyString: "+3 神聖電擊（只限聖騎士）",
        Index: 5
      },
      {
        PropertyString: "電擊抗性上限 +5",
        Index: 4
      },
      {
        PropertyString: "電擊抗性 +60%",
        Index: 3
      },
      {
        PropertyString: "等級 7 連鎖閃電（60 次）",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "誘惑 (Temptation)",
    Index: "Temptation",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 21,
    RequiredLevel: 21,
    Code: "Temptation",
    Properties: [
      {
        PropertyString: "+1 所有技能",
        Index: 2
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 4
      },
      {
        PropertyString: "+176% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+50 準確率",
        Index: 1
      },
      {
        PropertyString: "增加 1-50 電擊傷害",
        Index: 0
      },
      {
        PropertyString: "擊退",
        Index: 0
      },
      {
        PropertyString: "-10 所有屬性",
        Index: 3
      },
      {
        PropertyString: "獲得的經驗值 +10%",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "青春 (Youth)",
    Index: "Youth",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 21,
    RequiredLevel: 21,
    Code: "Youth",
    Properties: [
      {
        PropertyString: "擊中時有 9% 機率施展等級 4 削弱",
        Index: 6
      },
      {
        PropertyString: "+90-120% 防禦強化",
        Index: 3
      },
      {
        PropertyString: "生命回復 +8-10",
        Index: 4
      },
      {
        PropertyString: "法力恢復 100%",
        Index: 5
      },
      {
        PropertyString: "冰寒抗性 +30-35%",
        Index: 1
      },
      {
        PropertyString: "電擊抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "火焰抗性 +30-35%",
        Index: 0
      },
      {
        PropertyString: "毒素抗性 +30-35%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "和風 (Zephyr)",
    Index: "Zephyr",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 21,
    RequiredLevel: 21,
    Code: "Zephyr",
    Properties: [
      {
        PropertyString: "被擊中時有 7% 機率施展等級 1 旋風術",
        Index: 4
      },
      {
        PropertyString: "+25% 跑步 / 行走速度",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +25%",
        Index: 1
      },
      {
        PropertyString: "+33% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "+66 準確率",
        Index: 3
      },
      {
        PropertyString: "+25 防禦",
        Index: 5
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 0
      },
      {
        PropertyString: "電擊抗性 +30%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "扭曲 (Distortion)",
    Index: "Distortion",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 23,
    RequiredLevel: 23,
    Code: "Distortion",
    Properties: [
      {
        PropertyString: "+1 傳送術（Warp）",
        Index: 1
      },
      {
        PropertyString: "+3-5% 跑步 / 行走速度",
        Index: 2
      },
      {
        PropertyString: "攻擊速度 +6-10%",
        Index: 4
      },
      {
        PropertyString: "冰寒抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "電擊抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +5-10%",
        Index: 0
      },
      {
        PropertyString: "+10-15 所有屬性",
        Index: 3
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tal Rune",
        ItemLevel: 17,
        RequiredLevel: 17,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      }
    ],
    Name: "圖紋 (Pattern)",
    Index: "Pattern",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 23,
    RequiredLevel: 23,
    Code: "Pattern",
    Properties: [
      {
        PropertyString: "+40-80% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+30% 格擋速度",
        Index: 6
      },
      {
        PropertyString: "+10% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "增加 12-32 火焰傷害",
        Index: 2
      },
      {
        PropertyString: "增加 1-50 電擊傷害",
        Index: 0
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "+76 毒素傷害，時效 5 秒",
        Index: 0
      },
      {
        PropertyString: "+6 力量",
        Index: 4
      },
      {
        PropertyString: "+6 敏捷",
        Index: 5
      },
      {
        PropertyString: "所有抗性 +15%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      },
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "祈禱 (Prayer)",
    Index: "Prayer",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 33,
    RequiredLevel: 23,
    Code: "Prayer",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 10-14 祈禱靈氣",
        Index: 5
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 2
      },
      {
        PropertyString: "格擋機率提高 +20-30%",
        Index: 4
      },
      {
        PropertyString: "增加 10-30 傷害",
        Index: 0
      },
      {
        PropertyString: "+50-100 防禦",
        Index: 1
      },
      {
        PropertyString: "所有抗性 +15-25%",
        Index: 6
      },
      {
        PropertyString: "+7 需求等級",
        Index: 3
      },
      {
        PropertyString: "-25% 目標防禦 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "增加 3-14 寒冰傷害 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "需求 -20% （只限武器）",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性 +30% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "法力恢復 15% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "需求 -15% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性 +35% （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "法力恢復 15% （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "需求 -15% （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "報復 (Revenge)",
    Index: "Revenge",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 23,
    RequiredLevel: 23,
    Code: "Revenge",
    Properties: [
      {
        PropertyString: "+1 魔法使技能等級",
        Index: 0
      },
      {
        PropertyString: "+15% 施法速度",
        Index: 2
      },
      {
        PropertyString: "+50-75 法力",
        Index: 1
      },
      {
        PropertyString: "法力恢復 60%",
        Index: 4
      },
      {
        PropertyString: "魔法抗性 +5-10%",
        Index: 5
      },
      {
        PropertyString: "獲得的經驗值 +1-3%",
        Index: 3
      },
      {
        PropertyString: "+3 需求等級",
        Index: 6
      },
      {
        PropertyString: "+5 擊殺生命恢復 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性 +30% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "格擋機率提高 +7% （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性 +35% （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      }
    ],
    Name: "雪落 (Snowdrop)",
    Index: "Snowdrop",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 23,
    RequiredLevel: 23,
    Code: "Snowdrop",
    Properties: [
      {
        PropertyString: "+3 冰寒技能 （只限魔法使）",
        Index: 0
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "+3 碎冰甲（只限魔法使）",
        Index: 3
      },
      {
        PropertyString: "+3 冰川之槍（只限魔法使）",
        Index: 4
      },
      {
        PropertyString: "+3 暖流（只限魔法使）",
        Index: 5
      },
      {
        PropertyString: "+3 冰霜新星（只限魔法使）",
        Index: 6
      },
      {
        PropertyString: "+2 法力 （依角色等級而定）",
        Index: 1
      },
      {
        PropertyString: "火焰抗性 +33%",
        Index: 2
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "友情 (Friendship)",
    Index: "Friendship",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 33,
    RequiredLevel: 25,
    Code: "Friendship",
    Properties: [
      {
        PropertyString: "+133% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "增加 25-50 傷害",
        Index: 4
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 0
      },
      {
        PropertyString: "+66% 概率造成粉碎打擊",
        Index: 5
      },
      {
        PropertyString: "+34% 致命打擊",
        Index: 6
      },
      {
        PropertyString: "殺死的怪物就此安息",
        Index: 2
      },
      {
        PropertyString: "獲得的經驗值 -3%",
        Index: 1
      },
      {
        PropertyString: "+5 需求等級",
        Index: 0
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tal Rune",
        ItemLevel: 17,
        RequiredLevel: 17,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "邊緣 (Edge)",
    Index: "Edge",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "Edge",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 15 荊棘靈氣",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +35%",
        Index: 1
      },
      {
        PropertyString: "+320-380% 對惡魔的傷害",
        Index: 2
      },
      {
        PropertyString: "+280% 對不死怪物的傷害",
        Index: 3
      },
      {
        PropertyString: "防止怪物自療",
        Index: 4
      },
      {
        PropertyString: "+8-9 所有屬性",
        Index: 6
      },
      {
        PropertyString: "毒素抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14",
        Index: 0
      },
      {
        PropertyString: "所有商人的價格降低 15%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "飢餓 (Hunger)",
    Index: "Hunger",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 33,
    RequiredLevel: 25,
    Code: "Hunger",
    Properties: [
      {
        PropertyString: "格擋機率提高 +15-30%",
        Index: 1
      },
      {
        PropertyString: "擊中竊取 5% 生命",
        Index: 5
      },
      {
        PropertyString: "吸取生命 -1",
        Index: 6
      },
      {
        PropertyString: "魔法抗性 +20%",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +20%",
        Index: 3
      },
      {
        PropertyString: "物理傷害降低 +10-15%",
        Index: 2
      },
      {
        PropertyString: "攻擊者反傷 +14",
        Index: 0
      },
      {
        PropertyString: "+8 需求等級",
        Index: 0
      },
      {
        PropertyString: "需求 -15%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      }
    ],
    Name: "王者的慈悲 (King's Grace)",
    Index: "King's Grace",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "King's Grace",
    Properties: [
      {
        PropertyString: "+100% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+150 準確率",
        Index: 1
      },
      {
        PropertyString: "+100% 對惡魔的傷害",
        Index: 2
      },
      {
        PropertyString: "+100 對惡魔的准确率",
        Index: 4
      },
      {
        PropertyString: "+50% 對不死怪物的傷害",
        Index: 3
      },
      {
        PropertyString: "+100 對不死怪物的准确率",
        Index: 5
      },
      {
        PropertyString: "增加 5-30 火焰傷害",
        Index: 0
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "閃電 (Lightning)",
    Index: "Lightning",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "Lightning",
    Properties: [
      {
        PropertyString: "擊中時有 15% 機率施展等級 9 閃電箭",
        Index: 3
      },
      {
        PropertyString: "裝備時賦予等級 2 神聖電擊靈氣",
        Index: 4
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 2
      },
      {
        PropertyString: "+100-175% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "增加 2-100 電擊傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 0
      },
      {
        PropertyString: "電擊抗性 +35-50%",
        Index: 0
      },
      {
        PropertyString: "電擊吸引 +8-10",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Druid Item",
        Index: "Druid Item",
        Class: "dru"
      }
    ],
    Name: "自然王國 (Nature's Kingdom)",
    Index: "Nature's Kingdom",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "Nature's Kingdom",
    Properties: [
      {
        PropertyString: "+1 德魯伊技能等級",
        Index: 0
      },
      {
        PropertyString: "+20% 施法速度",
        Index: 3
      },
      {
        PropertyString: "+75-100% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "+40-60 法力",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +20%",
        Index: 4
      },
      {
        PropertyString: "+10 所有屬性",
        Index: 5
      },
      {
        PropertyString: "攻擊者反傷 +14",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      }
    ],
    Name: "機緣 (Serendipity)",
    Index: "Serendipity",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "Serendipity",
    Properties: [
      {
        PropertyString: "擊中時有 50% 機率施展等級 2 心靈視野",
        Index: 1
      },
      {
        PropertyString: "+120% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+20% 施法速度",
        Index: 4
      },
      {
        PropertyString: "擊中竊取 14% 生命",
        Index: 0
      },
      {
        PropertyString: "+20 能量",
        Index: 2
      },
      {
        PropertyString: "法力恢復 50%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tal Rune",
        ItemLevel: 17,
        RequiredLevel: 17,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "精神 (Spirit)",
    Index: "Spirit",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "Spirit",
    Properties: [
      {
        PropertyString: "+2 所有技能",
        Index: 6
      },
      {
        PropertyString: "+25-35% 施法速度",
        Index: 4
      },
      {
        PropertyString: "+55% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+250 對遠程防禦",
        Index: 2
      },
      {
        PropertyString: "+22 體能",
        Index: 3
      },
      {
        PropertyString: "+89-112 法力",
        Index: 1
      },
      {
        PropertyString: "魔法吸引 +3-8",
        Index: 5
      },
      {
        PropertyString: "擊中竊取 7% 生命 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+76 毒素傷害，時效 5 秒 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "增加 1-50 電擊傷害 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "增加 3-14 寒冰傷害 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性 +35% （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "電擊抗性 +35% （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "毒素抗性 +35% （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Melee Weapon",
        Index: "Melee Weapon",
        Class: ""
      }
    ],
    Name: "力量 (Strength)",
    Index: "Strength",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "Strength",
    Properties: [
      {
        PropertyString: "+35% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+25% 概率造成粉碎打擊",
        Index: 3
      },
      {
        PropertyString: "+20 力量",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 2
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "神話 (Myth)",
    Index: "Myth",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 33,
    RequiredLevel: 25,
    Code: "Myth",
    Properties: [
      {
        PropertyString: "擊中時有 10% 機率施展等級 1 嘲諷",
        Index: 0
      },
      {
        PropertyString: "被擊中時有 3% 機率施展等級 1 狂嗥",
        Index: 1
      },
      {
        PropertyString: "+2 野蠻人技能等級",
        Index: 2
      },
      {
        PropertyString: "+30 對遠程防禦",
        Index: 0
      },
      {
        PropertyString: "生命回復 +10",
        Index: 3
      },
      {
        PropertyString: "攻擊者反傷 +14",
        Index: 0
      },
      {
        PropertyString: "需求 -15%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Melee Weapon",
        Index: "Melee Weapon",
        Class: ""
      }
    ],
    Name: "榮耀 (Honor)",
    Index: "Honor",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 27,
    RequiredLevel: 27,
    Code: "Honor",
    Properties: [
      {
        PropertyString: "+1 所有技能",
        Index: 2
      },
      {
        PropertyString: "+160% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+200 準確率",
        Index: 3
      },
      {
        PropertyString: "+25% 致命打擊",
        Index: 4
      },
      {
        PropertyString: "+15 防禦",
        Index: 1
      },
      {
        PropertyString: "+10 力量",
        Index: 5
      },
      {
        PropertyString: "生命回復 +10",
        Index: 1
      },
      {
        PropertyString: "物理傷害降低 7",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tal Rune",
        ItemLevel: 17,
        RequiredLevel: 17,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "靈光 (Insight)",
    Index: "Insight",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 27,
    RequiredLevel: 27,
    Code: "Insight",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 12-17 冥想靈氣",
        Index: 5
      },
      {
        PropertyString: "+1-6 致命攻勢",
        Index: 3
      },
      {
        PropertyString: "+200-260% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+35% 施法速度",
        Index: 4
      },
      {
        PropertyString: "+180-250% 準確率加成",
        Index: 1
      },
      {
        PropertyString: "+5 所有屬性",
        Index: 6
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +23%",
        Index: 2
      },
      {
        PropertyString: "+2 擊殺法力恢復 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+76 毒素傷害，時效 5 秒 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "增加 5-30 火焰傷害 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "增加 9 傷害 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 7 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "火焰抗性 +30% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "毒素抗性 +30% （只限盔甲）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "知識 (Lore)",
    Index: "Lore",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 27,
    RequiredLevel: 27,
    Code: "Lore",
    Properties: [
      {
        PropertyString: "+1 所有技能",
        Index: 1
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "電擊抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 7",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 3
      },
      {
        PropertyString: "照亮範圍 +2",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "光輝 (Radiance)",
    Index: "Radiance",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 27,
    RequiredLevel: 27,
    Code: "Radiance",
    Properties: [
      {
        PropertyString: "+75% 防禦強化",
        Index: 5
      },
      {
        PropertyString: "+30 對遠程防禦",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 2
      },
      {
        PropertyString: "+10 能量",
        Index: 1
      },
      {
        PropertyString: "+33 法力",
        Index: 4
      },
      {
        PropertyString: "物理傷害降低 7",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 3",
        Index: 3
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +5",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      }
    ],
    Name: "飢渴 (Thirst)",
    Index: "Thirst",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 27,
    RequiredLevel: 27,
    Code: "Thirst",
    Properties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+125-150% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+9 最小傷害",
        Index: 0
      },
      {
        PropertyString: "+1.5 最大傷害 （依角色等級而定）",
        Index: 5
      },
      {
        PropertyString: "增加 5-30 火焰傷害",
        Index: 0
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "+8-12 擊殺生命恢復",
        Index: 3
      },
      {
        PropertyString: "+2-5 擊殺法力恢復",
        Index: 4
      },
      {
        PropertyString: "獲得的經驗值 +1-3%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      }
    ],
    Name: "真理 (Truth)",
    Index: "Truth",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 27,
    RequiredLevel: 27,
    Code: "Truth",
    Properties: [
      {
        PropertyString: "+1 魔法使技能等級",
        Index: 1
      },
      {
        PropertyString: "+100% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+25% 施法速度",
        Index: 4
      },
      {
        PropertyString: "+9 最小傷害",
        Index: 0
      },
      {
        PropertyString: "+9 最大傷害",
        Index: 0
      },
      {
        PropertyString: "+35 法力",
        Index: 2
      },
      {
        PropertyString: "法力恢復 75%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Barbarian Item",
        Index: "Barbarian Item",
        Class: "bar"
      }
    ],
    Name: "虛無 (Void)",
    Index: "Void",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 27,
    RequiredLevel: 27,
    Code: "Void",
    Properties: [
      {
        PropertyString: "+1 野蠻人技能等級",
        Index: 0
      },
      {
        PropertyString: "+25% 跑步 / 行走速度",
        Index: 4
      },
      {
        PropertyString: "+25% 打擊恢復",
        Index: 3
      },
      {
        PropertyString: "+10-15 最大傷害",
        Index: 1
      },
      {
        PropertyString: "擊中竊取 3-6% 法力",
        Index: 6
      },
      {
        PropertyString: "擊中竊取 3-6% 生命",
        Index: 5
      },
      {
        PropertyString: "+50 生命",
        Index: 2
      },
      {
        PropertyString: "物理傷害降低 7",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "聲韻 (Rhyme)",
    Index: "Rhyme",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 29,
    RequiredLevel: 29,
    Code: "Rhyme",
    Properties: [
      {
        PropertyString: "+40% 格擋速度",
        Index: 0
      },
      {
        PropertyString: "格擋機率提高 +20%",
        Index: 1
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 2
      },
      {
        PropertyString: "無法冰凍",
        Index: 3
      },
      {
        PropertyString: "怪物金幣掉落量提高 +50%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "哀傷 (Sorrow)",
    Index: "Sorrow",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 33,
    RequiredLevel: 29,
    Code: "Sorrow",
    Properties: [
      {
        PropertyString: "攻擊速度 +40%",
        Index: 1
      },
      {
        PropertyString: "+160-200% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +6% 法力",
        Index: 2
      },
      {
        PropertyString: "吸取生命 -2",
        Index: 6
      },
      {
        PropertyString: "法力恢復 50%",
        Index: 5
      },
      {
        PropertyString: "+6-9 擊殺生命恢復",
        Index: 4
      },
      {
        PropertyString: "等級 20 黏土魔像（5 次）",
        Index: 3
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "低語 (Whisper)",
    Index: "Whisper",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 29,
    RequiredLevel: 29,
    Code: "Whisper",
    Properties: [
      {
        PropertyString: "攻擊速度 +60%",
        Index: 0
      },
      {
        PropertyString: "+100% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "增加 25-75 傷害",
        Index: 0
      },
      {
        PropertyString: "-15% 目標防禦",
        Index: 3
      },
      {
        PropertyString: "生命回復 +6",
        Index: 2
      },
      {
        PropertyString: "需求 -25%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "和平 (Peace)",
    Index: "Peace",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 29,
    RequiredLevel: 29,
    Code: "Peace",
    Properties: [
      {
        PropertyString: "擊中時有 2% 機率施展等級 15 女武神",
        Index: 0
      },
      {
        PropertyString: "被擊中時有 4% 機率施展等級 5 緩箭術",
        Index: 1
      },
      {
        PropertyString: "+2 亞馬遜技能等級",
        Index: 2
      },
      {
        PropertyString: "+2 致命攻勢",
        Index: 3
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      }
    ],
    Name: "督瑞爾的獠牙 (Duriel's Fang)",
    Index: "Duriel's Fang",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 29,
    RequiredLevel: 29,
    Code: "Duriel's Fang",
    Properties: [
      {
        PropertyString: "+1-2 毒素技能",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "+50 準確率",
        Index: 3
      },
      {
        PropertyString: "+10-15% 毒素技能傷害",
        Index: 1
      },
      {
        PropertyString: "敵人毒素抗性 -5-8%",
        Index: 2
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      }
    ],
    Name: "美貌 (Beauty)",
    Index: "Beauty",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 31,
    RequiredLevel: 31,
    Code: "Beauty",
    Properties: [
      {
        PropertyString: "+3 弓與弩技能 （只限亞馬遜）",
        Index: 0
      },
      {
        PropertyString: "增加 30-60 傷害",
        Index: 1
      },
      {
        PropertyString: "無視目標防禦",
        Index: 5
      },
      {
        PropertyString: "擊中竊取 8% 生命",
        Index: 4
      },
      {
        PropertyString: "+50% 機率造成開放傷口",
        Index: 6
      },
      {
        PropertyString: "25% 機率擊中使怪物逃跑",
        Index: 0
      },
      {
        PropertyString: "使目標減慢 15%",
        Index: 3
      },
      {
        PropertyString: "擊退",
        Index: 2
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "驚懼 (Dread)",
    Index: "Dread",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 31,
    RequiredLevel: 31,
    Code: "Dread",
    Properties: [
      {
        PropertyString: "擊中時有 13% 機率施展等級 13 電能彈",
        Index: 1
      },
      {
        PropertyString: "+20% 跑步 / 行走速度",
        Index: 2
      },
      {
        PropertyString: "+100-125% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+15 防禦",
        Index: 1
      },
      {
        PropertyString: "+0.5 力量 （依角色等級而定）",
        Index: 5
      },
      {
        PropertyString: "+0.5 敏捷 （依角色等級而定）",
        Index: 6
      },
      {
        PropertyString: "生命回復 +7",
        Index: 0
      },
      {
        PropertyString: "+6-8 擊殺生命恢復",
        Index: 3
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      },
      {
        PropertyString: "+1 需求等級",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Paladin Item",
        Index: "Paladin Item",
        Class: "pal"
      }
    ],
    Name: "天堂意志 (Heaven's Will)",
    Index: "Heaven's Will",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 31,
    RequiredLevel: 31,
    Code: "Heaven's Will",
    Properties: [
      {
        PropertyString: "+1 聖騎士技能等級",
        Index: 0
      },
      {
        PropertyString: "+30-50% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+30% 格擋速度",
        Index: 2
      },
      {
        PropertyString: "格擋機率提高 +50%",
        Index: 1
      },
      {
        PropertyString: "殺死的怪物就此安息",
        Index: 4
      },
      {
        PropertyString: "+6 天堂之拳（只限聖騎士）",
        Index: 5
      },
      {
        PropertyString: "生命回復 +7",
        Index: 0
      },
      {
        PropertyString: "+5 擊殺生命恢復",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      }
    ],
    Name: "懲罰 (Punishment)",
    Index: "Punishment",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 31,
    RequiredLevel: 31,
    Code: "Punishment",
    Properties: [
      {
        PropertyString: "當你升級時有 100% 機率施展等級 35 雷電風暴",
        Index: 5
      },
      {
        PropertyString: "+135% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "增加 20-40 傷害",
        Index: 1
      },
      {
        PropertyString: "增加 1-50 電擊傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 0
      },
      {
        PropertyString: "25% 機率擊中使怪物逃跑",
        Index: 0
      },
      {
        PropertyString: "吸取生命 -3",
        Index: 2
      },
      {
        PropertyString: "+20 所有屬性",
        Index: 4
      },
      {
        PropertyString: "物理傷害降低 15",
        Index: 6
      },
      {
        PropertyString: "獲得的經驗值 -2%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      }
    ],
    Name: "復仇 (Vengeance)",
    Index: "Vengeance",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 31,
    RequiredLevel: 31,
    Code: "Vengeance",
    Properties: [
      {
        PropertyString: "當你死亡時有 100% 機率施展等級 55 劇毒新星",
        Index: 1
      },
      {
        PropertyString: "+1 刺客技能等級",
        Index: 5
      },
      {
        PropertyString: "增加 35-70 傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 6% 生命",
        Index: 2
      },
      {
        PropertyString: "25% 機率擊中使怪物逃跑",
        Index: 0
      },
      {
        PropertyString: "擊退",
        Index: 0
      },
      {
        PropertyString: "+40 生命",
        Index: 3
      },
      {
        PropertyString: "+10 所有屬性",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "黑色 (Black)",
    Index: "Black",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "Black",
    Properties: [
      {
        PropertyString: "攻擊速度 +15%",
        Index: 2
      },
      {
        PropertyString: "+120% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+200 準確率",
        Index: 4
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "+40% 概率造成粉碎打擊",
        Index: 0
      },
      {
        PropertyString: "擊退",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 2",
        Index: 3
      },
      {
        PropertyString: "等級 4 屍爆（12 次）",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "壁壘 (Bulwark)",
    Index: "Bulwark",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "Bulwark",
    Properties: [
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 4-6% 生命",
        Index: 4
      },
      {
        PropertyString: "+75-100% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "生命回復 +30",
        Index: 3
      },
      {
        PropertyString: "物理傷害降低 +10-15%",
        Index: 2
      },
      {
        PropertyString: "物理傷害降低 7",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tal Rune",
        ItemLevel: 17,
        RequiredLevel: 17,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "治癒 (Cure)",
    Index: "Cure",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "Cure",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 1 淨化靈氣",
        Index: 4
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+75-100% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "毒素抗性 +40-60%",
        Index: 2
      },
      {
        PropertyString: "中毒的時效縮短 50%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "接地 (Ground)",
    Index: "Ground",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "Ground",
    Properties: [
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+75-100% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "電擊抗性 +40-60%",
        Index: 2
      },
      {
        PropertyString: "電擊吸引 +10-15%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "憎恨 (Hatred)",
    Index: "Hatred",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "Hatred",
    Properties: [
      {
        PropertyString: "+1 所有技能",
        Index: 1
      },
      {
        PropertyString: "+140-190% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+100-200% 對惡魔的傷害",
        Index: 5
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "凍結目標 +3",
        Index: 4
      },
      {
        PropertyString: "擊退",
        Index: 3
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "火爐 (Hearth)",
    Index: "Hearth",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "Hearth",
    Properties: [
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+75-100% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性 +40-60%",
        Index: 2
      },
      {
        PropertyString: "寒冰吸引 +10-15%",
        Index: 3
      },
      {
        PropertyString: "無法冰凍",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      }
    ],
    Name: "神聖之淚 (Holy Tears)",
    Index: "Holy Tears",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "Holy Tears",
    Properties: [
      {
        PropertyString: "擊中時有 16% 機率施展等級 9 天堂之拳",
        Index: 1
      },
      {
        PropertyString: "+5 熱忱打擊",
        Index: 5
      },
      {
        PropertyString: "攻擊速度 +40%",
        Index: 6
      },
      {
        PropertyString: "+160-200% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+35% 準確率加成",
        Index: 3
      },
      {
        PropertyString: "+300% 對惡魔的傷害",
        Index: 2
      },
      {
        PropertyString: "使目標減慢 35%",
        Index: 4
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "瘋狂 (Madness)",
    Index: "Madness",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "Madness",
    Properties: [
      {
        PropertyString: "被擊中時有 9% 機率施展等級 5 混亂",
        Index: 0
      },
      {
        PropertyString: "擊中時有 12% 機率施展等級 16 恐懼",
        Index: 1
      },
      {
        PropertyString: "+1 所有技能",
        Index: 4
      },
      {
        PropertyString: "攻擊速度 +15%",
        Index: 2
      },
      {
        PropertyString: "+15% 格擋速度",
        Index: 5
      },
      {
        PropertyString: "+35-50 生命",
        Index: 6
      },
      {
        PropertyString: "+1 需求等級",
        Index: 3
      },
      {
        PropertyString: "+10 體能 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "生命回復 +7 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "法力恢復 15% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+10 體能 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "生命回復 +7 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "法力恢復 15% （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Melee Weapon",
        Index: "Melee Weapon",
        Class: ""
      }
    ],
    Name: "鮮紅 (Red)",
    Index: "Red",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "Red",
    Properties: [
      {
        PropertyString: "擊中時有 8% 機率施展等級 4 隕石術",
        Index: 6
      },
      {
        PropertyString: "+155% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+15-25% 火焰技能傷害",
        Index: 5
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性 -20%",
        Index: 4
      },
      {
        PropertyString: "火焰抗性 +95-110%",
        Index: 2
      },
      {
        PropertyString: "火焰吸引 +10%",
        Index: 3
      },
      {
        PropertyString: "每 1 秒修復 0.2 點耐久度",
        Index: 1
      },
      {
        PropertyString: "需求 -15%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      }
    ],
    Name: "懷疑之影 (Shadow of Doubt)",
    Index: "Shadow of Doubt",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "Shadow of Doubt",
    Properties: [
      {
        PropertyString: "+1-3 詛咒 （只限死靈法師）",
        Index: 0
      },
      {
        PropertyString: "+1-3 毒素與骸骨技能 （只限死靈法師）",
        Index: 1
      },
      {
        PropertyString: "+1-3 召喚技能 （只限死靈法師）",
        Index: 2
      },
      {
        PropertyString: "+15% 施法速度",
        Index: 3
      },
      {
        PropertyString: "+10% 毒素技能傷害",
        Index: 4
      },
      {
        PropertyString: "25% 機率擊中使怪物逃跑",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "和緩 (Temper)",
    Index: "Temper",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "Temper",
    Properties: [
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+75-100% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "火焰抗性 +40-60%",
        Index: 2
      },
      {
        PropertyString: "火焰吸引 +10-15%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      }
    ],
    Name: "蒼白 (White)",
    Index: "White",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "White",
    Properties: [
      {
        PropertyString: "+3 毒素與骸骨技能 （只限死靈法師）",
        Index: 0
      },
      {
        PropertyString: "+20% 施法速度",
        Index: 2
      },
      {
        PropertyString: "+3 骸骨護甲（只限死靈法師）",
        Index: 4
      },
      {
        PropertyString: "+2 骨矛（只限死靈法師）",
        Index: 5
      },
      {
        PropertyString: "+4 骷髏專精（只限死靈法師）",
        Index: 6
      },
      {
        PropertyString: "25% 機率擊中使怪物逃跑",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "+13 法力",
        Index: 3
      },
      {
        PropertyString: "魔法傷害降低 4",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      }
    ],
    Name: "欺暪 (Deception)",
    Index: "Deception",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 37,
    RequiredLevel: 37,
    Code: "Deception",
    Properties: [
      {
        PropertyString: "+1 傳送術（Warp）",
        Index: 2
      },
      {
        PropertyString: "+165-205% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+40% 打擊恢復",
        Index: 3
      },
      {
        PropertyString: "+1 最大傷害 （依角色等級而定）",
        Index: 4
      },
      {
        PropertyString: "擊中竊取 8% 生命",
        Index: 1
      },
      {
        PropertyString: "+15% 火焰技能傷害",
        Index: 5
      },
      {
        PropertyString: "25% 機率擊中使怪物逃跑",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "等級 18 隕石術（150 次）",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      }
    ],
    Name: "記憶 (Memory)",
    Index: "Memory",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 37,
    RequiredLevel: 37,
    Code: "Memory",
    Properties: [
      {
        PropertyString: "+3 魔法使技能等級",
        Index: 4
      },
      {
        PropertyString: "+33% 施法速度",
        Index: 3
      },
      {
        PropertyString: "+9 最小傷害",
        Index: 0
      },
      {
        PropertyString: "-25% 目標防禦",
        Index: 0
      },
      {
        PropertyString: "+3 能量 Shield （只限魔法使）",
        Index: 5
      },
      {
        PropertyString: "+2 靜電力場（只限魔法使）",
        Index: 6
      },
      {
        PropertyString: "+50% 防禦強化",
        Index: 2
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "法力上限 +20%",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 7",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "煙霧 (Smoke)",
    Index: "Smoke",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 37,
    RequiredLevel: 37,
    Code: "Smoke",
    Properties: [
      {
        PropertyString: "+20% 打擊恢復",
        Index: 3
      },
      {
        PropertyString: "+75% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "+280 對遠程防禦",
        Index: 0
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 2
      },
      {
        PropertyString: "照亮範圍 -1",
        Index: 4
      },
      {
        PropertyString: "等級 6 削弱（18 次）",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "燦爛 (Splendor)",
    Index: "Splendor",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 37,
    RequiredLevel: 37,
    Code: "Splendor",
    Properties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+10% 施法速度",
        Index: 1
      },
      {
        PropertyString: "+20% 格擋速度",
        Index: 2
      },
      {
        PropertyString: "+60-100% 防禦強化",
        Index: 3
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +50%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +20%",
        Index: 5
      },
      {
        PropertyString: "照亮範圍 +3",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "和諧 (Harmony)",
    Index: "Harmony",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 39,
    RequiredLevel: 39,
    Code: "Harmony",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 10 活力靈氣",
        Index: 0
      },
      {
        PropertyString: "+2-6 女武神",
        Index: 4
      },
      {
        PropertyString: "+200-275% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "增加 55-160 火焰傷害",
        Index: 2
      },
      {
        PropertyString: "增加 55-160 寒冰傷害",
        Index: 3
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "法力恢復 20%",
        Index: 5
      },
      {
        PropertyString: "物理傷害降低 7",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      },
      {
        PropertyString: "等級 20 重生（25 次）",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "催促 (Hustle)",
    Index: "Hustle (Torso)",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 39,
    RequiredLevel: 39,
    Code: "Hustle (Torso)",
    Properties: [
      {
        PropertyString: "+6 閃避",
        Index: 3
      },
      {
        PropertyString: "+65% 跑步 / 行走速度",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +40%",
        Index: 1
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +10%",
        Index: 2
      },
      {
        PropertyString: "+5 擊殺生命恢復",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "催促 (Hustle)",
    Index: "Hustle (Weapon)",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 39,
    RequiredLevel: 39,
    Code: "Hustle (Weapon)",
    Properties: [
      {
        PropertyString: "擊中時有 5% 機率施展等級 1 速度爆發",
        Index: 0
      },
      {
        PropertyString: "裝備時賦予等級 1 狂熱靈氣",
        Index: 3
      },
      {
        PropertyString: "攻擊速度 +30%",
        Index: 1
      },
      {
        PropertyString: "+180-200% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "+75% 對不死怪物的傷害",
        Index: 1
      },
      {
        PropertyString: "+50 對不死怪物的准确率",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "旋律 (Melody)",
    Index: "Melody",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 39,
    RequiredLevel: 39,
    Code: "Melody",
    Properties: [
      {
        PropertyString: "+3 弓與弩技能 （只限亞馬遜）",
        Index: 1
      },
      {
        PropertyString: "+50% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+300% 對不死怪物的傷害",
        Index: 5
      },
      {
        PropertyString: "+3 致命攻勢（只限亞馬遜）",
        Index: 2
      },
      {
        PropertyString: "+3 閃躲（只限亞馬遜）",
        Index: 3
      },
      {
        PropertyString: "+3 緩箭術（只限亞馬遜）",
        Index: 4
      },
      {
        PropertyString: "+30 對遠程防禦",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "疫病 (Pestilence)",
    Index: "Pestilence",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 39,
    RequiredLevel: 39,
    Code: "Pestilence",
    Properties: [
      {
        PropertyString: "+1 毒素技能",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 5
      },
      {
        PropertyString: "+150-175% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+9 最小傷害",
        Index: 0
      },
      {
        PropertyString: "無視目標防禦",
        Index: 6
      },
      {
        PropertyString: "+10% 毒素技能傷害",
        Index: 4
      },
      {
        PropertyString: "+3 淬毒匕首（只限死靈法師）",
        Index: 1
      },
      {
        PropertyString: "+3 毒爆（只限死靈法師）",
        Index: 2
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      }
    ],
    Name: "疑問 (Question)",
    Index: "Question",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 39,
    RequiredLevel: 39,
    Code: "Question",
    Properties: [
      {
        PropertyString: "擊退",
        Index: 0
      },
      {
        PropertyString: "+0.75 力量 （依角色等級而定）",
        Index: 2
      },
      {
        PropertyString: "0 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "+0.75 敏捷 （依角色等級而定）",
        Index: 3
      },
      {
        PropertyString: "+0.75 體能 （依角色等級而定）",
        Index: 4
      },
      {
        PropertyString: "+0.75 能量 （依角色等級而定）",
        Index: 5
      },
      {
        PropertyString: "怪物金幣掉落量提高 +2% （依角色等級而定）",
        Index: 1
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +1.5% （依角色等級而定）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      }
    ],
    Name: "清水 (Water)",
    Index: "Water",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 39,
    RequiredLevel: 39,
    Code: "Water",
    Properties: [
      {
        PropertyString: "當你升級時有 100% 機率施展等級 25 戰鬥命令",
        Index: 5
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "+175% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+25% 打擊恢復",
        Index: 4
      },
      {
        PropertyString: "增加 33-122 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "生命回復 +3-5",
        Index: 2
      },
      {
        PropertyString: "法力恢復 35%",
        Index: 1
      },
      {
        PropertyString: "火焰抗性 +50%",
        Index: 6
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "羨慕 (Envy)",
    Index: "Envy",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 41,
    RequiredLevel: 41,
    Code: "Envy",
    Properties: [
      {
        PropertyString: "攻擊速度 +30%",
        Index: 1
      },
      {
        PropertyString: "+222% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +6% 法力",
        Index: 2
      },
      {
        PropertyString: "擊中竊取 6% 生命",
        Index: 3
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 6
      },
      {
        PropertyString: "獲得的經驗值 +2%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +35%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      },
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "機運 (Fortune's Favor)",
    Index: "Fortune's Favor",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 41,
    RequiredLevel: 41,
    Code: "Fortune's Favor",
    Properties: [
      {
        PropertyString: "+1 所有技能",
        Index: 1
      },
      {
        PropertyString: "+30-50 生命",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +10%",
        Index: 3
      },
      {
        PropertyString: "怪物金幣掉落量提高 +200%",
        Index: 5
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +2% （依角色等級而定）",
        Index: 0
      },
      {
        PropertyString: "+5 需求等級",
        Index: 4
      },
      {
        PropertyString: "+10 力量 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+10 體能 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+10 力量 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+10 體能 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+10 力量 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "+10 體能 （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "獅子心 (Lionheart)",
    Index: "Lionheart",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 41,
    RequiredLevel: 41,
    Code: "Lionheart",
    Properties: [
      {
        PropertyString: "+20% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+25 力量",
        Index: 0
      },
      {
        PropertyString: "+15 敏捷",
        Index: 2
      },
      {
        PropertyString: "+20 體能",
        Index: 1
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "+50 生命",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 5
      },
      {
        PropertyString: "需求 -15%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      }
    ],
    Name: "遵從 (Obedience)",
    Index: "Obedience",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 41,
    RequiredLevel: 41,
    Code: "Obedience",
    Properties: [
      {
        PropertyString: "殺死敵人時有 30% 機率施展等級 21 附魔",
        Index: 2
      },
      {
        PropertyString: "+370% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+40% 打擊恢復",
        Index: 5
      },
      {
        PropertyString: "-25% 目標防禦",
        Index: 0
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "敵人火焰抗性 -25%",
        Index: 3
      },
      {
        PropertyString: "+40% 概率造成粉碎打擊",
        Index: 1
      },
      {
        PropertyString: "+200-300 防禦",
        Index: 4
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +20-30%",
        Index: 6
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      }
    ],
    Name: "不屈意志 (Unbending Will)",
    Index: "Unbending Will",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 41,
    RequiredLevel: 41,
    Code: "Unbending Will",
    Properties: [
      {
        PropertyString: "擊中時有 18% 機率施展等級 18 嘲諷",
        Index: 1
      },
      {
        PropertyString: "+3 戰鬥技能 （只限野蠻人）",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20-30%",
        Index: 2
      },
      {
        PropertyString: "+300-350% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+9 最大傷害",
        Index: 0
      },
      {
        PropertyString: "+50 準確率",
        Index: 1
      },
      {
        PropertyString: "+75% 對不死怪物的傷害",
        Index: 1
      },
      {
        PropertyString: "+50 對不死怪物的准确率",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 8-10% 生命",
        Index: 6
      },
      {
        PropertyString: "防止怪物自療",
        Index: 5
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 8",
        Index: 4
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "執法者 (Lawbringer)",
    Index: "Lawbringer",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 43,
    RequiredLevel: 43,
    Code: "Lawbringer",
    Properties: [
      {
        PropertyString: "擊中時有 20% 機率施展等級 15 衰老",
        Index: 0
      },
      {
        PropertyString: "裝備時賦予等級 18 庇護靈氣",
        Index: 1
      },
      {
        PropertyString: "-50% 目標防禦",
        Index: 2
      },
      {
        PropertyString: "增加 150-220 火焰傷害",
        Index: 3
      },
      {
        PropertyString: "增加 130-180 寒冰傷害",
        Index: 4
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 0
      },
      {
        PropertyString: "殺死的怪物就此安息",
        Index: 5
      },
      {
        PropertyString: "+200-250 對遠程防禦",
        Index: 6
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +75%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "熱情 (Passion)",
    Index: "Passion",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 43,
    RequiredLevel: 43,
    Code: "Passion",
    Properties: [
      {
        PropertyString: "+1 熱忱打擊",
        Index: 1
      },
      {
        PropertyString: "+1 狂暴之擊",
        Index: 3
      },
      {
        PropertyString: "攻擊速度 +25%",
        Index: 4
      },
      {
        PropertyString: "+160-210% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+50-80% 準確率加成",
        Index: 2
      },
      {
        PropertyString: "+75% 對不死怪物的傷害",
        Index: 1
      },
      {
        PropertyString: "+50 對不死怪物的准确率",
        Index: 0
      },
      {
        PropertyString: "增加 1-50 電擊傷害",
        Index: 0
      },
      {
        PropertyString: "擊中使目標目盲 +10",
        Index: 6
      },
      {
        PropertyString: "25% 機率擊中使怪物逃跑",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +75%",
        Index: 0
      },
      {
        PropertyString: "等級 3 狼獾之心（12 次）",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "虔誠 (Piety)",
    Index: "Piety",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 43,
    RequiredLevel: 43,
    Code: "Piety",
    Properties: [
      {
        PropertyString: "+1 所有技能",
        Index: 3
      },
      {
        PropertyString: "+20% 施法速度",
        Index: 4
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+90-125% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+30 對遠程防禦",
        Index: 0
      },
      {
        PropertyString: "+20 能量",
        Index: 1
      },
      {
        PropertyString: "+1 法力 （依角色等級而定）",
        Index: 2
      },
      {
        PropertyString: "魔法抗性 +15-25%",
        Index: 6
      },
      {
        PropertyString: "所有抗性 +15-25%",
        Index: 5
      },
      {
        PropertyString: "怪物金幣掉落量提高 +50%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      }
    ],
    Name: "暴風雨 (Tempest)",
    Index: "Tempest",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 43,
    RequiredLevel: 43,
    Code: "Tempest",
    Properties: [
      {
        PropertyString: "+3 陷阱 （只限刺客）",
        Index: 5
      },
      {
        PropertyString: "+2 刺客技能等級",
        Index: 4
      },
      {
        PropertyString: "+140-190% 傷害強化",
        Index: 6
      },
      {
        PropertyString: "增加 100-200 火焰傷害",
        Index: 1
      },
      {
        PropertyString: "增加 1-300 電擊傷害",
        Index: 2
      },
      {
        PropertyString: "增加 30-70 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "+20-30% 閃電技能傷害",
        Index: 3
      },
      {
        PropertyString: "怪物金幣掉落量提高 +75%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      }
    ],
    Name: "背信 (Treachery)",
    Index: "Treachery",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 43,
    RequiredLevel: 43,
    Code: "Treachery",
    Properties: [
      {
        PropertyString: "擊中時有 25% 機率施展等級 15 淬毒",
        Index: 0
      },
      {
        PropertyString: "被擊中時有 5% 機率施展等級 15 影散",
        Index: 1
      },
      {
        PropertyString: "+2 刺客技能等級",
        Index: 2
      },
      {
        PropertyString: "攻擊速度 +45%",
        Index: 3
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +50%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "理性之聲 (Voice of Reason)",
    Index: "Voice of Reason",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 43,
    RequiredLevel: 43,
    Code: "Voice of Reason",
    Properties: [
      {
        PropertyString: "擊中時有 15% 機率施展等級 13 冰封球",
        Index: 0
      },
      {
        PropertyString: "擊中時有 18% 機率施展等級 20 寒冰球",
        Index: 1
      },
      {
        PropertyString: "+50 準確率",
        Index: 1
      },
      {
        PropertyString: "+220-350% 對惡魔的傷害",
        Index: 2
      },
      {
        PropertyString: "+355-375% 對不死怪物的傷害",
        Index: 3
      },
      {
        PropertyString: "+50 對不死怪物的准确率",
        Index: 0
      },
      {
        PropertyString: "增加 100-220 寒冰傷害",
        Index: 4
      },
      {
        PropertyString: "敵人冰寒抗性 -24%",
        Index: 5
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "無法冰凍",
        Index: 6
      },
      {
        PropertyString: "怪物金幣掉落量提高 +75%",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "財富 (Wealth)",
    Index: "Wealth",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 43,
    RequiredLevel: 43,
    Code: "Wealth",
    Properties: [
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +300%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      }
    ],
    Name: "愛情 (Love)",
    Index: "Love",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 45,
    RequiredLevel: 45,
    Code: "Love",
    Properties: [
      {
        PropertyString: "+2 亞馬遜技能等級",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +40%",
        Index: 4
      },
      {
        PropertyString: "+200% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+1 射出爆炸的弓矢或弩箭",
        Index: 6
      },
      {
        PropertyString: "+50 準確率",
        Index: 1
      },
      {
        PropertyString: "+75% 對惡魔的傷害",
        Index: 1
      },
      {
        PropertyString: "+100 對惡魔的准确率",
        Index: 0
      },
      {
        PropertyString: "+30% 致命打擊",
        Index: 5
      },
      {
        PropertyString: "+75 生命",
        Index: 1
      },
      {
        PropertyString: "+50 法力",
        Index: 2
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "暗影 (Shadow)",
    Index: "Shadow",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 45,
    RequiredLevel: 45,
    Code: "Shadow",
    Properties: [
      {
        PropertyString: "被擊中時有 25% 機率施展等級 12 魔影斗蓬",
        Index: 4
      },
      {
        PropertyString: "+50% 跑步 / 行走速度",
        Index: 3
      },
      {
        PropertyString: "+166% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "增加 80-140 寒冰傷害",
        Index: 1
      },
      {
        PropertyString: "+30% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 14",
        Index: 0
      },
      {
        PropertyString: "等級 10 骨牆（50 次）",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Melee Weapon",
        Index: "Melee Weapon",
        Class: ""
      }
    ],
    Name: "雷霆 (Thunder)",
    Index: "Thunder",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 45,
    RequiredLevel: 45,
    Code: "Thunder",
    Properties: [
      {
        PropertyString: "被擊中時有 10% 機率施展等級 22 雷電風暴",
        Index: 2
      },
      {
        PropertyString: "+1 靜電力場",
        Index: 5
      },
      {
        PropertyString: "+235% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "增加 1-444 電擊傷害",
        Index: 1
      },
      {
        PropertyString: "+30% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性 -25%",
        Index: 4
      },
      {
        PropertyString: "電擊抗性 +75%",
        Index: 3
      },
      {
        PropertyString: "獲得的經驗值 +2%",
        Index: 6
      },
      {
        PropertyString: "怪物金幣掉落量提高 +50%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "戰爭 (War)",
    Index: "War",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 45,
    RequiredLevel: 45,
    Code: "War",
    Properties: [
      {
        PropertyString: "攻擊速度 +30%",
        Index: 2
      },
      {
        PropertyString: "+35-50% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+25% 打擊恢復",
        Index: 6
      },
      {
        PropertyString: "無視目標防禦",
        Index: 4
      },
      {
        PropertyString: "防止怪物自療",
        Index: 5
      },
      {
        PropertyString: "+100-140% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 +20-25%",
        Index: 3
      },
      {
        PropertyString: "需求 -15%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "智慧 (Wisdom)",
    Index: "Wisdom",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 45,
    RequiredLevel: 45,
    Code: "Wisdom",
    Properties: [
      {
        PropertyString: "+33% 穿透攻擊",
        Index: 0
      },
      {
        PropertyString: "+15-25% 準確率加成",
        Index: 2
      },
      {
        PropertyString: "擊中竊取 4-8% 法力",
        Index: 1
      },
      {
        PropertyString: "+30% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+10 能量",
        Index: 5
      },
      {
        PropertyString: "無法冰凍",
        Index: 4
      },
      {
        PropertyString: "+5 擊殺法力恢復",
        Index: 3
      },
      {
        PropertyString: "+5 擊殺生命恢復",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "教化 (Enlightenment)",
    Index: "Enlightenment",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 45,
    RequiredLevel: 45,
    Code: "Enlightenment",
    Properties: [
      {
        PropertyString: "擊中時有 5% 機率施展等級 15 火球術",
        Index: 0
      },
      {
        PropertyString: "被擊中時有 5% 機率施展等級 15 熾烈之徑",
        Index: 1
      },
      {
        PropertyString: "+2 魔法使技能等級",
        Index: 2
      },
      {
        PropertyString: "+1 暖流",
        Index: 3
      },
      {
        PropertyString: "+30% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "火焰抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 7",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      }
    ],
    Name: "新月 (Crescent Moon)",
    Index: "Crescent Moon",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Crescent Moon",
    Properties: [
      {
        PropertyString: "擊中時有 15% 機率施展等級 13 靜電力場",
        Index: 5
      },
      {
        PropertyString: "擊中時有 20% 機率施展等級 17 連鎖閃電",
        Index: 6
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "+180-220% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "無視目標防禦",
        Index: 1
      },
      {
        PropertyString: "敵人電擊抗性 -35%",
        Index: 0
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "魔法吸引 +9-11",
        Index: 3
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "等級 18 召喚幽靈狼（30 次）",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "強制 (Duress)",
    Index: "Duress",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Duress",
    Properties: [
      {
        PropertyString: "+10-20% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+40% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "增加 37-133 寒冰傷害",
        Index: 2
      },
      {
        PropertyString: "+15% 概率造成粉碎打擊",
        Index: 3
      },
      {
        PropertyString: "+33% 機率造成開放傷口",
        Index: 4
      },
      {
        PropertyString: "+150-200% 防禦強化",
        Index: 5
      },
      {
        PropertyString: "冰寒抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +15%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "幽暗 (Gloom)",
    Index: "Gloom",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Gloom",
    Properties: [
      {
        PropertyString: "被擊中時有 15% 機率施展等級 3 昏暗視野",
        Index: 2
      },
      {
        PropertyString: "+10% 打擊恢復",
        Index: 3
      },
      {
        PropertyString: "+200-260% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +45%",
        Index: 1
      },
      {
        PropertyString: "冰凍時間減半",
        Index: 6
      },
      {
        PropertyString: "+5% 受到的傷害轉為法力",
        Index: 4
      },
      {
        PropertyString: "照亮範圍 -3",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Paladin Item",
        Index: "Paladin Item",
        Class: "pal"
      }
    ],
    Name: "審判 (Judgement)",
    Index: "Judgement",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Judgement",
    Properties: [
      {
        PropertyString: "被擊中時有 2% 機率施展等級 35 神聖之盾",
        Index: 4
      },
      {
        PropertyString: "被擊中時有 50% 機率施展等級 5 衰老",
        Index: 5
      },
      {
        PropertyString: "+2 聖騎士技能等級",
        Index: 0
      },
      {
        PropertyString: "格擋機率提高 +25-35%",
        Index: 2
      },
      {
        PropertyString: "+20-30 最大傷害",
        Index: 3
      },
      {
        PropertyString: "無視目標防禦",
        Index: 1
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 35",
        Index: 6
      },
      {
        PropertyString: "需求 -15%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Barbarian Item",
        Index: "Barbarian Item",
        Class: "bar"
      }
    ],
    Name: "湮沒 (Oblivion)",
    Index: "Oblivion",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Oblivion",
    Properties: [
      {
        PropertyString: "擊中時有 12% 機率施展等級 9 傷害加深",
        Index: 3
      },
      {
        PropertyString: "+2 野蠻人技能等級",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 5
      },
      {
        PropertyString: "+10% 概率造成粉碎打擊",
        Index: 6
      },
      {
        PropertyString: "+3 野蠻人隨機技能等級",
        Index: 2
      },
      {
        PropertyString: "+115-160% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "+1.5 生命 （依角色等級而定）",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +15%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      }
    ],
    Name: "信念之柱 (Pillar of Faith)",
    Index: "Pillar of Faith",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Pillar of Faith",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 12 淨化靈氣",
        Index: 3
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 4
      },
      {
        PropertyString: "+230% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 0
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "+400-500 防禦",
        Index: 2
      },
      {
        PropertyString: "+20 力量",
        Index: 0
      },
      {
        PropertyString: "+75 生命",
        Index: 5
      },
      {
        PropertyString: "火焰吸引 +15%",
        Index: 6
      },
      {
        PropertyString: "每 1 秒修復 0.2 點耐久度",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "石塊 (Stone)",
    Index: "Stone",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Stone",
    Properties: [
      {
        PropertyString: "+60% 打擊恢復",
        Index: 6
      },
      {
        PropertyString: "+250-290% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+300 對遠程防禦",
        Index: 2
      },
      {
        PropertyString: "+16 力量",
        Index: 4
      },
      {
        PropertyString: "+16 體能",
        Index: 5
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +15%",
        Index: 0
      },
      {
        PropertyString: "等級 16 黏土魔像（16 次）",
        Index: 1
      },
      {
        PropertyString: "等級 16 熔火巨石（80 次）",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "聲音 (Voice)",
    Index: "Voice",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Voice",
    Properties: [
      {
        PropertyString: "+10-15% 寒冰技能傷害",
        Index: 1
      },
      {
        PropertyString: "+10-15% 火焰技能傷害",
        Index: 2
      },
      {
        PropertyString: "+10-15% 閃電技能傷害",
        Index: 3
      },
      {
        PropertyString: "+1 法力 （依角色等級而定）",
        Index: 5
      },
      {
        PropertyString: "所有抗性 +7-10%",
        Index: 4
      },
      {
        PropertyString: "+1 需求等級",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +15% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "需求 -15% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +22% （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "需求 -15% （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "骸骨 (Bone)",
    Index: "Bone",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Bone",
    Properties: [
      {
        PropertyString: "擊中時有 15% 機率施展等級 10 骨矛",
        Index: 0
      },
      {
        PropertyString: "被擊中時有 15% 機率施展等級 10 骸骨護甲",
        Index: 1
      },
      {
        PropertyString: "+2 死靈法師技能等級",
        Index: 2
      },
      {
        PropertyString: "+100-150 法力",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 7",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      }
    ],
    Name: "血月 (Searing Moon)",
    Index: "Searing Moon",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Searing Moon",
    Properties: [
      {
        PropertyString: "擊中時有 15% 機率施展等級 13 隕石術",
        Index: 5
      },
      {
        PropertyString: "擊中時有 20% 機率施展等級 17 火球術",
        Index: 6
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "+180-220% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "無視目標防禦",
        Index: 1
      },
      {
        PropertyString: "增加 5-30 火焰傷害",
        Index: 0
      },
      {
        PropertyString: "敵人火焰抗性 -35%",
        Index: 0
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "魔法吸引 +9-11",
        Index: 3
      },
      {
        PropertyString: "等級 18 召喚幽靈狼（30 次）",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      }
    ],
    Name: "冬月 (Winter Moon)",
    Index: "Winter Moon",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Winter Moon",
    Properties: [
      {
        PropertyString: "擊中時有 15% 機率施展等級 13 暴風雪",
        Index: 5
      },
      {
        PropertyString: "擊中時有 20% 機率施展等級 17 冰川之槍",
        Index: 6
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "+180-220% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "無視目標防禦",
        Index: 1
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "敵人冰寒抗性 -35%",
        Index: 0
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "魔法吸引 +9-11",
        Index: 3
      },
      {
        PropertyString: "等級 18 召喚幽靈狼（30 次）",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tal Rune",
        ItemLevel: 17,
        RequiredLevel: 17,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      }
    ],
    Name: "豐收月 (Harvest Moon)",
    Index: "Harvest Moon",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 47,
    RequiredLevel: 47,
    Code: "Harvest Moon",
    Properties: [
      {
        PropertyString: "擊中時有 15% 機率施展等級 13 屍爆",
        Index: 5
      },
      {
        PropertyString: "擊中時有 20% 機率施展等級 17 劇毒新星",
        Index: 6
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "+180-220% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "無視目標防禦",
        Index: 1
      },
      {
        PropertyString: "+76 毒素傷害，時效 5 秒",
        Index: 0
      },
      {
        PropertyString: "敵人毒素抗性 -35%",
        Index: 0
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "魔法吸引 +9-11",
        Index: 3
      },
      {
        PropertyString: "等級 18 召喚幽靈狼（30 次）",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      },
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "鮮血 (Blood)",
    Index: "Blood",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 49,
    RequiredLevel: 49,
    Code: "Blood",
    Properties: [
      {
        PropertyString: "+2 所有技能",
        Index: 4
      },
      {
        PropertyString: "+200-250% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+125-175 防禦",
        Index: 2
      },
      {
        PropertyString: "生命上限 +10-15%",
        Index: 5
      },
      {
        PropertyString: "物理傷害降低 +10-15%",
        Index: 6
      },
      {
        PropertyString: "+18 需求等級",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20% （只限武器）",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+20% 打擊恢復 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 7 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+20% 格擋速度 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 7 （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      }
    ],
    Name: "慾望 (Lust)",
    Index: "Lust",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 49,
    RequiredLevel: 49,
    Code: "Lust",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 8 神聖電擊靈氣",
        Index: 4
      },
      {
        PropertyString: "+2 死靈法師技能等級",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "法力上限 +35%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +35-50%",
        Index: 3
      },
      {
        PropertyString: "獲得的經驗值 +5%",
        Index: 1
      },
      {
        PropertyString: "怪物金幣掉落量提高 +80-120%",
        Index: 6
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +40%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "誓約 (Oath)",
    Index: "Oath",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 49,
    RequiredLevel: 49,
    Code: "Oath",
    Properties: [
      {
        PropertyString: "擊中時有 30% 機率施展等級 20 骸骨之魂",
        Index: 0
      },
      {
        PropertyString: "無法破壞",
        Index: 1
      },
      {
        PropertyString: "攻擊速度 +50%",
        Index: 2
      },
      {
        PropertyString: "+210-340% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+75% 對惡魔的傷害",
        Index: 1
      },
      {
        PropertyString: "+100 對惡魔的准确率",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "魔法吸引 +10-15",
        Index: 4
      },
      {
        PropertyString: "等級 16 狼獾之心（20 次）",
        Index: 5
      },
      {
        PropertyString: "等級 17 鋼鐵魔像（14 次）",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "謹慎 (Prudence)",
    Index: "Prudence",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 49,
    RequiredLevel: 49,
    Code: "Prudence",
    Properties: [
      {
        PropertyString: "+25% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+140-170% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "所有抗性 +25-35%",
        Index: 2
      },
      {
        PropertyString: "物理傷害降低 3",
        Index: 3
      },
      {
        PropertyString: "魔法傷害降低 17",
        Index: 4
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 5
      },
      {
        PropertyString: "每 1 秒修復 0.25 點耐久度",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "降雨 (Rain)",
    Index: "Rain",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 49,
    RequiredLevel: 49,
    Code: "Rain",
    Properties: [
      {
        PropertyString: "擊中時有 5% 機率施展等級 15 旋風術",
        Index: 0
      },
      {
        PropertyString: "被擊中時有 5% 機率施展等級 15 氣旋護甲",
        Index: 1
      },
      {
        PropertyString: "+2 德魯伊技能等級",
        Index: 2
      },
      {
        PropertyString: "+100-150 法力",
        Index: 3
      },
      {
        PropertyString: "電擊抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 7",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "聖堂 (Sanctuary)",
    Index: "Sanctuary",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 49,
    RequiredLevel: 49,
    Code: "Sanctuary",
    Properties: [
      {
        PropertyString: "+20% 打擊恢復",
        Index: 5
      },
      {
        PropertyString: "+20% 格擋速度",
        Index: 1
      },
      {
        PropertyString: "格擋機率提高 +20%",
        Index: 0
      },
      {
        PropertyString: "+130-160% 防禦強化",
        Index: 2
      },
      {
        PropertyString: "+250 對遠程防禦",
        Index: 3
      },
      {
        PropertyString: "+20 敏捷",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +50-70%",
        Index: 4
      },
      {
        PropertyString: "魔法傷害降低 7",
        Index: 0
      },
      {
        PropertyString: "等級 12 緩箭術（60 次）",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Necromancer Item",
        Index: "Necromancer Item",
        Class: "nec"
      }
    ],
    Name: "恐懼 (Terror)",
    Index: "Terror",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 49,
    RequiredLevel: 49,
    Code: "Terror",
    Properties: [
      {
        PropertyString: "被擊中時有 100% 機率施展等級 10 恐懼",
        Index: 0
      },
      {
        PropertyString: "+2 死靈法師技能等級",
        Index: 1
      },
      {
        PropertyString: "+3 狂熱",
        Index: 6
      },
      {
        PropertyString: "+25% 施法速度",
        Index: 4
      },
      {
        PropertyString: "+4 死靈法師隨機技能等級",
        Index: 2
      },
      {
        PropertyString: "+1.5 防禦 （依角色等級而定）",
        Index: 3
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 7",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +1% （依角色等級而定）",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      }
    ],
    Name: "滿月 (Full Moon)",
    Index: "Full Moon",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 49,
    RequiredLevel: 49,
    Code: "Full Moon",
    Properties: [
      {
        PropertyString: "擊中時有 20% 機率施展等級 20 祝福之鎚",
        Index: 5
      },
      {
        PropertyString: "擊中時有 15% 機率施展等級 20 骨矛",
        Index: 6
      },
      {
        PropertyString: "裝備時賦予等級 10 庇護靈氣",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "+180-220% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "無視目標防禦",
        Index: 1
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "魔法吸引 +9-11",
        Index: 3
      },
      {
        PropertyString: "等級 18 召喚幽靈狼（30 次）",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "精神錯亂 (Delirium)",
    Index: "Delirium",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 51,
    RequiredLevel: 51,
    Code: "Delirium",
    Properties: [
      {
        PropertyString: "擊中時有 11% 機率施展等級 18 混亂",
        Index: 0
      },
      {
        PropertyString: "被擊中時有 14% 機率施展等級 13 恐懼",
        Index: 2
      },
      {
        PropertyString: "被擊中時有 6% 機率施展等級 14 心靈震爆",
        Index: 4
      },
      {
        PropertyString: "被擊中時有 1% 機率施展等級 50 精神錯亂",
        Index: 5
      },
      {
        PropertyString: "+2 所有技能",
        Index: 6
      },
      {
        PropertyString: "+261 防禦",
        Index: 3
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +50%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 0
      },
      {
        PropertyString: "等級 17 致命吸引（60 次）",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "榮光 (Glory)",
    Index: "Glory",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 51,
    RequiredLevel: 51,
    Code: "Glory",
    Properties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+35% 施法速度",
        Index: 2
      },
      {
        PropertyString: "+25% 打擊恢復",
        Index: 1
      },
      {
        PropertyString: "+75-125% 防禦強化",
        Index: 5
      },
      {
        PropertyString: "生命上限 +25%",
        Index: 4
      },
      {
        PropertyString: "法力上限 +25%",
        Index: 3
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 0
      },
      {
        PropertyString: "需求 -30%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      }
    ],
    Name: "思維 (Thought)",
    Index: "Thought",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 51,
    RequiredLevel: 51,
    Code: "Thought",
    Properties: [
      {
        PropertyString: "+2 魔法使技能等級",
        Index: 0
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 6
      },
      {
        PropertyString: "格擋機率提高 +15%",
        Index: 5
      },
      {
        PropertyString: "敵人電擊抗性 -20%",
        Index: 3
      },
      {
        PropertyString: "+20% 寒冰技能傷害",
        Index: 4
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "生命回復 +6",
        Index: 1
      },
      {
        PropertyString: "法力恢復 75%",
        Index: 2
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +30%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      }
    ],
    Name: "絕望 (Despair)",
    Index: "Despair",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 53,
    RequiredLevel: 53,
    Code: "Despair",
    Properties: [
      {
        PropertyString: "擊中時有 32% 機率施展等級 6 削弱",
        Index: 1
      },
      {
        PropertyString: "+7 疾刺",
        Index: 3
      },
      {
        PropertyString: "攻擊速度 +40%",
        Index: 0
      },
      {
        PropertyString: "+260-300% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+20% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "+50 準確率",
        Index: 1
      },
      {
        PropertyString: "擊中竊取 +9% 法力",
        Index: 5
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "使目標減慢 20%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +35%",
        Index: 4
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      }
    ],
    Name: "弒王者 (Kingslayer)",
    Index: "Kingslayer",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 53,
    RequiredLevel: 53,
    Code: "Kingslayer",
    Properties: [
      {
        PropertyString: "+1 復仇打擊",
        Index: 5
      },
      {
        PropertyString: "攻擊速度 +30%",
        Index: 0
      },
      {
        PropertyString: "+230-270% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "-25% 目標防禦",
        Index: 2
      },
      {
        PropertyString: "+20% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "+33% 概率造成粉碎打擊",
        Index: 3
      },
      {
        PropertyString: "+50% 機率造成開放傷口",
        Index: 4
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +40%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      }
    ],
    Name: "嵌飾 (Mosaic)",
    Index: "Mosaic",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 53,
    RequiredLevel: 53,
    Code: "Mosaic",
    Properties: [
      {
        PropertyString: "+50% 機率使終結技不消耗集氣的力量",
        Index: 1
      },
      {
        PropertyString: "+2 武學技藝 （只限刺客）",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 2
      },
      {
        PropertyString: "+200-250% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+20% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "+8-15% 火焰技能傷害",
        Index: 4
      },
      {
        PropertyString: "+8-15% 寒冰技能傷害",
        Index: 5
      },
      {
        PropertyString: "+8-15% 閃電技能傷害",
        Index: 6
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      }
    ],
    Name: "裂隙 (Rift)",
    Index: "Rift",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 53,
    RequiredLevel: 53,
    Code: "Rift",
    Properties: [
      {
        PropertyString: "擊中時有 20% 機率施展等級 16 龍捲風",
        Index: 0
      },
      {
        PropertyString: "攻擊時有 16% 機率施展等級 21 冰封球",
        Index: 1
      },
      {
        PropertyString: "+20% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "增加 160-250 魔法傷害",
        Index: 2
      },
      {
        PropertyString: "增加 60-180 火焰傷害",
        Index: 3
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "+5-10 所有屬性",
        Index: 4
      },
      {
        PropertyString: "+38% 受到的傷害轉為法力",
        Index: 5
      },
      {
        PropertyString: "怪物金幣掉落量提高 +75%",
        Index: 0
      },
      {
        PropertyString: "等級 15 攻擊反噬（40 次）",
        Index: 6
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      }
    ],
    Name: "止水 (Still Water)",
    Index: "Still Water",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 53,
    RequiredLevel: 53,
    Code: "Still Water",
    Properties: [
      {
        PropertyString: "+2 弓與弩技能 （只限亞馬遜）",
        Index: 4
      },
      {
        PropertyString: "+1 亞馬遜技能等級",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 1
      },
      {
        PropertyString: "+80-120% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "增加 30-150 傷害",
        Index: 2
      },
      {
        PropertyString: "+20% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "增加 100-150 寒冰傷害",
        Index: 6
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "擊退",
        Index: 0
      },
      {
        PropertyString: "+15-20 擊殺生命恢復",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "原則 (Principle)",
    Index: "Principle",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 53,
    RequiredLevel: 53,
    Code: "Principle",
    Properties: [
      {
        PropertyString: "擊中時有 100% 機率施展等級 5 聖光彈",
        Index: 0
      },
      {
        PropertyString: "+2 聖騎士技能等級",
        Index: 1
      },
      {
        PropertyString: "+50% 對不死怪物的傷害",
        Index: 3
      },
      {
        PropertyString: "+100-150 生命",
        Index: 2
      },
      {
        PropertyString: "毒素抗性上限 ++5",
        Index: 0
      },
      {
        PropertyString: "火焰抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "+5 擊殺生命恢復",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      }
    ],
    Name: "死神 (Death)",
    Index: "Death",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 55,
    RequiredLevel: 55,
    Code: "Death",
    Properties: [
      {
        PropertyString: "當你死亡時有 100% 機率施展等級 44 連鎖閃電",
        Index: 0
      },
      {
        PropertyString: "攻擊時有 25% 機率施展等級 18 冰川之槍",
        Index: 1
      },
      {
        PropertyString: "無法破壞",
        Index: 2
      },
      {
        PropertyString: "+300-385% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+20% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "+50 準確率",
        Index: 1
      },
      {
        PropertyString: "增加 1-50 電擊傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +7% 法力",
        Index: 0
      },
      {
        PropertyString: "+50% 概率造成粉碎打擊",
        Index: 4
      },
      {
        PropertyString: "+0.5% 致命打擊 （依角色等級而定）",
        Index: 5
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      },
      {
        PropertyString: "等級 22 鮮血魔像（15 次）",
        Index: 6
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "火焰 (Flame)",
    Index: "Flame",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 55,
    RequiredLevel: 55,
    Code: "Flame",
    Properties: [
      {
        PropertyString: "被擊中時有 20% 機率施展等級 19 火球術",
        Index: 0
      },
      {
        PropertyString: "擊中時有 8% 機率施展等級 13 裂地之火",
        Index: 1
      },
      {
        PropertyString: "裝備時賦予等級 17 神聖火焰靈氣",
        Index: 2
      },
      {
        PropertyString: "+15-20% 火焰技能傷害",
        Index: 3
      },
      {
        PropertyString: "敵人火焰抗性 -15-20%",
        Index: 4
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "火焰抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "火焰抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "火焰吸引 +15-20",
        Index: 5
      },
      {
        PropertyString: "照亮範圍 +5",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "閃爍火焰 (Flickering Flame)",
    Index: "Flickering Flame",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 55,
    RequiredLevel: 55,
    Code: "Flickering Flame",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 4-8 抗火靈氣",
        Index: 1
      },
      {
        PropertyString: "+3 火焰技能",
        Index: 0
      },
      {
        PropertyString: "敵人火焰抗性 -10-15%",
        Index: 2
      },
      {
        PropertyString: "+30% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+30 對遠程防禦",
        Index: 0
      },
      {
        PropertyString: "+50-75 法力",
        Index: 3
      },
      {
        PropertyString: "火焰抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "冰凍時間減半",
        Index: 4
      },
      {
        PropertyString: "中毒的時效縮短 50%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "橡樹之心 (Heart of the Oak)",
    Index: "Heart of the Oak",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 55,
    RequiredLevel: 55,
    Code: "Heart of the Oak",
    Properties: [
      {
        PropertyString: "+3 所有技能",
        Index: 3
      },
      {
        PropertyString: "+40% 施法速度",
        Index: 0
      },
      {
        PropertyString: "+75% 對惡魔的傷害",
        Index: 1
      },
      {
        PropertyString: "+100 對惡魔的准确率",
        Index: 0
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +7% 法力",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "生命回復 +20",
        Index: 4
      },
      {
        PropertyString: "法力上限 +15%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +30-40%",
        Index: 5
      },
      {
        PropertyString: "等級 4 橡木智者（25 次）",
        Index: 1
      },
      {
        PropertyString: "等級 14 掠鴉（60 次）",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "純真 (Innocence)",
    Index: "Innocence",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 55,
    RequiredLevel: 55,
    Code: "Innocence",
    Properties: [
      {
        PropertyString: "+2 所有技能",
        Index: 3
      },
      {
        PropertyString: "+190-240% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+2 最大傷害 （依角色等級而定）",
        Index: 1
      },
      {
        PropertyString: "擊中竊取 +7% 法力",
        Index: 0
      },
      {
        PropertyString: "生命上限 +25%",
        Index: 4
      },
      {
        PropertyString: "+15-25 所有屬性",
        Index: 5
      },
      {
        PropertyString: "獲得的經驗值 -3%",
        Index: 6
      },
      {
        PropertyString: "怪物金幣掉落量提高 +75%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +30%",
        Index: 0
      },
      {
        PropertyString: "每 1 秒修復 0.15 點耐久度",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "忠誠 (Loyalty)",
    Index: "Loyalty",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 55,
    RequiredLevel: 55,
    Code: "Loyalty",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 5-9 荊棘靈氣",
        Index: 0
      },
      {
        PropertyString: "格擋機率提高 +35-50%",
        Index: 6
      },
      {
        PropertyString: "生命回復 +7",
        Index: 0
      },
      {
        PropertyString: "毒素抗性上限 ++5",
        Index: 3
      },
      {
        PropertyString: "冰寒抗性上限 +5",
        Index: 2
      },
      {
        PropertyString: "電擊抗性上限 +5",
        Index: 1
      },
      {
        PropertyString: "火焰抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +40-50%",
        Index: 4
      },
      {
        PropertyString: "獲得的經驗值 +6%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "寂靜 (Silence)",
    Index: "Silence",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 55,
    RequiredLevel: 55,
    Code: "Silence",
    Properties: [
      {
        PropertyString: "+2 所有技能",
        Index: 5
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 3
      },
      {
        PropertyString: "+200% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 6
      },
      {
        PropertyString: "+75% 對不死怪物的傷害",
        Index: 1
      },
      {
        PropertyString: "+50 對不死怪物的准确率",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +11% 法力",
        Index: 0
      },
      {
        PropertyString: "擊中使目標目盲 +33",
        Index: 1
      },
      {
        PropertyString: "25% 機率擊中使怪物逃跑",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +75%",
        Index: 4
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +30%",
        Index: 0
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      }
    ],
    Name: "奧術 (Arcane)",
    Index: "Arcane2",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 55,
    RequiredLevel: 55,
    Code: "Arcane2",
    Properties: [
      {
        PropertyString: "+3 所有技能",
        Index: 0
      },
      {
        PropertyString: "+1 暖流",
        Index: 4
      },
      {
        PropertyString: "+50% 施法速度",
        Index: 1
      },
      {
        PropertyString: "擊中竊取 +7% 法力",
        Index: 0
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "+100 法力",
        Index: 6
      },
      {
        PropertyString: "法力上限 +20%",
        Index: 2
      },
      {
        PropertyString: "法力恢復 75%",
        Index: 3
      },
      {
        PropertyString: "獲得的經驗值 +5-10%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Melee Weapon",
        Index: "Melee Weapon",
        Class: ""
      }
    ],
    Name: "奇迹 (Wonder)",
    Index: "Wonder",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 55,
    RequiredLevel: 55,
    Code: "Wonder",
    Properties: [
      {
        PropertyString: "+275% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+50% 打擊恢復",
        Index: 1
      },
      {
        PropertyString: "+20 力量",
        Index: 2
      },
      {
        PropertyString: "+20 敏捷",
        Index: 3
      },
      {
        PropertyString: "+1.5 生命 （依角色等級而定）",
        Index: 6
      },
      {
        PropertyString: "火焰抗性上限 +10",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +28",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +100-140%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +60-80%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "娜塔亞的壽衣 (Natalya's Shroud)",
    Index: "Natalya's Shroud",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 55,
    RequiredLevel: 55,
    Code: "Natalya's Shroud",
    Properties: [
      {
        PropertyString: "+2 刺客技能等級",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 2
      },
      {
        PropertyString: "+20% 施法速度",
        Index: 3
      },
      {
        PropertyString: "+20% 閃電技能傷害",
        Index: 4
      },
      {
        PropertyString: "+20% 火焰技能傷害",
        Index: 5
      },
      {
        PropertyString: "+200-250% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "生命回復 +7",
        Index: 0
      },
      {
        PropertyString: "火焰抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "戰爭召喚 (Call to Arms)",
    Index: "Call to Arms",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 57,
    RequiredLevel: 57,
    Code: "Call to Arms",
    Properties: [
      {
        PropertyString: "+1 所有技能",
        Index: 2
      },
      {
        PropertyString: "+2-6 戰鬥指揮",
        Index: 3
      },
      {
        PropertyString: "+1-6 戰鬥命令",
        Index: 4
      },
      {
        PropertyString: "+1-4 戰鬥怒吼",
        Index: 5
      },
      {
        PropertyString: "攻擊速度 +40%",
        Index: 0
      },
      {
        PropertyString: "+250-290% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "增加 5-30 火焰傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "生命回復 +12",
        Index: 6
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +30%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      }
    ],
    Name: "混沌 (Chaos)",
    Index: "Chaos",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 57,
    RequiredLevel: 57,
    Code: "Chaos",
    Properties: [
      {
        PropertyString: "擊中時有 9% 機率施展等級 11 冰封球",
        Index: 5
      },
      {
        PropertyString: "擊中時有 11% 機率施展等級 9 電能彈",
        Index: 6
      },
      {
        PropertyString: "+1 旋風斬",
        Index: 3
      },
      {
        PropertyString: "攻擊速度 +35%",
        Index: 4
      },
      {
        PropertyString: "+290-340% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "增加 216-471 魔法傷害",
        Index: 2
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "+15 擊殺惡魔生命恢復",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Paladin Item",
        Index: "Paladin Item",
        Class: "pal"
      }
    ],
    Name: "流亡 (Exile)",
    Index: "Exile",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 57,
    RequiredLevel: 57,
    Code: "Exile",
    Properties: [
      {
        PropertyString: "擊中時有 15% 機率施展等級 5 偷取生命",
        Index: 5
      },
      {
        PropertyString: "裝備時賦予等級 13-16 反抗靈氣",
        Index: 3
      },
      {
        PropertyString: "+2 防禦靈氣 （只限聖騎士）",
        Index: 4
      },
      {
        PropertyString: "+30% 格擋速度",
        Index: 0
      },
      {
        PropertyString: "凍結目標 +1",
        Index: 1
      },
      {
        PropertyString: "+220-260% 防禦強化",
        Index: 2
      },
      {
        PropertyString: "生命回復 +7",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "火焰抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 0
      },
      {
        PropertyString: "每 1 秒修復 0.25 點耐久度",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "頌揚 (Praise)",
    Index: "Praise",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 57,
    RequiredLevel: 57,
    Code: "Praise",
    Properties: [
      {
        PropertyString: "當你死亡時有 100% 機率施展等級 47 冰封球",
        Index: 3
      },
      {
        PropertyString: "被擊中時有 100% 機率施展等級 10 冰川之槍",
        Index: 4
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "+330-400% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "無視目標防禦",
        Index: 2
      },
      {
        PropertyString: "+20% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 10% 生命",
        Index: 6
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +40-60%",
        Index: 5
      },
      {
        PropertyString: "+15 需求等級",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "信任 (Trust)",
    Index: "Trust",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 57,
    RequiredLevel: 57,
    Code: "Trust",
    Properties: [
      {
        PropertyString: "當你死亡時有 100% 機率施展等級 57 閃電新星",
        Index: 6
      },
      {
        PropertyString: "+1 所有技能",
        Index: 2
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 4
      },
      {
        PropertyString: "增加 15-30 傷害",
        Index: 5
      },
      {
        PropertyString: "+125-200% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "+75-100 生命",
        Index: 3
      },
      {
        PropertyString: "冰寒抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14",
        Index: 0
      },
      {
        PropertyString: "+5 需求等級",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      }
    ],
    Name: "勝利 (Victory)",
    Index: "Victory",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 57,
    RequiredLevel: 57,
    Code: "Victory",
    Properties: [
      {
        PropertyString: "攻擊速度 +60%",
        Index: 3
      },
      {
        PropertyString: "+200% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+2.5 最大傷害 （依角色等級而定）",
        Index: 1
      },
      {
        PropertyString: "增加 1-300 火焰傷害",
        Index: 6
      },
      {
        PropertyString: "防止怪物自療",
        Index: 5
      },
      {
        PropertyString: "怪物金幣掉落量提高 +75%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +30%",
        Index: 0
      },
      {
        PropertyString: "每 1 秒修復 0.1 點耐久度",
        Index: 2
      },
      {
        PropertyString: "+24 需求等級",
        Index: 0
      },
      {
        PropertyString: "需求 -50%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      },
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "剛毅 (Fortitude)",
    Index: "Fortitude",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 59,
    RequiredLevel: 59,
    Code: "Fortitude",
    Properties: [
      {
        PropertyString: "被擊中時有 20% 機率施展等級 15 寒冰甲",
        Index: 0
      },
      {
        PropertyString: "+300% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+25% 施法速度",
        Index: 5
      },
      {
        PropertyString: "+200% 防禦強化",
        Index: 2
      },
      {
        PropertyString: "+1-1.5 生命 （依角色等級而定）",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +25-30%",
        Index: 4
      },
      {
        PropertyString: "照亮範圍 +1 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+20% 致命打擊 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+50 準確率 （只限武器）",
        Index: 1
      },
      {
        PropertyString: "25% 機率擊中使怪物逃跑 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "增加 9 傷害 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +1 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+15 防禦 （只限盔甲）",
        Index: 1
      },
      {
        PropertyString: "電擊抗性上限 +5 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "生命回復 +7 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 7 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +1 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "+15 防禦 （只限盾牌）",
        Index: 1
      },
      {
        PropertyString: "電擊抗性上限 +5 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "生命回復 +7 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 7 （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "剛毅（頭盔 已移除）| Fortitude (Helm Removed)",
    Index: "Fortitude (Dummy)",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 59,
    RequiredLevel: 59,
    Code: "Fortitude (Dummy)",
    Properties: [
      {
        PropertyString: "+15 防禦",
        Index: 1
      },
      {
        PropertyString: "生命回復 +7",
        Index: 0
      },
      {
        PropertyString: "電擊抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 7",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +0",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      }
    ],
    Name: "悔恨 (Grief)",
    Index: "Grief",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 59,
    RequiredLevel: 59,
    Code: "Grief",
    Properties: [
      {
        PropertyString: "擊中時有 20% 機率施展等級 15 淬毒",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +30-40%",
        Index: 1
      },
      {
        PropertyString: "+250-300 Damage",
        Index: 2
      },
      {
        PropertyString: "無視目標防禦",
        Index: 3
      },
      {
        PropertyString: "-25% 目標防禦",
        Index: 0
      },
      {
        PropertyString: "+1.88% 對惡魔的傷害 （依角色等級而定）",
        Index: 4
      },
      {
        PropertyString: "增加 5-30 火焰傷害",
        Index: 0
      },
      {
        PropertyString: "敵人毒素抗性 -20-25%",
        Index: 5
      },
      {
        PropertyString: "+20% 致命打擊",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "+11 擊殺生命恢復",
        Index: 6
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "夜晚 (Night)",
    Index: "Night",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 59,
    RequiredLevel: 59,
    Code: "Night",
    Properties: [
      {
        PropertyString: "+10-20 最大傷害",
        Index: 4
      },
      {
        PropertyString: "+150-300% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+200-300 防禦",
        Index: 3
      },
      {
        PropertyString: "+10-20 體能",
        Index: 2
      },
      {
        PropertyString: "+15-20 能量",
        Index: 6
      },
      {
        PropertyString: "冰寒抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "電擊抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +70-100%",
        Index: 5
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +40-70%",
        Index: 1
      },
      {
        PropertyString: "需求 -15%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "刺藤 (Bramble)",
    Index: "Bramble",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 61,
    RequiredLevel: 61,
    Code: "Bramble",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 15-21 荊棘靈氣",
        Index: 2
      },
      {
        PropertyString: "+50% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+25-50% 毒素技能傷害",
        Index: 4
      },
      {
        PropertyString: "+300 防禦",
        Index: 1
      },
      {
        PropertyString: "法力上限 +5%",
        Index: 0
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "火焰抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "毒素抗性 +100%",
        Index: 5
      },
      {
        PropertyString: "+13 擊殺生命恢復",
        Index: 3
      },
      {
        PropertyString: "等級 13 荊棘之靈（33 次）",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "飛龍 (Dragon)",
    Index: "Dragon",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 61,
    RequiredLevel: 61,
    Code: "Dragon",
    Properties: [
      {
        PropertyString: "被擊中時有 20% 機率施展等級 18 淬毒",
        Index: 0
      },
      {
        PropertyString: "擊中時有 12% 機率施展等級 15 多頭蛇",
        Index: 1
      },
      {
        PropertyString: "裝備時賦予等級 14 神聖火焰靈氣",
        Index: 6
      },
      {
        PropertyString: "+360 防禦",
        Index: 2
      },
      {
        PropertyString: "+230 對遠程防禦",
        Index: 3
      },
      {
        PropertyString: "+0.38 力量 （依角色等級而定）",
        Index: 4
      },
      {
        PropertyString: "+3-5 所有屬性",
        Index: 5
      },
      {
        PropertyString: "電擊抗性上限 +5 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "法力上限 +5% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 7 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "電擊抗性上限 +5 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "+50 法力 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 7 （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "拉撒路的披風 (Mantle of Lazarus)",
    Index: "Mantle of Lazarus",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 61,
    RequiredLevel: 61,
    Code: "Mantle of Lazarus",
    Properties: [
      {
        PropertyString: "+2 魔法使技能等級",
        Index: 0
      },
      {
        PropertyString: "+30% 施法速度",
        Index: 1
      },
      {
        PropertyString: "+20% 火焰技能傷害",
        Index: 4
      },
      {
        PropertyString: "+20% 寒冰技能傷害",
        Index: 5
      },
      {
        PropertyString: "+20% 閃電技能傷害",
        Index: 6
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "法力上限 +10%",
        Index: 3
      },
      {
        PropertyString: "法力恢復 75%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +15%",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      }
    ],
    Name: "蝕 (Eclipse)",
    Index: "Eclipse",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 61,
    RequiredLevel: 61,
    Code: "Eclipse",
    Properties: [
      {
        PropertyString: "擊中時有 8% 機率施展等級 5 傷害加深",
        Index: 0
      },
      {
        PropertyString: "+1 近戰精通",
        Index: 1
      },
      {
        PropertyString: "攻擊速度 +40%",
        Index: 0
      },
      {
        PropertyString: "+300-350% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 5
      },
      {
        PropertyString: "+10% 概率造成粉碎打擊",
        Index: 4
      },
      {
        PropertyString: "+10% 致命打擊",
        Index: 3
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "擊中使目標目盲 +1",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 +5%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "塞壬之歌 (Siren's Song)",
    Index: "Siren's Song",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 61,
    RequiredLevel: 61,
    Code: "Siren's Song",
    Properties: [
      {
        PropertyString: "被擊中時有 44% 機率施展等級 3 混亂",
        Index: 5
      },
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+25% 施法速度",
        Index: 2
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+1 防禦 （依角色等級而定）",
        Index: 6
      },
      {
        PropertyString: "法力上限 +20%",
        Index: 1
      },
      {
        PropertyString: "+10-20 所有屬性",
        Index: 3
      },
      {
        PropertyString: "怪物金幣掉落量提高 +50%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +30-50%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Amazon Spear",
        Index: "Amazon Spear",
        Class: "ama"
      }
    ],
    Name: "傳統 (Tradition)",
    Index: "Tradition",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 61,
    RequiredLevel: 61,
    Code: "Tradition",
    Properties: [
      {
        PropertyString: "+3 亞馬遜技能等級",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +50%",
        Index: 4
      },
      {
        PropertyString: "+375-450% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+20% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +10% 法力",
        Index: 3
      },
      {
        PropertyString: "擊中竊取 10% 生命",
        Index: 2
      },
      {
        PropertyString: "敵人電擊抗性 -25%",
        Index: 5
      },
      {
        PropertyString: "+25% 閃電技能傷害",
        Index: 6
      },
      {
        PropertyString: "+20% 致命打擊",
        Index: 0
      },
      {
        PropertyString: "擊中使目標目盲 +1",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +30%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Melee Weapon",
        Index: "Melee Weapon",
        Class: ""
      }
    ],
    Name: "輕風 (Wind)",
    Index: "Wind",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 61,
    RequiredLevel: 61,
    Code: "Wind",
    Properties: [
      {
        PropertyString: "擊中時有 10% 機率施展等級 9 龍捲風",
        Index: 4
      },
      {
        PropertyString: "+20% 跑步 / 行走速度",
        Index: 2
      },
      {
        PropertyString: "攻擊速度 +40%",
        Index: 1
      },
      {
        PropertyString: "+120-160% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+15% 打擊恢復",
        Index: 6
      },
      {
        PropertyString: "-50% 目標防禦",
        Index: 3
      },
      {
        PropertyString: "+15 防禦",
        Index: 1
      },
      {
        PropertyString: "法力上限 +5%",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      },
      {
        PropertyString: "等級 13 旋風術（127 次）",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "野獸 (Beast)",
    Index: "Beast",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 63,
    RequiredLevel: 63,
    Code: "Beast",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 9 狂熱靈氣",
        Index: 1
      },
      {
        PropertyString: "+3 熊人變化",
        Index: 5
      },
      {
        PropertyString: "+3 變形術",
        Index: 6
      },
      {
        PropertyString: "攻擊速度 +40%",
        Index: 0
      },
      {
        PropertyString: "+240-270% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "+20% 概率造成粉碎打擊",
        Index: 0
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "+25-40 力量",
        Index: 3
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "等級 13 召喚灰熊（5 次）",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "拉斯瑪的外殼 (Rathma's Husk)",
    Index: "Rathma's Husk",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 63,
    RequiredLevel: 63,
    Code: "Rathma's Husk",
    Properties: [
      {
        PropertyString: "+2 毒素技能",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 5
      },
      {
        PropertyString: "+20% 毒素技能傷害",
        Index: 1
      },
      {
        PropertyString: "+2 淬毒匕首（只限死靈法師）",
        Index: 3
      },
      {
        PropertyString: "+2 毒爆（只限死靈法師）",
        Index: 4
      },
      {
        PropertyString: "+200-250% 防禦強化",
        Index: 6
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 2
      },
      {
        PropertyString: "物理傷害降低 +8%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "榮耀之鍊 (Chains of Honor)",
    Index: "Chains of Honor",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 63,
    RequiredLevel: 63,
    Code: "Chains of Honor",
    Properties: [
      {
        PropertyString: "+2 所有技能",
        Index: 5
      },
      {
        PropertyString: "+200% 對惡魔的傷害",
        Index: 2
      },
      {
        PropertyString: "+100% 對不死怪物的傷害",
        Index: 3
      },
      {
        PropertyString: "擊中竊取 8% 生命",
        Index: 4
      },
      {
        PropertyString: "+70% 防禦強化",
        Index: 1
      },
      {
        PropertyString: "+20 力量",
        Index: 6
      },
      {
        PropertyString: "生命回復 +7",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +65%",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 +8%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sol Rune",
        ItemLevel: 27,
        RequiredLevel: 27,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Melee Weapon",
        Index: "Melee Weapon",
        Class: ""
      }
    ],
    Name: "永恆 (Eternity)",
    Index: "Eternity",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 63,
    RequiredLevel: 63,
    Code: "Eternity",
    Properties: [
      {
        PropertyString: "無法破壞",
        Index: 1
      },
      {
        PropertyString: "+260-310% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "使目標減慢 33%",
        Index: 2
      },
      {
        PropertyString: "生命回復 +16",
        Index: 4
      },
      {
        PropertyString: "法力上限 +5%",
        Index: 0
      },
      {
        PropertyString: "法力恢復 16%",
        Index: 5
      },
      {
        PropertyString: "物理傷害降低 +8%",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 7",
        Index: 0
      },
      {
        PropertyString: "無法冰凍",
        Index: 6
      },
      {
        PropertyString: "攻擊者反傷 +14",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 0
      },
      {
        PropertyString: "等級 8 重生（88 次）",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      }
    ],
    Name: "無限 (Infinity)",
    Index: "Infinity",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 63,
    RequiredLevel: 63,
    Code: "Infinity",
    Properties: [
      {
        PropertyString: "殺死敵人時有 50% 機率施展等級 20 連鎖閃電",
        Index: 4
      },
      {
        PropertyString: "裝備時賦予等級 12 信念靈氣",
        Index: 3
      },
      {
        PropertyString: "+35% 跑步 / 行走速度",
        Index: 1
      },
      {
        PropertyString: "+255-325% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "敵人電擊抗性 -45-55%",
        Index: 5
      },
      {
        PropertyString: "+40% 概率造成粉碎打擊",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "+0.5 體能 （依角色等級而定）",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +30%",
        Index: 0
      },
      {
        PropertyString: "等級 21 氣旋護甲（30 次）",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "騎士之印 (Knight's Vigil)",
    Index: "Knight's Vigil",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 63,
    RequiredLevel: 63,
    Code: "Knight's Vigil",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 8-12 冥想靈氣",
        Index: 1
      },
      {
        PropertyString: "+2 聖騎士技能等級",
        Index: 0
      },
      {
        PropertyString: "+40% 施法速度",
        Index: 2
      },
      {
        PropertyString: "+20% 格擋速度",
        Index: 4
      },
      {
        PropertyString: "格擋機率提高 +20-30%",
        Index: 3
      },
      {
        PropertyString: "生命回復 +10-15",
        Index: 6
      },
      {
        PropertyString: "+12 需求等級",
        Index: 5
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +50% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 +8% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +15% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25% （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +50% （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 +8% （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +22% （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "阿斯卡利之甲 (Mail of the Askari)",
    Index: "Mail of the Askari",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 63,
    RequiredLevel: 63,
    Code: "Mail of the Askari",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 12 活力靈氣",
        Index: 5
      },
      {
        PropertyString: "+2 亞馬遜技能等級",
        Index: 0
      },
      {
        PropertyString: "+150-200% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+30% 打擊恢復",
        Index: 1
      },
      {
        PropertyString: "+200-250% 防禦強化",
        Index: 6
      },
      {
        PropertyString: "+40 敏捷",
        Index: 2
      },
      {
        PropertyString: "電擊抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +40%",
        Index: 4
      },
      {
        PropertyString: "物理傷害降低 +8%",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 7",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      },
      {
        Name: "Circlet",
        Index: "Circlet",
        Class: ""
      }
    ],
    Name: "劇毒 (Venom)",
    Index: "Venom",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 63,
    RequiredLevel: 63,
    Code: "Venom",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 8 淨化靈氣",
        Index: 1
      },
      {
        PropertyString: "+2 毒素技能",
        Index: 0
      },
      {
        PropertyString: "+1 淬毒",
        Index: 3
      },
      {
        PropertyString: "+15% 毒素技能傷害",
        Index: 2
      },
      {
        PropertyString: "敵人毒素抗性 -15%",
        Index: 6
      },
      {
        PropertyString: "生命回復 +7",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +15%",
        Index: 4
      },
      {
        PropertyString: "物理傷害降低 +13%",
        Index: 5
      },
      {
        PropertyString: "魔法傷害降低 7",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "憤怒 (Wrath)",
    Index: "Wrath",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 63,
    RequiredLevel: 63,
    Code: "Wrath",
    Properties: [
      {
        PropertyString: "擊中時有 5% 機率施展等級 10 偷取生命",
        Index: 4
      },
      {
        PropertyString: "擊中時有 30% 機率施展等級 1 衰老",
        Index: 5
      },
      {
        PropertyString: "+300% 對惡魔的傷害",
        Index: 0
      },
      {
        PropertyString: "+250-300% 對不死怪物的傷害",
        Index: 1
      },
      {
        PropertyString: "增加 85-120 魔法傷害",
        Index: 3
      },
      {
        PropertyString: "增加 41-240 電擊傷害",
        Index: 2
      },
      {
        PropertyString: "+30% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 +8%",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 7",
        Index: 0
      },
      {
        PropertyString: "無法冰凍",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "烙印 (Brand)",
    Index: "Brand",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Brand",
    Properties: [
      {
        PropertyString: "被擊中時有 35% 機率施展等級 14 傷害加深",
        Index: 0
      },
      {
        PropertyString: "擊中時有 100% 機率施展等級 18 骨矛",
        Index: 1
      },
      {
        PropertyString: "+260-340% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+1 射出爆炸的弓矢或弩箭",
        Index: 2
      },
      {
        PropertyString: "+280-330% 對惡魔的傷害",
        Index: 4
      },
      {
        PropertyString: "擊退",
        Index: 5
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "毒素抗性上限 ++5",
        Index: 0
      },
      {
        PropertyString: "電擊抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 7",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      }
    ],
    Name: "白晝 (Daylight)",
    Index: "Daylight",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Daylight",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 4 信念靈氣",
        Index: 3
      },
      {
        PropertyString: "+3 魔法使技能等級",
        Index: 0
      },
      {
        PropertyString: "+30% 施法速度",
        Index: 2
      },
      {
        PropertyString: "無視目標防禦",
        Index: 0
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "生命上限 +25%",
        Index: 6
      },
      {
        PropertyString: "法力上限 +50%",
        Index: 5
      },
      {
        PropertyString: "法力恢復 50%",
        Index: 1
      },
      {
        PropertyString: "等級 18 降低抗性（33 次）",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      }
    ],
    Name: "毀滅 (Destruction)",
    Index: "Destruction",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Destruction",
    Properties: [
      {
        PropertyString: "擊中時有 23% 機率施展等級 12 火山噴發",
        Index: 0
      },
      {
        PropertyString: "擊中時有 5% 機率施展等級 23 熔火巨石",
        Index: 1
      },
      {
        PropertyString: "當你死亡時有 100% 機率施展等級 45 隕石術",
        Index: 2
      },
      {
        PropertyString: "攻擊時有 15% 機率施展等級 22 閃電新星",
        Index: 3
      },
      {
        PropertyString: "+350% 傷害強化",
        Index: 4
      },
      {
        PropertyString: "無視目標防禦",
        Index: 0
      },
      {
        PropertyString: "增加 100-180 魔法傷害",
        Index: 5
      },
      {
        PropertyString: "擊中竊取 +7% 法力",
        Index: 0
      },
      {
        PropertyString: "+20% 概率造成粉碎打擊",
        Index: 0
      },
      {
        PropertyString: "+20% 致命打擊",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Pul Rune",
        ItemLevel: 45,
        RequiredLevel: 45,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "夢境 (Dream)",
    Index: "Dream",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Dream",
    Properties: [
      {
        PropertyString: "被擊中時有 10% 機率施展等級 15 混亂",
        Index: 0
      },
      {
        PropertyString: "裝備時賦予等級 15 神聖電擊靈氣",
        Index: 1
      },
      {
        PropertyString: "+20-30% 打擊恢復",
        Index: 2
      },
      {
        PropertyString: "+150-220 防禦",
        Index: 3
      },
      {
        PropertyString: "+0.62 法力 （依角色等級而定）",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +5-20%",
        Index: 5
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +15-25%",
        Index: 6
      },
      {
        PropertyString: "+10 體能 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+30% 防禦強化 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "生命上限 +5% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+10 體能 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "+30% 防禦強化 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "+50 生命 （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "謎團 (Enigma)",
    Index: "Enigma",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Enigma",
    Properties: [
      {
        PropertyString: "+2 所有技能",
        Index: 4
      },
      {
        PropertyString: "+1 傳送術",
        Index: 6
      },
      {
        PropertyString: "+45% 跑步 / 行走速度",
        Index: 2
      },
      {
        PropertyString: "+750-775 防禦",
        Index: 0
      },
      {
        PropertyString: "+0.75 力量 （依角色等級而定）",
        Index: 3
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 +8%",
        Index: 0
      },
      {
        PropertyString: "+14 擊殺生命恢復",
        Index: 1
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +1% （依角色等級而定）",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "信心 (Faith)",
    Index: "Faith",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Faith",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 12-15 狂熱靈氣",
        Index: 4
      },
      {
        PropertyString: "+1-2 所有技能",
        Index: 6
      },
      {
        PropertyString: "+280% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+300% 準確率加成",
        Index: 1
      },
      {
        PropertyString: "增加 120 火焰傷害",
        Index: 2
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +15%",
        Index: 3
      },
      {
        PropertyString: "10% 機率將目標復生為：返世亡靈",
        Index: 5
      },
      {
        PropertyString: "+5 擊殺生命恢復",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +50%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "饑荒 (Famine)",
    Index: "Famine",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Famine",
    Properties: [
      {
        PropertyString: "攻擊速度 +30%",
        Index: 2
      },
      {
        PropertyString: "+320-370% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "無視目標防禦",
        Index: 0
      },
      {
        PropertyString: "增加 180-200 魔法傷害",
        Index: 4
      },
      {
        PropertyString: "增加 50-200 火焰傷害",
        Index: 5
      },
      {
        PropertyString: "增加 1-50 電擊傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 12% 生命",
        Index: 1
      },
      {
        PropertyString: "防止怪物自療",
        Index: 3
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "無形 （無法修復）",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Melee Weapon",
        Index: "Melee Weapon",
        Class: ""
      }
    ],
    Name: "狂怒 (Fury)",
    Index: "Fury",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Fury",
    Properties: [
      {
        PropertyString: "攻擊速度 +40%",
        Index: 1
      },
      {
        PropertyString: "+209% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 6% 生命",
        Index: 4
      },
      {
        PropertyString: "+33% 致命打擊",
        Index: 5
      },
      {
        PropertyString: "+66% 機率造成開放傷口",
        Index: 3
      },
      {
        PropertyString: "防止怪物自療",
        Index: 2
      },
      {
        PropertyString: "+5 狂亂連擊（只限野蠻人）",
        Index: 6
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 0
      },
      {
        PropertyString: "毒素抗性上限 ++5",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "寒冰 (Ice)",
    Index: "Ice",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Ice",
    Properties: [
      {
        PropertyString: "當你升級時有 100% 機率施展等級 40 暴風雪",
        Index: 0
      },
      {
        PropertyString: "擊中時有 25% 機率施展等級 22 冰霜新星",
        Index: 1
      },
      {
        PropertyString: "裝備時賦予等級 18 神聖冰凍靈氣",
        Index: 2
      },
      {
        PropertyString: "+140-210% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+25-30% 寒冰技能傷害",
        Index: 4
      },
      {
        PropertyString: "敵人冰寒抗性 -20%",
        Index: 5
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "電擊抗性上限 +5",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +3.12% （依角色等級而定）",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "鳳凰 (Phoenix)",
    Index: "Phoenix",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Phoenix",
    Properties: [
      {
        PropertyString: "當你升級時有 100% 機率施展等級 40 熾烈之徑",
        Index: 0
      },
      {
        PropertyString: "擊中時有 40% 機率施展等級 22 火焰風暴",
        Index: 1
      },
      {
        PropertyString: "裝備時賦予等級 13 救贖靈氣",
        Index: 2
      },
      {
        PropertyString: "+350-400% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "敵人火焰抗性 -28%",
        Index: 4
      },
      {
        PropertyString: "+350-400 對遠程防禦",
        Index: 5
      },
      {
        PropertyString: "火焰吸引 +15-21",
        Index: 6
      },
      {
        PropertyString: "擊中竊取 +14% 法力 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+20% 致命打擊 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "無視目標防禦 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "火焰抗性上限 +10 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "電擊抗性上限 +5 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "+50 生命 （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ko Rune",
        ItemLevel: 39,
        RequiredLevel: 39,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "阿卡拉特的虔誠 (Akarat's Devotion)",
    Index: "Akarat's Devotion",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Akarat's Devotion",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 8 救贖靈氣",
        Index: 0
      },
      {
        PropertyString: "+2 聖騎士技能等級",
        Index: 1
      },
      {
        PropertyString: "+20% 施法速度",
        Index: 2
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+3 祝福之鎚（只限聖騎士）",
        Index: 5
      },
      {
        PropertyString: "+200-250% 防禦強化",
        Index: 3
      },
      {
        PropertyString: "+50 力量",
        Index: 6
      },
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +35%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Barbarian Item",
        Index: "Barbarian Item",
        Class: "bar"
      }
    ],
    Name: "戰鬥造詣 (Prowess in Battle)",
    Index: "Prowess in Battle",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Prowess in Battle",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 6 狂熱靈氣",
        Index: 3
      },
      {
        PropertyString: "+3 野蠻人技能等級",
        Index: 1
      },
      {
        PropertyString: "+100% 傷害強化",
        Index: 4
      },
      {
        PropertyString: "+40% 打擊恢復",
        Index: 5
      },
      {
        PropertyString: "+50% 準確率加成",
        Index: 2
      },
      {
        PropertyString: "+3 防禦 （依角色等級而定）",
        Index: 6
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "生命上限 +5%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 0
      },
      {
        PropertyString: "+10 需求等級",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      }
    ],
    Name: "風暴 (Storm)",
    Index: "Storm",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Storm",
    Properties: [
      {
        PropertyString: "擊中時有 16% 機率施展等級 21 閃電箭",
        Index: 2
      },
      {
        PropertyString: "+10 雷電風暴",
        Index: 3
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 1
      },
      {
        PropertyString: "+383% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "無視目標防禦",
        Index: 0
      },
      {
        PropertyString: "增加 1-50 電擊傷害",
        Index: 0
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "擊退",
        Index: 0
      },
      {
        PropertyString: "電擊抗性 +100%",
        Index: 4
      },
      {
        PropertyString: "電擊吸引 +25%",
        Index: 5
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "時間 (Time)",
    Index: "Time",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 65,
    RequiredLevel: 65,
    Code: "Time",
    Properties: [
      {
        PropertyString: "被擊中時有 100% 機率施展等級 25 閃電新星",
        Index: 4
      },
      {
        PropertyString: "+1 傳送術",
        Index: 6
      },
      {
        PropertyString: "防止怪物自療",
        Index: 5
      },
      {
        PropertyString: "+160-220% 防禦強化",
        Index: 0
      },
      {
        PropertyString: "+35-50 生命",
        Index: 2
      },
      {
        PropertyString: "生命上限 +10-20%",
        Index: 3
      },
      {
        PropertyString: "+20 需求等級",
        Index: 1
      },
      {
        PropertyString: "生命上限 +5% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+50 生命 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +14 （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ral Rune",
        ItemLevel: 19,
        RequiredLevel: 19,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ort Rune",
        ItemLevel: 21,
        RequiredLevel: 21,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      }
    ],
    Name: "毀天滅地 (Armageddon)",
    Index: "Armageddon",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Armageddon",
    Properties: [
      {
        PropertyString: "擊中時有 40% 機率施展等級 20 暴風雪",
        Index: 3
      },
      {
        PropertyString: "被擊中時有 40% 機率施展等級 20 連鎖閃電",
        Index: 4
      },
      {
        PropertyString: "攻擊速度 +30%",
        Index: 5
      },
      {
        PropertyString: "+275-350% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "增加 50-300 火焰傷害",
        Index: 2
      },
      {
        PropertyString: "增加 5-30 火焰傷害",
        Index: 0
      },
      {
        PropertyString: "增加 1-50 電擊傷害",
        Index: 0
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "+20% 概率造成粉碎打擊",
        Index: 0
      },
      {
        PropertyString: "凍結目標 +3",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +35%",
        Index: 6
      },
      {
        PropertyString: "+13 需求等級",
        Index: 0
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "破碎誓言 (Broken Promise)",
    Index: "Broken Promise",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Broken Promise",
    Properties: [
      {
        PropertyString: "擊中時有 18% 機率施展等級 18 骸骨之魂",
        Index: 4
      },
      {
        PropertyString: "+2 所有技能",
        Index: 1
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "+350-400% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+3 最大傷害 （依角色等級而定）",
        Index: 2
      },
      {
        PropertyString: "擊中竊取 +7% 法力",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 0
      },
      {
        PropertyString: "+35% 概率造成粉碎打擊",
        Index: 6
      },
      {
        PropertyString: "+20% 致命打擊",
        Index: 0
      },
      {
        PropertyString: "凍結目標 +3",
        Index: 0
      },
      {
        PropertyString: "獲得的經驗值 -5%",
        Index: 3
      },
      {
        PropertyString: "+15 需求等級",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      }
    ],
    Name: "末日 (Doom)",
    Index: "Doom",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Doom",
    Properties: [
      {
        PropertyString: "被擊中時有 5% 機率施展等級 18 氣旋護甲",
        Index: 6
      },
      {
        PropertyString: "裝備時賦予等級 12 神聖冰凍靈氣",
        Index: 1
      },
      {
        PropertyString: "+2 所有技能",
        Index: 5
      },
      {
        PropertyString: "+50% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+40% 施法速度",
        Index: 2
      },
      {
        PropertyString: "+15-25% 寒冰技能傷害",
        Index: 0
      },
      {
        PropertyString: "敵人冰寒抗性 -40-60%",
        Index: 4
      },
      {
        PropertyString: "+20% 致命打擊",
        Index: 0
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "凍結目標 +3",
        Index: 0
      },
      {
        PropertyString: "法力上限 +30%",
        Index: 3
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ohm Rune",
        ItemLevel: 57,
        RequiredLevel: 57,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "末日 (Doom)",
    Index: "Doom",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Doom",
    Properties: [
      {
        PropertyString: "擊中時有 5% 機率施展等級 18 火山噴發",
        Index: 6
      },
      {
        PropertyString: "裝備時賦予等級 12 神聖冰凍靈氣",
        Index: 1
      },
      {
        PropertyString: "+2 所有技能",
        Index: 5
      },
      {
        PropertyString: "攻擊速度 +45%",
        Index: 2
      },
      {
        PropertyString: "+330-370% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "敵人冰寒抗性 -40-60%",
        Index: 4
      },
      {
        PropertyString: "+20% 致命打擊",
        Index: 0
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 3
      },
      {
        PropertyString: "凍結目標 +3",
        Index: 0
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      }
    ],
    Name: "歡欣 (Elation)",
    Index: "Elation",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Elation",
    Properties: [
      {
        PropertyString: "擊中時有 100% 機率施展等級 8 閃電新星",
        Index: 2
      },
      {
        PropertyString: "當你死亡時有 100% 機率施展等級 60 閃電新星",
        Index: 4
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "+40-75 最小傷害",
        Index: 0
      },
      {
        PropertyString: "+2.25 最大傷害 （依角色等級而定）",
        Index: 1
      },
      {
        PropertyString: "增加 3-14 寒冰傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +7% 法力",
        Index: 0
      },
      {
        PropertyString: "+20-25% 寒冰技能傷害",
        Index: 5
      },
      {
        PropertyString: "+20-25% 火焰技能傷害",
        Index: 6
      },
      {
        PropertyString: "防止怪物自療",
        Index: 3
      },
      {
        PropertyString: "凍結目標 +3",
        Index: 0
      },
      {
        PropertyString: "擊退",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "正義之手 (Hand of Justice)",
    Index: "Hand of Justice",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Hand of Justice",
    Properties: [
      {
        PropertyString: "當你升級時有 100% 機率施展等級 36 熾烈之徑",
        Index: 3
      },
      {
        PropertyString: "當你死亡時有 100% 機率施展等級 48 隕石術",
        Index: 4
      },
      {
        PropertyString: "裝備時賦予等級 16 神聖火焰靈氣",
        Index: 2
      },
      {
        PropertyString: "攻擊速度 +33%",
        Index: 0
      },
      {
        PropertyString: "+280-330% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "無視目標防禦",
        Index: 5
      },
      {
        PropertyString: "敵人火焰抗性 -20%",
        Index: 6
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 0
      },
      {
        PropertyString: "+20% 致命打擊",
        Index: 0
      },
      {
        PropertyString: "擊中使目標目盲 +1",
        Index: 0
      },
      {
        PropertyString: "凍結目標 +3",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      }
    ],
    Name: "最後遺願 (Last Wish)",
    Index: "Last Wish",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Last Wish",
    Properties: [
      {
        PropertyString: "被擊中時有 6% 機率施展等級 11 影散",
        Index: 0
      },
      {
        PropertyString: "擊中時有 10% 機率施展等級 18 偷取生命",
        Index: 1
      },
      {
        PropertyString: "攻擊時有 20% 機率施展等級 20 電能彈",
        Index: 2
      },
      {
        PropertyString: "裝備時賦予等級 17 力量靈氣",
        Index: 3
      },
      {
        PropertyString: "+350-400% 傷害強化",
        Index: 4
      },
      {
        PropertyString: "+40-50 最小傷害",
        Index: 5
      },
      {
        PropertyString: "+80-100 最大傷害",
        Index: 6
      },
      {
        PropertyString: "無視目標防禦",
        Index: 0
      },
      {
        PropertyString: "+20% 概率造成粉碎打擊",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "擊中使目標目盲 +1",
        Index: 0
      },
      {
        PropertyString: "凍結目標 +3",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "變化 (Metamorphosis)",
    Index: "Metamorphosis",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Metamorphosis",
    Properties: [
      {
        PropertyString: "擊中時有 100% 機率施展等級 1 熊人印記",
        Index: 0
      },
      {
        PropertyString: "擊中時有 100% 機率施展等級 1 狼人印記",
        Index: 1
      },
      {
        PropertyString: "+5 變形技能 （只限德魯伊）",
        Index: 2
      },
      {
        PropertyString: "+25% 概率造成粉碎打擊",
        Index: 5
      },
      {
        PropertyString: "+50-80% 防禦強化",
        Index: 3
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +10%",
        Index: 4
      },
      {
        PropertyString: "無法冰凍",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Thul Rune",
        ItemLevel: 23,
        RequiredLevel: 23,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "迷霧 (Mist)",
    Index: "Mist",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Mist",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 8-12 專注靈氣",
        Index: 2
      },
      {
        PropertyString: "+3 所有技能",
        Index: 0
      },
      {
        PropertyString: "+325-375% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+100% 穿透攻擊",
        Index: 3
      },
      {
        PropertyString: "+24 體能",
        Index: 4
      },
      {
        PropertyString: "毒素抗性上限 ++5",
        Index: 0
      },
      {
        PropertyString: "冰寒抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +40%",
        Index: 5
      },
      {
        PropertyString: "無法冰凍",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Fal Rune",
        ItemLevel: 41,
        RequiredLevel: 41,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "庫爾凱克的誓言 (Qual-Kehk's Oath)",
    Index: "Qual-Kehk's Oath",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Qual-Kehk's Oath",
    Properties: [
      {
        PropertyString: "擊中時有 9% 機率施展等級 8 衰老",
        Index: 5
      },
      {
        PropertyString: "+2 野蠻人技能等級",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +30%",
        Index: 3
      },
      {
        PropertyString: "+200-250% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+200-250% 防禦強化",
        Index: 2
      },
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 4
      },
      {
        PropertyString: "物理傷害降低 +8%",
        Index: 0
      },
      {
        PropertyString: "無法冰凍",
        Index: 0
      },
      {
        PropertyString: "需求 -15%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Missile Weapon",
        Index: "Missile Weapon",
        Class: ""
      }
    ],
    Name: "災劫 (Peril)",
    Index: "Peril",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Peril",
    Properties: [
      {
        PropertyString: "+1 所有技能",
        Index: 4
      },
      {
        PropertyString: "攻擊速度 +75%",
        Index: 3
      },
      {
        PropertyString: "+250% 傷害強化",
        Index: 1
      },
      {
        PropertyString: "+3.12 最大傷害 （依角色等級而定）",
        Index: 2
      },
      {
        PropertyString: "電擊抗性上限 +10",
        Index: 0
      },
      {
        PropertyString: "+20-30 所有屬性",
        Index: 6
      },
      {
        PropertyString: "物理傷害降低 +16%",
        Index: 0
      },
      {
        PropertyString: "無法冰凍",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +1% （依角色等級而定）",
        Index: 5
      },
      {
        PropertyString: "+11 需求等級",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      }
    ],
    Name: "瘟疫 (Plague)",
    Index: "Plague",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Plague",
    Properties: [
      {
        PropertyString: "被擊中時有 20% 機率施展等級 12 降低抗性",
        Index: 1
      },
      {
        PropertyString: "擊中時有 25% 機率施展等級 15 劇毒新星",
        Index: 2
      },
      {
        PropertyString: "裝備時賦予等級 13-17 淨化靈氣",
        Index: 5
      },
      {
        PropertyString: "+1-2 所有技能",
        Index: 6
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      },
      {
        PropertyString: "+220-320% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "敵人毒素抗性 -23%",
        Index: 3
      },
      {
        PropertyString: "+0.38% 致命打擊 （依角色等級而定）",
        Index: 4
      },
      {
        PropertyString: "+25% 機率造成開放傷口",
        Index: 0
      },
      {
        PropertyString: "凍結目標 +3",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lo Rune",
        ItemLevel: 59,
        RequiredLevel: 59,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      }
    ],
    Name: "驕傲 (Pride)",
    Index: "Pride",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Pride",
    Properties: [
      {
        PropertyString: "被擊中時有 25% 機率施展等級 17 火牆術",
        Index: 4
      },
      {
        PropertyString: "裝備時賦予等級 16-20 專注靈氣",
        Index: 3
      },
      {
        PropertyString: "+260-300% 準確率加成",
        Index: 2
      },
      {
        PropertyString: "+1% 對惡魔的傷害 （依角色等級而定）",
        Index: 0
      },
      {
        PropertyString: "增加 50-280 電擊傷害",
        Index: 1
      },
      {
        PropertyString: "+20% 致命打擊",
        Index: 0
      },
      {
        PropertyString: "擊中使目標目盲 +1",
        Index: 0
      },
      {
        PropertyString: "凍結目標 +3",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "生命回復 +8",
        Index: 5
      },
      {
        PropertyString: "怪物金幣掉落量提高 +1.88% （依角色等級而定）",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "巨橡樹之皮 (Bark of the Great Oak)",
    Index: "Bark of the Great Oak",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Bark of the Great Oak",
    Properties: [
      {
        PropertyString: "裝備時賦予等級 18 反抗靈氣",
        Index: 0
      },
      {
        PropertyString: "+2 德魯伊技能等級",
        Index: 1
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 5
      },
      {
        PropertyString: "+30% 打擊恢復",
        Index: 2
      },
      {
        PropertyString: "+200-250% 防禦強化",
        Index: 6
      },
      {
        PropertyString: "+25 所有屬性",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +20%",
        Index: 4
      },
      {
        PropertyString: "物理傷害降低 +16%",
        Index: 0
      },
      {
        PropertyString: "無法冰凍",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Dol Rune",
        ItemLevel: 31,
        RequiredLevel: 31,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Sur Rune",
        ItemLevel: 61,
        RequiredLevel: 61,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Melee Weapon",
        Index: "Melee Weapon",
        Class: ""
      }
    ],
    Name: "英勇 (Valor)",
    Index: "Valor",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Valor",
    Properties: [
      {
        PropertyString: "無法破壞",
        Index: 4
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+100 最小傷害",
        Index: 1
      },
      {
        PropertyString: "+2.5 最大傷害 （依角色等級而定）",
        Index: 2
      },
      {
        PropertyString: "生命回復 +7",
        Index: 0
      },
      {
        PropertyString: "法力上限 +5%",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +15%",
        Index: 0
      },
      {
        PropertyString: "無法冰凍",
        Index: 0
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "獲得的經驗值 +5%",
        Index: 5
      },
      {
        PropertyString: "等級 40 戰鬥命令（15 次）",
        Index: 6
      },
      {
        PropertyString: "+10 需求等級",
        Index: 0
      },
      {
        PropertyString: "無形 （無法修復）",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      }
    ],
    Name: "希望之翼 (Wings of Hope)",
    Index: "Wings of Hope",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Wings of Hope",
    Properties: [
      {
        PropertyString: "擊中時有 25% 機率施展等級 35 骨矛",
        Index: 4
      },
      {
        PropertyString: "裝備時賦予等級 3 聖護靈氣",
        Index: 3
      },
      {
        PropertyString: "+1 傳送術（Warp）",
        Index: 2
      },
      {
        PropertyString: "+60-100 最小傷害",
        Index: 0
      },
      {
        PropertyString: "+150-200 最大傷害",
        Index: 1
      },
      {
        PropertyString: "殺死的怪物就此安息",
        Index: 5
      },
      {
        PropertyString: "凍結目標 +6",
        Index: 0
      },
      {
        PropertyString: "+20 所有屬性",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "悲痛 (Woe)",
    Index: "Woe",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Woe",
    Properties: [
      {
        PropertyString: "被擊中時有 25% 機率施展等級 25 連鎖閃電",
        Index: 1
      },
      {
        PropertyString: "被擊中時有 25% 機率施展等級 25 火球術",
        Index: 2
      },
      {
        PropertyString: "被擊中時有 25% 機率施展等級 25 暴風雪",
        Index: 3
      },
      {
        PropertyString: "+2 所有技能",
        Index: 4
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+25 所有屬性",
        Index: 5
      },
      {
        PropertyString: "無法冰凍",
        Index: 0
      },
      {
        PropertyString: "中毒的時效縮短 80%",
        Index: 6
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "+7 需求等級",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Circlet",
        Index: "Circlet",
        Class: ""
      }
    ],
    Name: "重構之雨（已移除）| Rain Reimagined (Removed)",
    Index: "Rain Reimagined",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 67,
    RequiredLevel: 67,
    Code: "Rain Reimagined",
    Properties: [
      {
        PropertyString: "物理傷害降低 +16%",
        Index: 0
      },
      {
        PropertyString: "無法冰凍",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 -1",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Zod Rune",
        ItemLevel: 69,
        RequiredLevel: 69,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Helm",
        Index: "Helm",
        Class: ""
      }
    ],
    Name: "權威 (Authority)",
    Index: "Authority",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 69,
    RequiredLevel: 69,
    Code: "Authority",
    Properties: [
      {
        PropertyString: "擊中時有 16% 機率施展等級 9 削弱",
        Index: 4
      },
      {
        PropertyString: "無法破壞",
        Index: 0
      },
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+25% 致命打擊",
        Index: 6
      },
      {
        PropertyString: "使目標減慢 20%",
        Index: 5
      },
      {
        PropertyString: "+160-200% 防禦強化",
        Index: 3
      },
      {
        PropertyString: "物理傷害降低 +8%",
        Index: 0
      },
      {
        PropertyString: "無法冰凍",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +1.5% （依角色等級而定）",
        Index: 2
      },
      {
        PropertyString: "+12 需求等級",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eld Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Zod Rune",
        ItemLevel: 69,
        RequiredLevel: 69,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Eth Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      }
    ],
    Name: "死亡呼吸 (Breath of the Dying)",
    Index: "Breath of the Dying",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 69,
    RequiredLevel: 69,
    Code: "Breath of the Dying",
    Properties: [
      {
        PropertyString: "無法破壞",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +60%",
        Index: 0
      },
      {
        PropertyString: "+350-400% 傷害強化",
        Index: 4
      },
      {
        PropertyString: "-25% 目標防禦",
        Index: 0
      },
      {
        PropertyString: "+50 準確率",
        Index: 1
      },
      {
        PropertyString: "+200% 對不死怪物的傷害",
        Index: 1
      },
      {
        PropertyString: "+50 對不死怪物的准确率",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +7% 法力",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 12-15% 生命",
        Index: 2
      },
      {
        PropertyString: "防止怪物自療",
        Index: 3
      },
      {
        PropertyString: "+30 所有屬性",
        Index: 5
      },
      {
        PropertyString: "照亮範圍 +1",
        Index: 0
      },
      {
        PropertyString: "需求 -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Zod Rune",
        ItemLevel: 69,
        RequiredLevel: 69,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Amn Rune",
        ItemLevel: 25,
        RequiredLevel: 25,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Vex Rune",
        ItemLevel: 55,
        RequiredLevel: 55,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      }
    ],
    Name: "黑暗 (Darkness)",
    Index: "Darkness",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 69,
    RequiredLevel: 69,
    Code: "Darkness",
    Properties: [
      {
        PropertyString: "無法破壞",
        Index: 0
      },
      {
        PropertyString: "+3 刺客技能等級",
        Index: 0
      },
      {
        PropertyString: "增加 75-150 傷害",
        Index: 2
      },
      {
        PropertyString: "擊中竊取 +7% 法力",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 7% 生命",
        Index: 0
      },
      {
        PropertyString: "+20-30 所有屬性",
        Index: 1
      },
      {
        PropertyString: "所有抗性 +20-40%",
        Index: 3
      },
      {
        PropertyString: "物理傷害降低 +15%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +1% （依角色等級而定）",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Zod Rune",
        ItemLevel: 69,
        RequiredLevel: 69,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Um Rune",
        ItemLevel: 47,
        RequiredLevel: 47,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      }
    ],
    Name: "謙遜 (Humility)",
    Index: "Humility",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 69,
    RequiredLevel: 69,
    Code: "Humility",
    Properties: [
      {
        PropertyString: "無法破壞",
        Index: 0
      },
      {
        PropertyString: "裝備時賦予等級 3-5 聖護靈氣",
        Index: 6
      },
      {
        PropertyString: "+1-4 大吼",
        Index: 1
      },
      {
        PropertyString: "+1-4 戰鬥命令",
        Index: 2
      },
      {
        PropertyString: "+1-4 戰鬥指揮",
        Index: 3
      },
      {
        PropertyString: "+1-4 碎冰甲",
        Index: 4
      },
      {
        PropertyString: "+10-15 女武神",
        Index: 5
      },
      {
        PropertyString: "所有抗性 +15%",
        Index: 0
      },
      {
        PropertyString: "無法冰凍",
        Index: 0
      },
      {
        PropertyString: "+15% 受到的傷害轉為法力",
        Index: 0
      },
      {
        PropertyString: "+17 需求等級",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Mal Rune",
        ItemLevel: 49,
        RequiredLevel: 49,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ith Rune",
        ItemLevel: 15,
        RequiredLevel: 15,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ber Rune",
        ItemLevel: 63,
        RequiredLevel: 63,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Cham Rune",
        ItemLevel: 67,
        RequiredLevel: 67,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Zod Rune",
        ItemLevel: 69,
        RequiredLevel: 69,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      }
    ],
    Name: "晨露 (Morning Dew)",
    Index: "Morning Dew",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 69,
    RequiredLevel: 69,
    Code: "Morning Dew",
    Properties: [
      {
        PropertyString: "殺死敵人時有 100% 機率施展等級 20 靜電力場",
        Index: 5
      },
      {
        PropertyString: "無法破壞",
        Index: 0
      },
      {
        PropertyString: "+3 德魯伊技能等級",
        Index: 3
      },
      {
        PropertyString: "+20 近戰精通",
        Index: 4
      },
      {
        PropertyString: "攻擊速度 +50%",
        Index: 1
      },
      {
        PropertyString: "+300-360% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "+9 最大傷害",
        Index: 0
      },
      {
        PropertyString: "+20% 概率造成粉碎打擊",
        Index: 0
      },
      {
        PropertyString: "防止怪物自療",
        Index: 0
      },
      {
        PropertyString: "凍結目標 +3",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 6
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +30%",
        Index: 0
      },
      {
        PropertyString: "+10 需求等級",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Zod Rune",
        ItemLevel: 69,
        RequiredLevel: 69,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Gul Rune",
        ItemLevel: 53,
        RequiredLevel: 53,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Druid Item",
        Index: "Druid Item",
        Class: "dru"
      }
    ],
    Name: "神秘 (Mystery)",
    Index: "Mystery",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 69,
    RequiredLevel: 69,
    Code: "Mystery",
    Properties: [
      {
        PropertyString: "無法破壞",
        Index: 0
      },
      {
        PropertyString: "裝備時賦予等級 6 專注靈氣",
        Index: 4
      },
      {
        PropertyString: "+3 德魯伊技能等級",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 5
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "生命上限 +15%",
        Index: 2
      },
      {
        PropertyString: "法力上限 +15%",
        Index: 1
      },
      {
        PropertyString: "毒素抗性上限 ++5",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +30-50%",
        Index: 3
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Zod Rune",
        ItemLevel: 69,
        RequiredLevel: 69,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lem Rune",
        ItemLevel: 43,
        RequiredLevel: 43,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Io Rune",
        ItemLevel: 35,
        RequiredLevel: 35,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Nef Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      }
    ],
    Name: "執念 (Obsession)",
    Index: "Obsession",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 69,
    RequiredLevel: 69,
    Code: "Obsession",
    Properties: [
      {
        PropertyString: "被擊中時有 24% 機率施展等級 10 削弱",
        Index: 1
      },
      {
        PropertyString: "無法破壞",
        Index: 0
      },
      {
        PropertyString: "+4 所有技能",
        Index: 0
      },
      {
        PropertyString: "+65% 施法速度",
        Index: 2
      },
      {
        PropertyString: "+60% 打擊恢復",
        Index: 3
      },
      {
        PropertyString: "擊退",
        Index: 0
      },
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "生命上限 +15-25%",
        Index: 5
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 6
      },
      {
        PropertyString: "所有抗性 +60-70%",
        Index: 4
      },
      {
        PropertyString: "怪物金幣掉落量提高 +75%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +30%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Jah Rune",
        ItemLevel: 65,
        RequiredLevel: 65,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Shael Rune",
        ItemLevel: 29,
        RequiredLevel: 29,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Zod Rune",
        ItemLevel: 69,
        RequiredLevel: 69,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "純潔 (Purity)",
    Index: "Purity",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 69,
    RequiredLevel: 69,
    Code: "Purity",
    Properties: [
      {
        PropertyString: "被擊中時有 10% 機率施展等級 19 骸骨護甲",
        Index: 4
      },
      {
        PropertyString: "擊中時有 35% 機率施展等級 8 昏暗視野",
        Index: 5
      },
      {
        PropertyString: "無法破壞",
        Index: 0
      },
      {
        PropertyString: "+50% 打擊恢復",
        Index: 2
      },
      {
        PropertyString: "+20% 格擋速度",
        Index: 0
      },
      {
        PropertyString: "格擋機率提高 +55%",
        Index: 0
      },
      {
        PropertyString: "+4 防禦 （依角色等級而定）",
        Index: 6
      },
      {
        PropertyString: "+50 生命",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +30-50%",
        Index: 3
      },
      {
        PropertyString: "+15 擊殺生命恢復",
        Index: 1
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Lum Rune",
        ItemLevel: 37,
        RequiredLevel: 37,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Zod Rune",
        ItemLevel: 69,
        RequiredLevel: 69,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Tir Rune",
        ItemLevel: 13,
        RequiredLevel: 13,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      }
    ],
    Name: "理由 (Reason)",
    Index: "Reason",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 69,
    RequiredLevel: 69,
    Code: "Reason",
    Properties: [
      {
        PropertyString: "無法破壞",
        Index: 0
      },
      {
        PropertyString: "裝備時賦予等級 5 冥想靈氣",
        Index: 2
      },
      {
        PropertyString: "+3 魔法使技能等級",
        Index: 0
      },
      {
        PropertyString: "+50% 施法速度",
        Index: 1
      },
      {
        PropertyString: "+4 魔法使隨機技能等級",
        Index: 6
      },
      {
        PropertyString: "+20 能量",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 +20%",
        Index: 4
      },
      {
        PropertyString: "+2 擊殺法力恢復",
        Index: 0
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 3
      },
      {
        PropertyString: "+20% 受到的傷害轉為法力",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  },
  {
    Runes: [
      {
        Name: "Zod Rune",
        ItemLevel: 69,
        RequiredLevel: 69,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Hel Rune",
        ItemLevel: 33,
        RequiredLevel: 0,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "Ist Rune",
        ItemLevel: 51,
        RequiredLevel: 51,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      },
      {
        Name: "El Rune",
        ItemLevel: 11,
        RequiredLevel: 11,
        Type: {
          Name: "Rune",
          Index: "Rune",
          Class: ""
        }
      }
    ],
    Types: [
      {
        Name: "Weapon",
        Index: "Weapon",
        Class: ""
      },
      {
        Name: "Any Armor",
        Index: "Any Armor",
        Class: ""
      },
      {
        Name: "Any Shield",
        Index: "Any Shield",
        Class: ""
      }
    ],
    Name: "星光 (Starlight)",
    Index: "Starlight",
    Enabled: true,
    Rarity: 0,
    ItemLevel: 69,
    RequiredLevel: 69,
    Code: "Starlight",
    Properties: [
      {
        PropertyString: "+3 所有技能",
        Index: 0
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 6
      },
      {
        PropertyString: "增加 35-140 傷害",
        Index: 1
      },
      {
        PropertyString: "+100-200% 防禦強化",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +150-300%",
        Index: 4
      },
      {
        PropertyString: "需求 -80%",
        Index: 3
      },
      {
        PropertyString: "+20 需求等級",
        Index: 5
      },
      {
        PropertyString: "照亮範圍 +1 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +30% （只限武器）",
        Index: 0
      },
      {
        PropertyString: "+50 準確率 （只限武器）",
        Index: 1
      },
      {
        PropertyString: "無法破壞 （只限武器）",
        Index: 0
      },
      {
        PropertyString: "需求 -20% （只限武器）",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +1 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "+15 防禦 （只限盔甲）",
        Index: 1
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "無法破壞 （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "需求 -15% （只限盔甲）",
        Index: 0
      },
      {
        PropertyString: "照亮範圍 +1 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "+15 防禦 （只限盾牌）",
        Index: 1
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25% （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "無法破壞 （只限盾牌）",
        Index: 0
      },
      {
        PropertyString: "需求 -15% （只限盾牌）",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: null
  }
];
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name2, symbol) => (symbol = Symbol[name2]) ? symbol : Symbol.for("Symbol." + name2);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decoratorStart = (base) => [, , , __create(null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name2, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name: name2, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name2, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name2]() {
    return __privateGet(this, extra);
  }, set [name2](x) {
    return __privateSet(this, extra, x);
  } }, name2));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name2) : __name(target, name2);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name2, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name2 in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name2];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name2] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name2, desc), p ? k ^ 4 ? extra : desc : target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _handleExclusiveTypeChanged_dec, _selectedAmountChanged_dec, _selectedTypeChanged_dec, _handleSearchChanged_dec, _handleSearchRunesChanged_dec, _exclusiveType_dec, _searchRunes_dec, _search_dec, _Runewords_decorators, _init;
_Runewords_decorators = [customElement(__au2ViewDef)], _search_dec = [bindable], _searchRunes_dec = [bindable], _exclusiveType_dec = [bindable], _handleSearchRunesChanged_dec = [watch("searchRunes")], _handleSearchChanged_dec = [watch("search")], _selectedTypeChanged_dec = [watch("selectedType")], _selectedAmountChanged_dec = [watch("selectedAmount")], _handleExclusiveTypeChanged_dec = [watch("exclusiveType")];
class Runewords {
  constructor() {
    __runInitializers(_init, 5, this);
    __publicField(this, "runewords", json);
    __publicField(this, "search", __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this);
    __publicField(this, "searchRunes", __runInitializers(_init, 12, this)), __runInitializers(_init, 15, this);
    __publicField(this, "exclusiveType", __runInitializers(_init, 16, this)), __runInitializers(_init, 19, this);
    __publicField(this, "_debouncedSearchItem");
    __publicField(this, "filteredRunewords", []);
    __publicField(this, "types", [
      // Parent types
      { label: "-", value: [] },
      { label: "任意盔甲", value: ["Armor", "Any Armor"] },
      { label: "任意頭盔", value: ["Helm"] },
      { label: "任意武器", value: ["Weapon"] },
      { label: "任意近戰武器", value: ["Melee Weapon", "Weapon"] },
      { label: "任意遠程武器", value: ["Missile Weapon", "Weapon"] },
      { label: "任意盾牌", value: ["Any Shield"] },
      // Specific weapon types
      { label: "斧頭", value: ["Axe", "Melee Weapon", "Weapon"] },
      { label: "棍棒", value: ["Club", "Melee Weapon", "Weapon"] },
      { label: "釘錘", value: ["Hammer", "Melee Weapon", "Weapon"] },
      { label: "拳刃", value: ["Hand to Hand", "Melee Weapon", "Weapon"] },
      { label: "连枷", value: ["Mace", "Melee Weapon", "Weapon"] },
      { label: "法珠", value: ["Orb"] },
      { label: "長柄武器", value: ["Polearm", "Melee Weapon", "Weapon"] },
      { label: "權杖", value: ["Scepter", "Melee Weapon", "Weapon"] },
      { label: "法杖", value: ["Staff", "Melee Weapon", "Weapon"] },
      { label: "長矛", value: ["Spear", "Melee Weapon", "Weapon"] },
      { label: "刀劍", value: ["Sword", "Melee Weapon", "Weapon"] },
      { label: "魔杖", value: ["Wand", "Melee Weapon", "Weapon"] },
      // Specific armor types
      { label: "頭環", value: ["Circlet", "Helm"] },
      // Class specific types
      { label: "亞馬遜弓", value: ["Amazon Bow", "Missile Weapon", "Weapon"] },
      { label: "亞馬遜長矛", value: ["Amazon Spear", "Spear", "Melee Weapon", "Weapon"] },
      { label: "死靈法師盾牌", value: ["Necromancer Item", "Any Shield"] },
      { label: "野蠻人頭盔", value: ["Barbarian Item"] },
      { label: "聖騎士盾牌", value: ["Paladin Item"] },
      { label: "德魯伊頭盔", value: ["Druid Item"] }
    ]);
    __publicField(this, "selectedType");
    __publicField(this, "amounts", [
      { value: void 0, label: "Any" },
      { value: 2, label: "2 Sockets" },
      { value: 3, label: "3 Sockets" },
      { value: 4, label: "4 Sockets" },
      { value: 5, label: "5 Sockets" },
      { value: 6, label: "6 Sockets" }
    ]);
    __publicField(this, "selectedAmount");
  }
  attached() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");
    if (searchParam) {
      this.search = searchParam;
    }
    const runesParam = urlParams.get("runes");
    if (runesParam) {
      this.searchRunes = runesParam;
    }
    const typeParam = urlParams.get("type");
    if (typeParam) {
      this.selectedType = typeParam.split(",");
    }
    const socketsParam = urlParams.get("sockets");
    if (socketsParam) {
      this.selectedAmount = parseInt(socketsParam, 10);
    }
    const exactParam = urlParams.get("exact");
    if (exactParam) {
      this.exclusiveType = exactParam === "true";
    }
    this._debouncedSearchItem = debounce(this.updateList.bind(this), 350);
    this.updateList();
  }
  // Helper method to update URL with current search parameters
  updateUrl() {
    const url = new URL(window.location.href);
    if (this.search && this.search.trim() !== "") {
      url.searchParams.set("search", this.search);
    } else {
      url.searchParams.delete("search");
    }
    if (this.searchRunes && this.searchRunes.trim() !== "") {
      url.searchParams.set("runes", this.searchRunes);
    } else {
      url.searchParams.delete("runes");
    }
    if (this.selectedType && this.selectedType.length > 0) {
      url.searchParams.set("type", this.selectedType.join(","));
    } else {
      url.searchParams.delete("type");
    }
    if (this.selectedAmount) {
      url.searchParams.set("sockets", this.selectedAmount.toString());
    } else {
      url.searchParams.delete("sockets");
    }
    if (this.exclusiveType) {
      url.searchParams.set("exact", "true");
    } else {
      url.searchParams.delete("exact");
    }
    window.history.pushState({}, "", url.toString());
  }
  handleSearchRunesChanged() {
    if (this._debouncedSearchItem) {
      this._debouncedSearchItem();
    }
    this.updateUrl();
  }
  handleSearchChanged() {
    if (this._debouncedSearchItem) {
      this._debouncedSearchItem();
    }
    this.updateUrl();
  }
  selectedTypeChanged() {
    if (this._debouncedSearchItem) {
      this._debouncedSearchItem();
    }
    this.updateUrl();
  }
  selectedAmountChanged() {
    if (this._debouncedSearchItem) {
      this._debouncedSearchItem();
    }
    this.updateUrl();
  }
  handleExclusiveTypeChanged() {
    if (this._debouncedSearchItem) {
      this._debouncedSearchItem();
    }
    this.updateUrl();
  }
  normalizeRuneName(name2) {
    return name2.replace(/ rune$/i, "").trim().toLowerCase();
  }
  updateList() {
    let filteringRunewords = this.runewords;
    if (this.selectedType?.length > 0) {
      const selectedType = this.exclusiveType ? [this.selectedType[0]] : this.selectedType;
      filteringRunewords = filteringRunewords.filter((x) => {
        for (const type of x.Types) {
          if (selectedType.includes(type.Index) || type.Index === "Merc Equip" && selectedType.includes("Helm")) {
            return true;
          }
        }
        return false;
      });
    }
    if (this.selectedAmount) {
      filteringRunewords = filteringRunewords.filter((x) => x.Runes.length === this.selectedAmount);
    }
    let found = filteringRunewords;
    if (this.search) {
      found = found.filter((runeword) => {
        if (runeword.Name.toLowerCase().includes(this.search.toLowerCase())) {
          return true;
        }
        for (const property of runeword.Properties) {
          if (property.PropertyString.toLowerCase().includes(this.search.toLowerCase())) {
            return true;
          }
        }
        for (const type of runeword.Types) {
          if (type.Name.toLowerCase().includes(this.search.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    }
    if (this.searchRunes) {
      const inputRuneList = this.searchRunes.split(" ").map((rune) => rune.trim().toLowerCase()).filter((rune) => rune.length > 0);
      found = found.filter((runeword) => {
        const runewordRuneNames = runeword.Runes.map((rune) => this.normalizeRuneName(rune.Name));
        return inputRuneList.every(
          (inputRune) => runewordRuneNames.includes(inputRune)
        );
      });
    }
    this.filteredRunewords = found;
  }
  transformTypeName(name2) {
    const rwBaseMap = {
      "Armor": "盔甲",
      "Any Armor": "盔甲",
      "Helm": "頭盔",
      "Weapon": "武器",
      "Melee Weapon": "近戰武器",
      "Missile Weapon": "遠程武器",
      "Any Shield": "盾牌",
      "Axe": "斧頭",
      "Club": "棍棒",
      "Hammer": "釘錘",
      "Hand to Hand": "拳刃",
      "Mace": "连枷",
      "Orb": "法珠",
      "Polearm": "長柄武器",
      "Scepter": "權杖",
      "Staff": "法杖",
      "Spear": "長矛",
      "Sword": "刀劍",
      "Wand": "魔杖",
      "Circlet": "頭環",
      "Amazon Bow": "亞馬遜弓",
      "Amazon Spear": "亞馬遜長矛",
      "Necromancer Item": "死靈法師盾牌",
      "Barbarian Item": "野蠻人頭盔",
      "Paladin Item": "聖騎士盾牌",
      "Druid Item": "德魯伊頭盔"
    };
    if (rwBaseMap[name2] !== void 0) {
      return rwBaseMap[name2];
    }
    switch (name2) {
      case "Merc Equip":
        return "Helm";
      default:
        return name2;
    }
  }
  actualLevelRequirement(runeword) {
    for (const property of runeword.Properties) {
      if (property.PropertyString && property.PropertyString.includes("To Required Level")) {
        const value = property.PropertyString.substring(1, 3);
        if (!runeword.RequiredLevel) {
          return parseInt(value.trim());
        }
        return runeword.RequiredLevel + parseInt(value.trim());
      }
    }
    return runeword.RequiredLevel;
  }
}
_init = __decoratorStart();
__decorateElement(_init, 1, "handleSearchRunesChanged", _handleSearchRunesChanged_dec, Runewords);
__decorateElement(_init, 1, "handleSearchChanged", _handleSearchChanged_dec, Runewords);
__decorateElement(_init, 1, "selectedTypeChanged", _selectedTypeChanged_dec, Runewords);
__decorateElement(_init, 1, "selectedAmountChanged", _selectedAmountChanged_dec, Runewords);
__decorateElement(_init, 1, "handleExclusiveTypeChanged", _handleExclusiveTypeChanged_dec, Runewords);
__decorateElement(_init, 5, "search", _search_dec, Runewords);
__decorateElement(_init, 5, "searchRunes", _searchRunes_dec, Runewords);
__decorateElement(_init, 5, "exclusiveType", _exclusiveType_dec, Runewords);
Runewords = __decorateElement(_init, 0, "Runewords", _Runewords_decorators, Runewords);
__runInitializers(_init, 1, Runewords);
export {
  Runewords
};
