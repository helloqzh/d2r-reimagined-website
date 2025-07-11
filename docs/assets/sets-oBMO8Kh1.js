import { C as CustomElement, w as watch, c as customElement, b as bindable } from "./index-Dpmb3q_R.js";
import { d as debounce } from "./debounce-ZwsFz6hU.js";
const name = "sets";
const template = '<template>\r\n    <h3 class="text-center my-4">\r\n        共 ${sets.length} 套裝\r\n    </h3>\r\n    <div class="container">\r\n        <div class="row align-content-center justify-content-center text-center mb-5">\r\n            <div class="col-12 col-sm-6">\r\n                <div class="au-select mb-2">\r\n                    <moo-select\r\n                            class="w-100"\r\n                            label="職業選擇"\r\n                            options.bind="classes"\r\n                            class="standard-betsy-select"\r\n                            value.bind="class"\r\n                    ></moo-select>\r\n                </div>\r\n            </div>\r\n            <div class="col-12 col-sm-6">\r\n                <moo-text-field\r\n                        class="w-100"\r\n                        label="Search Sets"\r\n                        type="text"\r\n                        value.bind="search"\r\n                ></moo-text-field>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row gy-5 px-5 text-center">\r\n        <div class="col-12 col-md-6 col-xxl-4" repeat.for="set of sets">\r\n            <div class="card bg-dark p-2">\r\n                <div class="set-text fs-5 mb-1">\r\n                    ${set.Name}\r\n                </div>\r\n\r\n                <div class="partial-sets set-text" repeat.for="partial of set.PartialProperties">\r\n                    ${partial.PropertyString} (${$index + 2} 件)\r\n                </div>\r\n\r\n                <div class="partial-sets set-text" repeat.for="full of set.FullProperties">\r\n                    ${full.PropertyString} (完整套裝)\r\n                </div>\r\n\r\n                <div class="my-3" repeat.for="setItem of set.SetItems">\r\n                    <div class="set-text mb-1">\r\n                        ${setItem.Name}\r\n                    </div>\r\n\r\n                    <div class="armor mb-1" if.bind="setItem.Equipment.Name">\r\n                        ${setItem.Equipment.Name}\r\n                    </div>\r\n\r\n                    <div class="armor mt-1" if.bind="setItem.Equipment.ArmorString">\r\n                        防禦: ${setItem.Equipment.ArmorString}\r\n                    </div>\r\n\r\n                    <div class="damage" if.bind="setItem.Equipment.DamageTypes"\r\n                         repeat.for="damage of setItem.Equipment.DamageTypes">\r\n                        ${getDamageTypeString(damage.Type)} ${damage.DamageString}\r\n                    </div>\r\n\r\n                    <div class="requirement" if.bind="setItem.RequiredLevel > 0">\r\n                        等級需求：${setItem.RequiredLevel}\r\n                    </div>\r\n\r\n                    <div class="requirement" if.bind="setItem.Equipment.RequiredStrength > 0">\r\n                        力量需求：${setItem.Equipment.RequiredStrength}\r\n                    </div>\r\n\r\n                    <div class="requirement" if.bind="setItem.Equipment.RequiredDexterity > 0">\r\n                        敏捷需求：${setItem.Equipment.RequiredDexterity}\r\n                    </div>\r\n\r\n                    <div class="durability mt-1" if.bind="setItem.Equipment.Durability > 0">\r\n                        耐久度：${setItem.Equipment.Durability}\r\n                    </div>\r\n\r\n                    <div class="enhanced" repeat.for="property of setItem.Properties">\r\n                        ${property.PropertyString}\r\n                    </div>\r\n\r\n                    <div class="set-text" repeat.for="setProperty of setItem.SetPropertiesString">\r\n                        ${setProperty}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n';
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
    Index: "Civerb's Vestments",
    Name: "克維雷布的法衣 (Civerb's Vestments)",
    SetItems: [
      {
        Type: "Shield",
        "Set": "Civerb's Vestments",
        SetPropertiesString: [
          "+21-22 法力 (Civerb's Icon)",
          "毒素抗性 +25-26% (Civerb's Cudgel)"
        ],
        Name: "克維雷布的防護 (Civerb's Ward)",
        Index: "Civerb's Ward",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 13,
        RequiredLevel: 9,
        Code: "lrg",
        Properties: [
          {
            PropertyString: "格擋機率提高 +15%",
            Index: 1
          },
          {
            PropertyString: "+15 防禦",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "2 to 4",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "32-42",
          EquipmentType: 0,
          Name: "大型盾 (Large Shield)",
          RequiredStrength: 34,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 11,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Civerb's Vestments",
        SetPropertiesString: [
          "+25 防禦 （3 件）",
          "冰寒抗性 +25% （2 件）"
        ],
        Name: "克維雷布的聖像 (Civerb's Icon)",
        Index: "Civerb's Icon",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 13,
        RequiredLevel: 9,
        Code: "amu",
        Properties: [
          {
            PropertyString: "生命回復 +4",
            Index: 1
          },
          {
            PropertyString: "法力恢復 40%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Scepter",
        "Set": "Civerb's Vestments",
        SetPropertiesString: [],
        Name: "克維雷布的短棍 (Civerb's Cudgel)",
        Index: "Civerb's Cudgel",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 13,
        RequiredLevel: 9,
        Code: "gsc",
        Properties: [
          {
            PropertyString: "+17-23 最大傷害",
            Index: 1
          },
          {
            PropertyString: "+75 準確率",
            Index: 0
          },
          {
            PropertyString: "+1 最大傷害 （依角色等級而定）",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "8 to 35"
            }
          ],
          EquipmentType: 1,
          Name: "莊嚴權杖 (Grand Scepter)",
          RequiredStrength: 37,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 15,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "火焰抗性 +25%",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+25% 準確率加成",
        Index: 3
      },
      {
        PropertyString: "+200% 對不死怪物的傷害",
        Index: 1
      },
      {
        PropertyString: "+50 防禦",
        Index: 4
      },
      {
        PropertyString: "+15 力量",
        Index: 0
      },
      {
        PropertyString: "電擊抗性 +25%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Hsarus' Defense",
    Name: "海沙魯的鐵禦 (Hsarus' Defense)",
    SetItems: [
      {
        Type: "Boots",
        "Set": "Hsarus' Defense",
        SetPropertiesString: [
          "+2.5 to Attack Rating （依角色等級而定） （2 件）"
        ],
        Name: "海沙魯的鐵跟 (Hsarus' Iron Heel)",
        Index: "Hsarus' Iron Heel",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 4,
        RequiredLevel: 3,
        Code: "mbt",
        Properties: [
          {
            PropertyString: "+20% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "火焰抗性 +25%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "6 to 12",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "108",
          EquipmentType: 0,
          Name: "鎖鍊靴 (Chain Boots)",
          RequiredStrength: 30,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 12,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Hsarus' Defense",
        SetPropertiesString: [
          "+2.5 防禦 （依角色等級而定） （2 件）"
        ],
        Name: "海沙魯的鐵拳 (Hsarus' Iron Fist)",
        Index: "Hsarus' Iron Fist",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 4,
        RequiredLevel: 3,
        Code: "buc",
        Properties: [
          {
            PropertyString: "+10 力量",
            Index: 1
          },
          {
            PropertyString: "物理傷害降低 2",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "1 to 3",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "4",
          EquipmentType: 0,
          Name: "小圓盾 (Buckler)",
          RequiredStrength: 12,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 1,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Hsarus' Defense",
        SetPropertiesString: [
          "+2.5 防禦 （依角色等級而定） （2 件）"
        ],
        Name: "海沙魯的鐵扣 (Hsarus' Iron Stay)",
        Index: "Hsarus' Iron Stay",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 4,
        RequiredLevel: 3,
        Code: "mbl",
        Properties: [
          {
            PropertyString: "+20 生命",
            Index: 1
          },
          {
            PropertyString: "冰寒抗性 +20%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "5",
          EquipmentType: 0,
          Name: "腰帶 (Belt)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 12,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "攻擊者反傷 +5",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+5 最大傷害",
        Index: 0
      },
      {
        PropertyString: "電擊抗性 +25%",
        Index: 2
      },
      {
        PropertyString: "無法冰凍",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Cleglaw's Brace",
    Name: "克雷德勞的防備 (Cleglaw's Brace)",
    SetItems: [
      {
        Type: "Sword",
        "Set": "Cleglaw's Brace",
        SetPropertiesString: [
          "+1.25 最大傷害 （依角色等級而定） （2 件）"
        ],
        Name: "克雷德勞之牙 (Cleglaw's Tooth)",
        Index: "Cleglaw's Tooth",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 6,
        RequiredLevel: 4,
        Code: "lsd",
        Properties: [
          {
            PropertyString: "+30% 準確率加成",
            Index: 0
          },
          {
            PropertyString: "+50% 致命打擊",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "3 to 19"
            }
          ],
          EquipmentType: 1,
          Name: "長劍 (Long Sword)",
          RequiredStrength: 55,
          RequiredDexterity: 39,
          Durability: 250,
          ItemLevel: 20,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Cleglaw's Brace",
        SetPropertiesString: [
          "所有抗性 +15% （2 件）"
        ],
        Name: "克雷德勞之爪 (Cleglaw's Claw)",
        Index: "Cleglaw's Claw",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 6,
        RequiredLevel: 4,
        Code: "sml",
        Properties: [
          {
            PropertyString: "+17 防禦",
            Index: 0
          },
          {
            PropertyString: "中毒的時效縮短 75%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "2 to 3",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "25",
          EquipmentType: 0,
          Name: "小型盾 (Small Shield)",
          RequiredStrength: 22,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 5,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Cleglaw's Brace",
        SetPropertiesString: [
          "+2.5 to Attack Rating （依角色等級而定） （2 件）"
        ],
        Name: "克雷德勞之鉗 (Cleglaw's Pincers)",
        Index: "Cleglaw's Pincers",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 6,
        RequiredLevel: 4,
        Code: "mgl",
        Properties: [
          {
            PropertyString: "使目標減慢 25%",
            Index: 1
          },
          {
            PropertyString: "擊退",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "15",
          EquipmentType: 0,
          Name: "鍊甲手套 (Chain Gloves)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 12,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 防禦",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "攻擊速度 +20%",
        Index: 3
      },
      {
        PropertyString: "擊中竊取 +6% 法力",
        Index: 1
      },
      {
        PropertyString: "+35% 概率造成粉碎打擊",
        Index: 2
      },
      {
        PropertyString: "+50 防禦",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Iratha's Finery",
    Name: "依雷撒的華服 (Iratha's Finery)",
    SetItems: [
      {
        Type: "Amulet",
        "Set": "Iratha's Finery",
        SetPropertiesString: [
          "所有抗性 +15% （2 件）"
        ],
        Name: "依雷撒的項圈 (Iratha's Collar)",
        Index: "Iratha's Collar",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 21,
        RequiredLevel: 15,
        Code: "amu",
        Properties: [
          {
            PropertyString: "毒素抗性 +30%",
            Index: 0
          },
          {
            PropertyString: "中毒的時效縮短 75%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Iratha's Finery",
        SetPropertiesString: [
          "攻擊速度 +20% （2 件）"
        ],
        Name: "依雷撒的袖銬 (Iratha's Cuff)",
        Index: "Iratha's Cuff",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 21,
        RequiredLevel: 15,
        Code: "tgl",
        Properties: [
          {
            PropertyString: "冰寒抗性 +30%",
            Index: 0
          },
          {
            PropertyString: "冰凍時間減半",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "9",
          EquipmentType: 0,
          Name: "輕型護手 (Light Gauntlets)",
          RequiredStrength: 45,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 20,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Iratha's Finery",
        SetPropertiesString: [
          "+2 防禦 （依角色等級而定） （2 件）"
        ],
        Name: "依雷撒的盤頂 (Iratha's Coil)",
        Index: "Iratha's Coil",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 21,
        RequiredLevel: 15,
        Code: "crn",
        Properties: [
          {
            PropertyString: "電擊抗性 +30%",
            Index: 1
          },
          {
            PropertyString: "火焰抗性 +30%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25",
          EquipmentType: 0,
          Name: "王冠 (Crown)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 29,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Iratha's Finery",
        SetPropertiesString: [
          "+10 敏捷 （2 件）"
        ],
        Name: "依雷撒的腰繩 (Iratha's Cord)",
        Index: "Iratha's Cord",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 21,
        RequiredLevel: 15,
        Code: "tbl",
        Properties: [
          {
            PropertyString: "+5 最小傷害",
            Index: 1
          },
          {
            PropertyString: "+25 防禦",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "26-36",
          EquipmentType: 0,
          Name: "厚腰帶 (Heavy Belt)",
          RequiredStrength: 45,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 20,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 防禦",
        Index: 0
      },
      {
        PropertyString: "+20% 跑步 / 行走速度",
        Index: 2
      },
      {
        PropertyString: "+24% 穿透攻擊",
        Index: 3
      }
    ],
    FullProperties: [
      {
        PropertyString: "+15 敏捷",
        Index: 5
      },
      {
        PropertyString: "毒素抗性上限 ++10",
        Index: 4
      },
      {
        PropertyString: "冰寒抗性上限 +10",
        Index: 2
      },
      {
        PropertyString: "電擊抗性上限 +10",
        Index: 3
      },
      {
        PropertyString: "火焰抗性上限 +10",
        Index: 1
      },
      {
        PropertyString: "所有抗性 +20%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Isenhart's Armory",
    Name: "依森哈特的軍械 (Isenhart's Armory)",
    SetItems: [
      {
        Type: "Sword",
        "Set": "Isenhart's Armory",
        SetPropertiesString: [
          "+1.25 to Attack Rating （依角色等級而定） （2 件）"
        ],
        Name: "依森哈特的光之烙鐵 (Isenhart's Lightbrand)",
        Index: "Isenhart's Lightbrand",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 11,
        RequiredLevel: 8,
        Code: "bsd",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+10 最小傷害",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "17 to 14"
            }
          ],
          EquipmentType: 1,
          Name: "闊劍 (Broad Sword)",
          RequiredStrength: 48,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 15,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Isenhart's Armory",
        SetPropertiesString: [
          "所有抗性 +8% （2 件）"
        ],
        Name: "依森哈特的招架 (Isenhart's Parry)",
        Index: "Isenhart's Parry",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 11,
        RequiredLevel: 8,
        Code: "gts",
        Properties: [
          {
            PropertyString: "+40 防禦",
            Index: 0
          },
          {
            PropertyString: "攻擊者受到 +4 點電擊傷害",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "2 to 6",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "70",
          EquipmentType: 0,
          Name: "哥德盾 (Gothic Shield)",
          RequiredStrength: 60,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 30,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Isenhart's Armory",
        SetPropertiesString: [
          "+2 防禦 （依角色等級而定） （2 件）"
        ],
        Name: "依森哈特的外殼 (Isenhart's Case)",
        Index: "Isenhart's Case",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 11,
        RequiredLevel: 8,
        Code: "brs",
        Properties: [
          {
            PropertyString: "+40 防禦",
            Index: 0
          },
          {
            PropertyString: "魔法傷害降低 2",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "115-145",
          EquipmentType: 0,
          Name: "胸鎧 (Breast Plate)",
          RequiredStrength: 30,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 18,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Isenhart's Armory",
        SetPropertiesString: [
          "所有抗性 +8% （2 件）"
        ],
        Name: "依森哈特的角盔 (Isenhart's Horns)",
        Index: "Isenhart's Horns",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 11,
        RequiredLevel: 8,
        Code: "fhl",
        Properties: [
          {
            PropertyString: "+6 敏捷",
            Index: 0
          },
          {
            PropertyString: "物理傷害降低 2",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "43-53",
          EquipmentType: 0,
          Name: "全罩盔 (Full Helm)",
          RequiredStrength: 41,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 15,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+10 力量",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+20% 跑步 / 行走速度",
        Index: 4
      },
      {
        PropertyString: "格擋機率提高 +30%",
        Index: 3
      },
      {
        PropertyString: "+35% 準確率加成",
        Index: 2
      },
      {
        PropertyString: "擊中竊取 5% 生命",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +10%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Vidala's Rig",
    Name: "維達拉的配備 (Vidala's Rig)",
    SetItems: [
      {
        Type: "Bow",
        "Set": "Vidala's Rig",
        SetPropertiesString: [
          "+2 準確率 （依角色等級而定） （2 件）"
        ],
        Name: "維達拉的倒刺 (Vidala's Barb)",
        Index: "Vidala's Barb",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 19,
        RequiredLevel: 14,
        Code: "lbb",
        Properties: [
          {
            PropertyString: "增加 1-20 電擊傷害",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "3 to 18"
            }
          ],
          EquipmentType: 1,
          Name: "戰鬥長弓 (Long Battle Bow)",
          RequiredStrength: 40,
          RequiredDexterity: 50,
          Durability: 0,
          ItemLevel: 23,
          Type: {
            Name: "Bow",
            Index: "Bow",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Vidala's Rig",
        SetPropertiesString: [
          "所有抗性 +8% （2 件）"
        ],
        Name: "維達拉的足距 (Vidala's Fetlock)",
        Index: "Vidala's Fetlock",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 19,
        RequiredLevel: 14,
        Code: "tbt",
        Properties: [
          {
            PropertyString: "+30% 跑步 / 行走速度",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "8 to 16",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "18-21",
          EquipmentType: 0,
          Name: "輕鎧靴 (Light Plated Boots)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 20,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Vidala's Rig",
        SetPropertiesString: [
          "+2.5 防禦 （依角色等級而定） （3 件）",
          "火焰抗性 +24% （2 件）"
        ],
        Name: "維達拉的突襲 (Vidala's Ambush)",
        Index: "Vidala's Ambush",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 19,
        RequiredLevel: 14,
        Code: "lea",
        Properties: [
          {
            PropertyString: "+50 防禦",
            Index: 0
          },
          {
            PropertyString: "+11 敏捷",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "64",
          EquipmentType: 0,
          Name: "皮革甲 (Leather Armor)",
          RequiredStrength: 15,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 3,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Vidala's Rig",
        SetPropertiesString: [
          "尋獲魔法物品機率提高 +50% （2 件）"
        ],
        Name: "維達拉的圈套 (Vidala's Snare)",
        Index: "Vidala's Snare",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 19,
        RequiredLevel: 14,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+15 生命",
            Index: 0
          },
          {
            PropertyString: "冰寒抗性 +20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+75 準確率",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +7% 法力",
        Index: 1
      },
      {
        PropertyString: "+15 敏捷",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+50% 穿透攻擊",
        Index: 2
      },
      {
        PropertyString: "+1.增加 5 寒冰傷害 （依角色等級而定）",
        Index: 0
      },
      {
        PropertyString: "凍結目標 +1",
        Index: 1
      },
      {
        PropertyString: "+10 力量",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Milabrega's Regalia",
    Name: "米拉伯佳戰裝 (Milabrega's Regalia)",
    SetItems: [
      {
        Type: "Shield",
        "Set": "Milabrega's Regalia",
        SetPropertiesString: [
          "+50% 防禦強化 （3 件）",
          "+50 生命 （2 件）"
        ],
        Name: "米拉伯佳之球 (Milabrega's Orb)",
        Index: "Milabrega's Orb",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 23,
        RequiredLevel: 17,
        Code: "kit",
        Properties: [
          {
            PropertyString: "+25 防禦",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +20%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "2 to 5",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "41",
          EquipmentType: 0,
          Name: "鳶盾 (Kite Shield)",
          RequiredStrength: 47,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 15,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Scepter",
        "Set": "Milabrega's Regalia",
        SetPropertiesString: [],
        Name: "米拉伯佳節杖 (Milabrega's Rod)",
        Index: "Milabrega's Rod",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 23,
        RequiredLevel: 17,
        Code: "wsp",
        Properties: [
          {
            PropertyString: "+1 聖騎士技能等級",
            Index: 0
          },
          {
            PropertyString: "+50% 傷害強化",
            Index: 1
          },
          {
            PropertyString: "照亮範圍 +2",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "15 to 25"
            }
          ],
          EquipmentType: 1,
          Name: "征戰權杖 (War Scepter)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 21,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Milabrega's Regalia",
        SetPropertiesString: [
          "冰寒抗性 +40% （2 件）"
        ],
        Name: "米拉伯佳權冠 (Milabrega's Diadem)",
        Index: "Milabrega's Diadem",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 23,
        RequiredLevel: 17,
        Code: "crn",
        Properties: [
          {
            PropertyString: "+15 生命",
            Index: 0
          },
          {
            PropertyString: "+15 法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25",
          EquipmentType: 0,
          Name: "王冠 (Crown)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 29,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Milabrega's Regalia",
        SetPropertiesString: [
          "+100% 防禦強化 （2 件）"
        ],
        Name: "米拉伯佳外袍 (Milabrega's Robe)",
        Index: "Milabrega's Robe",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 23,
        RequiredLevel: 17,
        Code: "aar",
        Properties: [
          {
            PropertyString: "物理傷害降低 2",
            Index: 1
          },
          {
            PropertyString: "攻擊者反傷 +3",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "218",
          EquipmentType: 0,
          Name: "上古鎧甲 (Ancient Armor)",
          RequiredStrength: 100,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 40,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+75 準確率",
        Index: 0
      },
      {
        PropertyString: "增加 2 電擊傷害 （依角色等級而定）",
        Index: 1
      },
      {
        PropertyString: "+125 準確率",
        Index: 2
      },
      {
        PropertyString: "無法冰凍",
        Index: 3
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 聖騎士技能等級",
        Index: 1
      },
      {
        PropertyString: "擊中竊取 +10% 法力",
        Index: 2
      },
      {
        PropertyString: "擊中竊取 8% 生命",
        Index: 0
      },
      {
        PropertyString: "毒素抗性 +15%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Cathan's Traps",
    Name: "卡珊的衣著 (Cathan's Traps)",
    SetItems: [
      {
        Type: "Staff",
        "Set": "Cathan's Traps",
        SetPropertiesString: [
          "+50 法力 （2 件）",
          "所有抗性 +10% （3 件）"
        ],
        Name: "卡珊的尺杖 (Cathan's Rule)",
        Index: "Cathan's Rule",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 11,
        Code: "bst",
        Properties: [
          {
            PropertyString: "+1 火焰技能",
            Index: 0
          },
          {
            PropertyString: "增加 10 火焰傷害",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "6 to 13"
            }
          ],
          EquipmentType: 1,
          Name: "戰鬥法杖 (Battle Staff)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 17,
          Type: {
            Name: "Staff",
            Index: "Staff",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Cathan's Traps",
        SetPropertiesString: [
          "火焰抗性 +30% （3 件）",
          "攻擊者反傷 +5 （2 件）"
        ],
        Name: "卡珊的網衣 (Cathan's Mesh)",
        Index: "Cathan's Mesh",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 11,
        Code: "chn",
        Properties: [
          {
            PropertyString: "+15 防禦",
            Index: 0
          },
          {
            PropertyString: "需求 -50%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "87",
          EquipmentType: 0,
          Name: "鎖鍊甲 (Chain Mail)",
          RequiredStrength: 48,
          RequiredDexterity: 0,
          Durability: 45,
          ItemLevel: 15,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Cathan's Traps",
        SetPropertiesString: [
          "+2 防禦 （依角色等級而定） （2 件）"
        ],
        Name: "卡珊的容貌 (Cathan's Visage)",
        Index: "Cathan's Visage",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 11,
        Code: "msk",
        Properties: [
          {
            PropertyString: "+20 法力",
            Index: 0
          },
          {
            PropertyString: "冰寒抗性 +25%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "16-20",
          EquipmentType: 0,
          Name: "面具",
          RequiredStrength: 23,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 19,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Cathan's Traps",
        SetPropertiesString: [
          "+50 準確率 （2 件）",
          "尋獲魔法物品機率提高 +25% （3 件）"
        ],
        Name: "卡珊的魔咒 (Cathan's Sigil)",
        Index: "Cathan's Sigil",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 11,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+10% 打擊恢復",
            Index: 0
          },
          {
            PropertyString: "攻擊者受到 +5 點電擊傷害",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Cathan's Traps",
        SetPropertiesString: [
          "+10 力量 （2 件）"
        ],
        Name: "卡珊的封印 (Cathan's Seal)",
        Index: "Cathan's Seal",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 11,
        Code: "rin",
        Properties: [
          {
            PropertyString: "擊中竊取 6% 生命",
            Index: 0
          },
          {
            PropertyString: "物理傷害降低 2",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "增加 15-20 火焰傷害",
        Index: 0
      },
      {
        PropertyString: "法力恢復 16%",
        Index: 1
      },
      {
        PropertyString: "電擊抗性 +25%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+10% 施法速度",
        Index: 3
      },
      {
        PropertyString: "+60 準確率",
        Index: 0
      },
      {
        PropertyString: "+20 法力",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 2
      },
      {
        PropertyString: "魔法傷害降低 3",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Tancred's Battlegear",
    Name: "坦克雷的戰裝 (Tancred's Battlegear)",
    SetItems: [
      {
        Type: "Axe",
        "Set": "Tancred's Battlegear",
        SetPropertiesString: [
          "攻擊速度 +20% （3 件）",
          "+20 法力 （2 件）"
        ],
        Name: "坦克雷的鴉嘴鎬 (Tancred's Crowbill)",
        Index: "Tancred's Crowbill",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 27,
        RequiredLevel: 20,
        Code: "mpi",
        Properties: [
          {
            PropertyString: "+80% 傷害強化",
            Index: 1
          },
          {
            PropertyString: "+75 準確率",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "12 to 19"
            }
          ],
          EquipmentType: 1,
          Name: "軍用鎬 (Military Pick)",
          RequiredStrength: 49,
          RequiredDexterity: 33,
          Durability: 250,
          ItemLevel: 19,
          Type: {
            Name: "Axe",
            Index: "Axe",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Tancred's Battlegear",
        SetPropertiesString: [
          "+2 防禦 （依角色等級而定） （2 件）"
        ],
        Name: "坦克雷的脊柱 (Tancred's Spine)",
        Index: "Tancred's Spine",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 27,
        RequiredLevel: 20,
        Code: "ful",
        Properties: [
          {
            PropertyString: "+15 力量",
            Index: 1
          },
          {
            PropertyString: "+40 生命",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "286-347",
          EquipmentType: 0,
          Name: "全身鎧甲 (Full Plate Mail)",
          RequiredStrength: 80,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 37,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Tancred's Battlegear",
        SetPropertiesString: [
          "+30% 跑步 / 行走速度 （2 件）",
          "+10 力量 （3 件）"
        ],
        Name: "坦克雷的釘靴 (Tancred's Hobnails)",
        Index: "Tancred's Hobnails",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 27,
        RequiredLevel: 20,
        Code: "lbt",
        Properties: [
          {
            PropertyString: "+10 敏捷",
            Index: 1
          },
          {
            PropertyString: "+25 Heal Stamina Plus",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "3 to 8",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "2",
          EquipmentType: 0,
          Name: "皮靴 (Boots)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 3,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Tancred's Battlegear",
        SetPropertiesString: [
          "+60 準確率 （3 件）",
          "尋獲魔法物品機率提高 +78% （2 件）"
        ],
        Name: "坦克雷的怪誕 (Tancred's Weird)",
        Index: "Tancred's Weird",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 27,
        RequiredLevel: 20,
        Code: "amu",
        Properties: [
          {
            PropertyString: "物理傷害降低 2",
            Index: 0
          },
          {
            PropertyString: "魔法傷害降低 1",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Tancred's Battlegear",
        SetPropertiesString: [
          "所有抗性 +10% （2 件）"
        ],
        Name: "坦克雷的顱骨 (Tancred's Skull)",
        Index: "Tancred's Skull",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 27,
        RequiredLevel: 20,
        Code: "bhm",
        Properties: [
          {
            PropertyString: "+10% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+40 準確率",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "33",
          EquipmentType: 0,
          Name: "骸骨頭盔 (Bone Helm)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 22,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "增加 15 電擊傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 5% 生命",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "擊中竊取 +5% 法力",
        Index: 3
      },
      {
        PropertyString: "使目標減慢 35%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +10%",
        Index: 1
      },
      {
        PropertyString: "怪物金幣掉落量提高 +75%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Sigon's Complete Steel",
    Name: "西剛的全套鋼甲 (Sigon's Complete Steel)",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [
          "攻擊速度 +30% （2 件）"
        ],
        Name: "西剛的挑戰 (Sigon's Gage)",
        Index: "Sigon's Gage",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "hgl",
        Properties: [
          {
            PropertyString: "+20 準確率",
            Index: 1
          },
          {
            PropertyString: "+10 力量",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "12",
          EquipmentType: 0,
          Name: "鋼鐵護手 (Gauntlets)",
          RequiredStrength: 60,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 27,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [
          "+2 準確率 （依角色等級而定） （2 件）"
        ],
        Name: "西剛的護面 (Sigon's Visor)",
        Index: "Sigon's Visor",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "ghm",
        Properties: [
          {
            PropertyString: "+25 防禦",
            Index: 1
          },
          {
            PropertyString: "+30 法力",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "30",
          EquipmentType: 0,
          Name: "重盔 (Great Helm)",
          RequiredStrength: 63,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 23,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [
          "攻擊者反傷 +20 （2 件）"
        ],
        Name: "西剛的庇護 (Sigon's Shelter)",
        Index: "Sigon's Shelter",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "gth",
        Properties: [
          {
            PropertyString: "+25% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "電擊抗性 +30%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "161",
          EquipmentType: 0,
          Name: "哥德鎧甲 (Gothic Plate)",
          RequiredStrength: 70,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 32,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [
          "+50 準確率 （2 件）",
          "尋獲魔法物品機率提高 +50% （3 件）"
        ],
        Name: "西剛的硬靴 (Sigon's Sabot)",
        Index: "Sigon's Sabot",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "hbt",
        Properties: [
          {
            PropertyString: "+20% 跑步 / 行走速度",
            Index: 0
          },
          {
            PropertyString: "冰寒抗性 +40%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "10 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "12",
          EquipmentType: 0,
          Name: "護脛",
          RequiredStrength: 70,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 27,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [
          "+2 防禦 （依角色等級而定） （2 件）"
        ],
        Name: "西剛的裹腰 (Sigon's Wrap)",
        Index: "Sigon's Wrap",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "hbl",
        Properties: [
          {
            PropertyString: "+20 生命",
            Index: 1
          },
          {
            PropertyString: "火焰抗性 +20%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "18-19",
          EquipmentType: 0,
          Name: "鎧甲腰帶 (Plated Belt)",
          RequiredStrength: 60,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 27,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [],
        Name: "西剛的守護 (Sigon's Guard)",
        Index: "Sigon's Guard",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "tow",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "格擋機率提高 +20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "1 to 5",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "22",
          EquipmentType: 0,
          Name: "塔盾 (Tower Shield)",
          RequiredStrength: 75,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 22,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "擊中竊取 10% 生命",
        Index: 0
      },
      {
        PropertyString: "+100 防禦",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "增加 24 火焰傷害",
        Index: 3
      },
      {
        PropertyString: "+20 法力",
        Index: 4
      },
      {
        PropertyString: "火焰抗性 +12%",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 7",
        Index: 2
      },
      {
        PropertyString: "攻擊者反傷 +12",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Infernal Tools",
    Name: "煉獄器具 (Infernal Tools)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Infernal Tools",
        SetPropertiesString: [
          "+2 防禦 （依角色等級而定） （2 件）"
        ],
        Name: "煉獄頭骨 (Infernal Cranium)",
        Index: "Infernal Cranium",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 7,
        RequiredLevel: 5,
        Code: "cap",
        Properties: [
          {
            PropertyString: "所有抗性 +10%",
            Index: 0
          },
          {
            PropertyString: "+20% 受到的傷害轉為法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "18-28",
          EquipmentType: 0,
          Name: "便帽 (Cap)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 1,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Wand",
        "Set": "Infernal Tools",
        SetPropertiesString: [
          "+2.5 to Attack Rating （依角色等級而定） （2 件）"
        ],
        Name: "煉獄火炬 (Infernal Torch)",
        Index: "Infernal Torch",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 7,
        RequiredLevel: 5,
        Code: "gwn",
        Properties: [
          {
            PropertyString: "+1 死靈法師技能等級",
            Index: 1
          },
          {
            PropertyString: "+8 最小傷害",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "13 to 11"
            }
          ],
          EquipmentType: 1,
          Name: "陰森魔杖 (Grim Wand)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 26,
          Type: {
            Name: "Wand",
            Index: "Wand",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Infernal Tools",
        SetPropertiesString: [
          "毒素抗性 +25% （2 件）",
          "冰凍時間減半 （3 件）"
        ],
        Name: "煉獄符印 (Infernal Sign)",
        Index: "Infernal Sign",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 7,
        RequiredLevel: 5,
        Code: "tbl",
        Properties: [
          {
            PropertyString: "+25 防禦",
            Index: 0
          },
          {
            PropertyString: "+20 生命",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "26-36",
          EquipmentType: 0,
          Name: "厚腰帶 (Heavy Belt)",
          RequiredStrength: 45,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 20,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+8 毒素傷害，時效 3 秒",
        Index: 0
      },
      {
        PropertyString: "+10 法力",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 死靈法師技能等級",
        Index: 1
      },
      {
        PropertyString: "+20% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +6% 法力",
        Index: 3
      },
      {
        PropertyString: "+20% 機率造成開放傷口",
        Index: 2
      },
      {
        PropertyString: "法力上限 +20%",
        Index: 4
      },
      {
        PropertyString: "無法冰凍",
        Index: 5
      }
    ],
    Level: 1
  },
  {
    Index: "Berserker's Arsenal",
    Name: "狂戰士的武裝 (Berserker's Arsenal)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Berserker's Arsenal",
        SetPropertiesString: [
          "+2 準確率 （依角色等級而定） （2 件）"
        ],
        Name: "狂戰士頭盔 (Berserker's Headgear)",
        Index: "Berserker's Headgear",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 5,
        RequiredLevel: 3,
        Code: "hlm",
        Properties: [
          {
            PropertyString: "+15 防禦",
            Index: 0
          },
          {
            PropertyString: "火焰抗性 +25%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "30",
          EquipmentType: 0,
          Name: "頭盔 (Helm)",
          RequiredStrength: 26,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 11,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Berserker's Arsenal",
        SetPropertiesString: [
          "+3 防禦 （依角色等級而定） （2 件）"
        ],
        Name: "狂戰士鎖子甲 (Berserker's Hauberk)",
        Index: "Berserker's Hauberk",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 5,
        RequiredLevel: 3,
        Code: "spl",
        Properties: [
          {
            PropertyString: "+1 野蠻人技能等級",
            Index: 1
          },
          {
            PropertyString: "魔法傷害降低 2",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "90",
          EquipmentType: 0,
          Name: "板甲 (Splint Mail)",
          RequiredStrength: 51,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 20,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Axe",
        "Set": "Berserker's Arsenal",
        SetPropertiesString: [
          "+50% 傷害強化 （2 件）"
        ],
        Name: "狂戰士手斧 (Berserker's Hatchet)",
        Index: "Berserker's Hatchet",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 5,
        RequiredLevel: 3,
        Code: "2ax",
        Properties: [
          {
            PropertyString: "+30% 準確率加成",
            Index: 0
          },
          {
            PropertyString: "擊中竊取 +5% 法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "5 to 13"
            }
          ],
          EquipmentType: 1,
          Name: "雙刃斧 (Double Axe)",
          RequiredStrength: 43,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 13,
          Type: {
            Name: "Axe",
            Index: "Axe",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 生命",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "增加 16-32 毒素傷害",
        Index: 1
      },
      {
        PropertyString: "+75 防禦",
        Index: 4
      },
      {
        PropertyString: "中毒的時效縮短 75%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Death's Disguise",
    Name: "死亡的偽裝 (Death's Disguise)",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "Death's Disguise",
        SetPropertiesString: [
          "攻擊速度 +30% （2 件）"
        ],
        Name: "死亡之手 (Death's Hand)",
        Index: "Death's Hand",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 8,
        RequiredLevel: 6,
        Code: "lgl",
        Properties: [
          {
            PropertyString: "毒素抗性 +50%",
            Index: 0
          },
          {
            PropertyString: "中毒的時效縮短 75%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "2",
          EquipmentType: 0,
          Name: "皮革手套 (Leather Gloves)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 3,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Death's Disguise",
        SetPropertiesString: [
          "所有抗性 +15% （2 件）"
        ],
        Name: "死亡之護 (Death's Guard)",
        Index: "Death's Guard",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 8,
        RequiredLevel: 6,
        Code: "lbl",
        Properties: [
          {
            PropertyString: "+20 防禦",
            Index: 0
          },
          {
            PropertyString: "無法冰凍",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "2",
          EquipmentType: 0,
          Name: "束帶 (Sash)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 3,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Death's Disguise",
        SetPropertiesString: [
          "增加 25-75 寒冰傷害 （2 件）"
        ],
        Name: "死亡之觸 (Death's Touch)",
        Index: "Death's Touch",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 8,
        RequiredLevel: 6,
        Code: "wsd",
        Properties: [
          {
            PropertyString: "+25% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "擊中竊取 4% 生命",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "10 to 25"
            }
          ],
          EquipmentType: 1,
          Name: "征戰劍 (War Sword)",
          RequiredStrength: 71,
          RequiredDexterity: 45,
          Durability: 250,
          ItemLevel: 27,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "擊中竊取 8% 生命",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+10 最小傷害",
        Index: 1
      },
      {
        PropertyString: "+40% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Angelic Raiment",
    Name: "天使的衣裝 (Angelic Raiment)",
    SetItems: [
      {
        Type: "Sword",
        "Set": "Angelic Raiment",
        SetPropertiesString: [
          "攻擊速度 +30% （3 件）",
          "+75% 傷害強化 （2 件）"
        ],
        Name: "天使的鐮刀 (Angelic Sickle)",
        Index: "Angelic Sickle",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 17,
        RequiredLevel: 12,
        Code: "sbr",
        Properties: [
          {
            PropertyString: "+75 準確率",
            Index: 0
          },
          {
            PropertyString: "+250% 對不死怪物的傷害",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "3 to 8"
            }
          ],
          EquipmentType: 1,
          Name: "軍刀 (Sabre)",
          RequiredStrength: 25,
          RequiredDexterity: 25,
          Durability: 250,
          ItemLevel: 8,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Angelic Raiment",
        SetPropertiesString: [
          "+150 防禦 （2 件）",
          "火焰抗性 +50% （3 件）"
        ],
        Name: "天使的披風 (Angelic Mantle)",
        Index: "Angelic Mantle",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 17,
        RequiredLevel: 12,
        Code: "rng",
        Properties: [
          {
            PropertyString: "+40% 防禦強化",
            Index: 1
          },
          {
            PropertyString: "物理傷害降低 3",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "64",
          EquipmentType: 0,
          Name: "環甲 (Ring Mail)",
          RequiredStrength: 36,
          RequiredDexterity: 0,
          Durability: 26,
          ItemLevel: 11,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Angelic Raiment",
        SetPropertiesString: [
          "+3 準確率 （依角色等級而定） （2 件）",
          "尋獲魔法物品機率提高 +50% （3 件）"
        ],
        Name: "天使的光暈 (Angelic Halo)",
        Index: "Angelic Halo",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 17,
        RequiredLevel: 12,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+20 生命",
            Index: 1
          },
          {
            PropertyString: "生命回復 +6",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Angelic Raiment",
        SetPropertiesString: [
          "+1 所有技能 （3 件）",
          "+75 生命 （2 件）"
        ],
        Name: "天使的翅膀 (Angelic Wings)",
        Index: "Angelic Wings",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 17,
        RequiredLevel: 12,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+20% 受到的傷害轉為法力",
            Index: 1
          },
          {
            PropertyString: "照亮範圍 +3",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "+50 法力",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "法力恢復 8%",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 0
      },
      {
        PropertyString: "冰凍時間減半",
        Index: 1
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +40%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Arctic Gear",
    Name: "北極裝備 (Arctic Gear)",
    SetItems: [
      {
        Type: "Bow",
        "Set": "Arctic Gear",
        SetPropertiesString: [
          "+2 準確率 （依角色等級而定） （2 件）",
          "增加 20-30 寒冰傷害 （3 件）"
        ],
        Name: "北極號角 (Arctic Horn)",
        Index: "Arctic Horn",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 3,
        RequiredLevel: 2,
        Code: "swb",
        Properties: [
          {
            PropertyString: "+50% 傷害強化",
            Index: 1
          },
          {
            PropertyString: "+20% 準確率加成",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "9 to 21"
            }
          ],
          EquipmentType: 1,
          Name: "征戰短弓 (Short War Bow)",
          RequiredStrength: 35,
          RequiredDexterity: 55,
          Durability: 0,
          ItemLevel: 27,
          Type: {
            Name: "Bow",
            Index: "Bow",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Arctic Gear",
        SetPropertiesString: [
          "+3 防禦 （依角色等級而定） （2 件）",
          "冰寒抗性 +15% （3 件）"
        ],
        Name: "北極毛皮 (Arctic Furs)",
        Index: "Arctic Furs",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 3,
        RequiredLevel: 2,
        Code: "qui",
        Properties: [
          {
            PropertyString: "+275-325% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +10%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "8",
          EquipmentType: 0,
          Name: "棉布甲 (Quilted Armor)",
          RequiredStrength: 12,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 1,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Arctic Gear",
        SetPropertiesString: [
          "冰寒抗性 +10% （3 件）",
          "尋獲魔法物品機率提高 +40% （2 件）"
        ],
        Name: "北極捆索 (Arctic Binding)",
        Index: "Arctic Binding",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 3,
        RequiredLevel: 2,
        Code: "vbl",
        Properties: [
          {
            PropertyString: "+30 防禦",
            Index: 1
          },
          {
            PropertyString: "冰寒抗性 +40%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "3",
          EquipmentType: 0,
          Name: "輕腰帶 (Light Belt)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 7,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Arctic Gear",
        SetPropertiesString: [
          "+50 準確率 （2 件）",
          "+10 敏捷 （3 件）"
        ],
        Name: "北極手套 (Arctic Mitts)",
        Index: "Arctic Mitts",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 3,
        RequiredLevel: 2,
        Code: "tgl",
        Properties: [
          {
            PropertyString: "攻擊速度 +10%",
            Index: 1
          },
          {
            PropertyString: "+20 生命",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "9",
          EquipmentType: 0,
          Name: "輕型護手 (Light Gauntlets)",
          RequiredStrength: 45,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 20,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+5 力量",
        Index: 0
      },
      {
        PropertyString: "+50 生命",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "增加 2 寒冰傷害 （依角色等級而定）",
        Index: 0
      },
      {
        PropertyString: "無法冰凍",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Arcanna's Tricks",
    Name: "阿卡娜的詭計 (Arcanna's Tricks)",
    SetItems: [
      {
        Type: "Amulet",
        "Set": "Arcanna's Tricks",
        SetPropertiesString: [
          "火焰抗性 +20% （3 件）",
          "尋獲魔法物品機率提高 +50% （2 件）"
        ],
        Name: "阿卡娜的符印 (Arcanna's Sign)",
        Index: "Arcanna's Sign",
        Enabled: true,
        Rarity: 1,
        ItemLevel: 20,
        RequiredLevel: 15,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+15 法力",
            Index: 0
          },
          {
            PropertyString: "法力恢復 20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Staff",
        "Set": "Arcanna's Tricks",
        SetPropertiesString: [
          "+50 法力 （2 件）",
          "法力恢復 5% （3 件）"
        ],
        Name: "阿卡娜的死亡之杖 (Arcanna's Deathwand)",
        Index: "Arcanna's Deathwand",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 15,
        Code: "wst",
        Properties: [
          {
            PropertyString: "+1 魔法使技能等級",
            Index: 0
          },
          {
            PropertyString: "+25% 致命打擊",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "12 to 28"
            }
          ],
          EquipmentType: 1,
          Name: "征戰法杖 (War Staff)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 24,
          Type: {
            Name: "Staff",
            Index: "Staff",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Arcanna's Tricks",
        SetPropertiesString: [
          "+3 防禦 （依角色等級而定） （2 件）",
          "電擊抗性 +15% （3 件）"
        ],
        Name: "阿卡娜的頭 (Arcanna's Head)",
        Index: "Arcanna's Head",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 15,
        Code: "skp",
        Properties: [
          {
            PropertyString: "生命回復 +4",
            Index: 0
          },
          {
            PropertyString: "攻擊者反傷 +2",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "8",
          EquipmentType: 0,
          Name: "顱帽 (Skull Cap)",
          RequiredStrength: 15,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 5,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Arcanna's Tricks",
        SetPropertiesString: [
          "+100 防禦 （2 件）",
          "+10 能量 （3 件）"
        ],
        Name: "阿卡娜的血肉 (Arcanna's Flesh)",
        Index: "Arcanna's Flesh",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 15,
        Code: "ltp",
        Properties: [
          {
            PropertyString: "物理傷害降低 3",
            Index: 1
          },
          {
            PropertyString: "照亮範圍 +2",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "159-186",
          EquipmentType: 0,
          Name: "輕型鎧甲 (Light Plate)",
          RequiredStrength: 41,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 35,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 法力",
        Index: 0
      },
      {
        PropertyString: "+50 生命",
        Index: 2
      },
      {
        PropertyString: "法力恢復 12%",
        Index: 3
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 3
      },
      {
        PropertyString: "+20% 施法速度",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +5% 法力",
        Index: 1
      },
      {
        PropertyString: "+25 法力",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Natalya's Odium",
    Name: "娜塔亞的非難 (Natalya's Odium)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Natalya's Odium",
        SetPropertiesString: [],
        Name: "娜塔亞的圖騰 (Natalya's Totem)",
        Index: "Natalya's Totem",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 22,
        RequiredLevel: 59,
        Code: "xh9",
        Properties: [
          {
            PropertyString: "+135-175 防禦",
            Index: 0
          },
          {
            PropertyString: "+10-20 力量",
            Index: 2
          },
          {
            PropertyString: "+20-30 敏捷",
            Index: 1
          },
          {
            PropertyString: "所有抗性 +10-20%",
            Index: 3
          },
          {
            PropertyString: "魔法傷害降低 3",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129",
          EquipmentType: 0,
          Name: "陰森頭盔 (Grim Helm)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 50,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Hand to Hand 2",
        "Set": "Natalya's Odium",
        SetPropertiesString: [],
        Name: "娜塔亞的印記 (Natalya's Mark)",
        Index: "Natalya's Mark",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 22,
        RequiredLevel: 79,
        Code: "7qr",
        Properties: [
          {
            PropertyString: "攻擊速度 +40%",
            Index: 0
          },
          {
            PropertyString: "+200% 傷害強化",
            Index: 1
          },
          {
            PropertyString: "無視目標防禦",
            Index: 2
          },
          {
            PropertyString: "+200% 對惡魔的傷害",
            Index: 6
          },
          {
            PropertyString: "+200% 對不死怪物的傷害",
            Index: 5
          },
          {
            PropertyString: "增加 12-17 火焰傷害",
            Index: 4
          },
          {
            PropertyString: "增加 50 寒冰傷害",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "120 to 153"
            }
          ],
          EquipmentType: 1,
          Name: "穿擊剪刃 (Scissors Suwayyah)",
          RequiredStrength: 118,
          RequiredDexterity: 118,
          Durability: 250,
          ItemLevel: 85,
          Type: {
            Name: "Hand to Hand 2",
            Index: "Hand to Hand 2",
            Class: "ass"
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Natalya's Odium",
        SetPropertiesString: [],
        Name: "娜塔亞的影子 (Natalya's Shadow)",
        Index: "Natalya's Shadow",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 22,
        RequiredLevel: 73,
        Code: "ucl",
        Properties: [
          {
            PropertyString: "+2 暗影修行 （只限刺客）",
            Index: 2
          },
          {
            PropertyString: "+150-225 防禦",
            Index: 0
          },
          {
            PropertyString: "+1 生命 （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "毒素抗性 +25%",
            Index: 4
          },
          {
            PropertyString: "中毒的時效縮短 75%",
            Index: 3
          },
          {
            PropertyString: "鑲孔 (1-3)",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1075-1173",
          EquipmentType: 0,
          Name: "綴鱗戰甲 (Loricated Mail)",
          RequiredStrength: 149,
          RequiredDexterity: 0,
          Durability: 36,
          ItemLevel: 73,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Natalya's Odium",
        SetPropertiesString: [],
        Name: "娜塔亞的靈魂 (Natalya's Soul)",
        Index: "Natalya's Soul",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 22,
        RequiredLevel: 25,
        Code: "xmb",
        Properties: [
          {
            PropertyString: "+40% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "+75-125 防禦",
            Index: 0
          },
          {
            PropertyString: "+0.25 Heal Stamina Plus （依角色等級而定）",
            Index: 2
          },
          {
            PropertyString: "冰寒抗性 +15-25%",
            Index: 4
          },
          {
            PropertyString: "電擊抗性 +15-25%",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "23 to 52",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "37",
          EquipmentType: 0,
          Name: "鐵網靴 (Mesh Boots)",
          RequiredStrength: 65,
          RequiredDexterity: 0,
          Durability: 66,
          ItemLevel: 43,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "魔法傷害降低 15",
        Index: 0
      },
      {
        PropertyString: "+200 防禦",
        Index: 2
      },
      {
        PropertyString: "毒素抗性 +20%",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 刺客技能等級",
        Index: 1
      },
      {
        PropertyString: "擊中竊取 +14% 法力",
        Index: 4
      },
      {
        PropertyString: "擊中竊取 14% 生命",
        Index: 3
      },
      {
        PropertyString: "+150 防禦",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 +30%",
        Index: 5
      },
      {
        PropertyString: "You feel incorporeal...",
        Index: 6
      }
    ],
    Level: 1
  },
  {
    Index: "Aldur's Watchtower",
    Name: "艾爾多的守衛 (Aldur's Watchtower)",
    SetItems: [
      {
        Type: "Pelt",
        "Set": "Aldur's Watchtower",
        SetPropertiesString: [
          "+15 能量 （2 件）",
          "+15 能量 （3 件）",
          "+15 能量 （4 件）"
        ],
        Name: "艾爾多的冷酷凝視 (Aldur's Stony Gaze)",
        Index: "Aldur's Stony Gaze",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 29,
        RequiredLevel: 36,
        Code: "dr8",
        Properties: [
          {
            PropertyString: "+25% 打擊恢復",
            Index: 3
          },
          {
            PropertyString: "+90 防禦",
            Index: 0
          },
          {
            PropertyString: "法力恢復 17%",
            Index: 1
          },
          {
            PropertyString: "冰寒抗性 +40-50%",
            Index: 4
          },
          {
            PropertyString: "照亮範圍 +5",
            Index: 2
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "157",
          EquipmentType: 0,
          Name: "獵人面罩 (Hunter's Guise)",
          RequiredStrength: 56,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 46,
          Type: {
            Name: "Pelt",
            Index: "Pelt",
            Class: "dru"
          },
          RequiredClass: "Druid"
        }
      },
      {
        Type: "Armor",
        "Set": "Aldur's Watchtower",
        SetPropertiesString: [
          "+15 體能 （2 件）",
          "+15 體能 （3 件）",
          "+15 體能 （4 件）"
        ],
        Name: "艾爾多的欺暪 (Aldur's Deception)",
        Index: "Aldur's Deception",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 29,
        RequiredLevel: 76,
        Code: "uul",
        Properties: [
          {
            PropertyString: "+1 變形技能 （只限德魯伊）",
            Index: 1
          },
          {
            PropertyString: "+1 元素技能 （只限德魯伊）",
            Index: 6
          },
          {
            PropertyString: "+300 防禦",
            Index: 0
          },
          {
            PropertyString: "+20 力量",
            Index: 2
          },
          {
            PropertyString: "+15 敏捷",
            Index: 3
          },
          {
            PropertyString: "電擊抗性 +40-50%",
            Index: 4
          },
          {
            PropertyString: "需求 -50%",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1072-1162",
          EquipmentType: 0,
          Name: "暗影鎧甲 (Shadow Plate)",
          RequiredStrength: 230,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 83,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Mace",
        "Set": "Aldur's Watchtower",
        SetPropertiesString: [
          "+15 力量 （2 件）",
          "+15 力量 （3 件）",
          "+15 力量 （4 件）"
        ],
        Name: "艾爾多的律動 (Aldur's Rhythm)",
        Index: "Aldur's Rhythm",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 29,
        RequiredLevel: 42,
        Code: "9mt",
        Properties: [
          {
            PropertyString: "攻擊速度 +30%",
            Index: 3
          },
          {
            PropertyString: "增加 40-62 傷害",
            Index: 0
          },
          {
            PropertyString: "+200% 對惡魔的傷害",
            Index: 4
          },
          {
            PropertyString: "增加 50-75 電擊傷害",
            Index: 1
          },
          {
            PropertyString: "擊中竊取 +5% 法力",
            Index: 5
          },
          {
            PropertyString: "擊中竊取 10% 生命",
            Index: 2
          },
          {
            PropertyString: "鑲孔 (2-5)",
            Index: 6
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "60 to 93"
            }
          ],
          EquipmentType: 1,
          Name: "鋸齒釘頭鎚 (Jagged Star)",
          RequiredStrength: 74,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 39,
          Type: {
            Name: "Mace",
            Index: "Mace",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Aldur's Watchtower",
        SetPropertiesString: [
          "+15 敏捷 （2 件）",
          "+15 敏捷 （3 件）",
          "+15 敏捷 （4 件）"
        ],
        Name: "艾爾多的進擊 (Aldur's Advance)",
        Index: "Aldur's Advance",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 29,
        RequiredLevel: 45,
        Code: "xtb",
        Properties: [
          {
            PropertyString: "無法破壞",
            Index: 0
          },
          {
            PropertyString: "+40% 跑步 / 行走速度",
            Index: 4
          },
          {
            PropertyString: "+50 生命",
            Index: 2
          },
          {
            PropertyString: "+32 Heal Stamina Plus",
            Index: 1
          },
          {
            PropertyString: "火焰抗性 +40-50%",
            Index: 6
          },
          {
            PropertyString: "+10% 受到的傷害轉為法力",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "37 to 64",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "90-100",
          EquipmentType: 0,
          Name: "戰鬥靴 (Battle Boots)",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 49,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+150% 準確率加成",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 2
      },
      {
        PropertyString: "擊中竊取 10% 生命",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 德魯伊技能等級",
        Index: 1
      },
      {
        PropertyString: "+350% 傷害強化",
        Index: 5
      },
      {
        PropertyString: "擊中竊取 +10% 法力",
        Index: 3
      },
      {
        PropertyString: "+150 防禦",
        Index: 2
      },
      {
        PropertyString: "+150 法力",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Immortal King",
    Name: "不朽之王 (Immortal King)",
    SetItems: [
      {
        Type: "Primal Helm",
        "Set": "Immortal King",
        SetPropertiesString: [],
        Name: "不朽之王的意志 (Immortal King's Will)",
        Index: "Immortal King's Will",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 37,
        RequiredLevel: 47,
        Code: "ba5",
        Properties: [
          {
            PropertyString: "+2 戰吼 （只限野蠻人）",
            Index: 2
          },
          {
            PropertyString: "+125 防禦",
            Index: 0
          },
          {
            PropertyString: "怪物金幣掉落量提高 +37%",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +25-40%",
            Index: 4
          },
          {
            PropertyString: "照亮範圍 +4",
            Index: 3
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "160",
          EquipmentType: 0,
          Name: "復仇者護盔 (Avenger Guard)",
          RequiredStrength: 65,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 24,
          Type: {
            Name: "Primal Helm",
            Index: "Primal Helm",
            Class: "bar"
          },
          RequiredClass: "Barbarian"
        }
      },
      {
        Type: "Armor",
        "Set": "Immortal King",
        SetPropertiesString: [
          "+25% 打擊恢復 （2 件）",
          "+50% 防禦強化 （6 件）",
          "冰寒抗性 +40% （3 件）",
          "電擊抗性 +40% （5 件）",
          "火焰抗性 +40% （4 件）"
        ],
        Name: "不朽之王的靈魂牢籠 (Immortal King's Soul Cage)",
        Index: "Immortal King's Soul Cage",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 37,
        RequiredLevel: 76,
        Code: "uar",
        Properties: [
          {
            PropertyString: "被擊中時有 5% 機率施展等級 5 附魔",
            Index: 1
          },
          {
            PropertyString: "+2 戰鬥技能 （只限野蠻人）",
            Index: 2
          },
          {
            PropertyString: "+400 防禦",
            Index: 0
          },
          {
            PropertyString: "毒素抗性 +50%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1171-1415",
          EquipmentType: 0,
          Name: "神聖戰甲 (Sacred Armor)",
          RequiredStrength: 232,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 85,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Immortal King",
        SetPropertiesString: [
          "+2 精通與投擲技能 （只限野蠻人） （6 件）",
          "+25% 打擊恢復 （3 件）",
          "+100% 防禦強化 （4 件）",
          "+105 防禦 （2 件）",
          "物理傷害降低 +20% （5 件）"
        ],
        Name: "不朽之王的扈從 (Immortal King's Detail)",
        Index: "Immortal King's Detail",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 37,
        RequiredLevel: 29,
        Code: "zhb",
        Properties: [
          {
            PropertyString: "+36 防禦",
            Index: 0
          },
          {
            PropertyString: "+25 力量",
            Index: 3
          },
          {
            PropertyString: "電擊抗性 +31%",
            Index: 2
          },
          {
            PropertyString: "火焰抗性 +28%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "41",
          EquipmentType: 0,
          Name: "征戰腰帶 (War Belt)",
          RequiredStrength: 110,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 54,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Immortal King",
        SetPropertiesString: [
          "攻擊速度 +25% （2 件）",
          "擊中竊取 +10% 法力 （5 件）",
          "擊中竊取 10% 生命 （4 件）",
          "凍結目標 +2 （6 件）",
          "+120 防禦 （3 件）"
        ],
        Name: "不朽之王的熔爐 (Immortal King's Forge)",
        Index: "Immortal King's Forge",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 37,
        RequiredLevel: 30,
        Code: "xhg",
        Properties: [
          {
            PropertyString: "被擊中時有 12% 機率施展等級 4 電能彈",
            Index: 3
          },
          {
            PropertyString: "+65 防禦",
            Index: 0
          },
          {
            PropertyString: "+20 力量",
            Index: 1
          },
          {
            PropertyString: "+20 敏捷",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "121-132",
          EquipmentType: 0,
          Name: "征戰護手 (War Gauntlets)",
          RequiredStrength: 110,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 54,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Immortal King",
        SetPropertiesString: [
          "+2 戰鬥技能 （只限野蠻人） （3 件）",
          "+160 防禦 （4 件）",
          "冰凍時間減半 （5 件）",
          "尋獲魔法物品機率提高 +25% （2 件）"
        ],
        Name: "不朽之王之柱 (Immortal King's Pillar)",
        Index: "Immortal King's Pillar",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 37,
        RequiredLevel: 31,
        Code: "xhb",
        Properties: [
          {
            PropertyString: "+40% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "+110 準確率",
            Index: 2
          },
          {
            PropertyString: "+75 防禦",
            Index: 0
          },
          {
            PropertyString: "+44 生命",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "39 to 80",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "88-99",
          EquipmentType: 0,
          Name: "征戰靴 (War Boots)",
          RequiredStrength: 125,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 54,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Hammer",
        "Set": "Immortal King",
        SetPropertiesString: [
          "增加 250-361 魔法傷害 （6 件）",
          "增加 211-397 火焰傷害 （2 件）",
          "增加 7-477 電擊傷害 （3 件）",
          "增加 127-364 寒冰傷害 （4 件）",
          "+205 毒素傷害，時效 6 秒 （5 件）"
        ],
        Name: "不朽之王的碎魂者 (Immortal King's Stone Crusher)",
        Index: "Immortal King's Stone Crusher",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 37,
        RequiredLevel: 76,
        Code: "7m7",
        Properties: [
          {
            PropertyString: "無法破壞",
            Index: 0
          },
          {
            PropertyString: "攻擊速度 +40%",
            Index: 1
          },
          {
            PropertyString: "+200% 傷害強化",
            Index: 5
          },
          {
            PropertyString: "+200% 對惡魔的傷害",
            Index: 2
          },
          {
            PropertyString: "+200% 對不死怪物的傷害",
            Index: 3
          },
          {
            PropertyString: "+35-40% 概率造成粉碎打擊",
            Index: 4
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 6
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "231 to 318"
            }
          ],
          EquipmentType: 1,
          Name: "巨魔重鎚 (Ogre Maul)",
          RequiredStrength: 225,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 69,
          Type: {
            Name: "Hammer",
            Index: "Hammer",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 準確率",
        Index: 0
      },
      {
        PropertyString: "+75 準確率",
        Index: 2
      },
      {
        PropertyString: "+125 準確率",
        Index: 4
      },
      {
        PropertyString: "+200 準確率",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 野蠻人技能等級",
        Index: 1
      },
      {
        PropertyString: "+150 生命",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 0
      },
      {
        PropertyString: "魔法傷害降低 10",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Tal Rasha's Wrappings",
    Name: "塔拉夏的外袍 (Tal Rasha's Wrappings)",
    SetItems: [
      {
        Type: "Belt",
        "Set": "Tal Rasha's Wrappings",
        SetPropertiesString: [
          "+10% 施法速度 （3 件）",
          "+60 防禦 （2 件）"
        ],
        Name: "塔拉夏的精織腰布 (Tal Rasha's Fine-Spun Cloth)",
        Index: "Tal Rasha's Fine-Spun Cloth",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 26,
        RequiredLevel: 53,
        Code: "zmb",
        Properties: [
          {
            PropertyString: "+20 敏捷",
            Index: 2
          },
          {
            PropertyString: "+30 法力",
            Index: 1
          },
          {
            PropertyString: "+37% 受到的傷害轉為法力",
            Index: 3
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +10-15%",
            Index: 4
          },
          {
            PropertyString: "需求 -20%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "35",
          EquipmentType: 0,
          Name: "鐵網腰帶 (Mesh Belt)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 43,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Tal Rasha's Wrappings",
        SetPropertiesString: [
          "+10% 施法速度 （4 件）"
        ],
        Name: "塔拉夏的判決 (Tal Rasha's Adjudication)",
        Index: "Tal Rasha's Adjudication",
        Enabled: true,
        Rarity: 1,
        ItemLevel: 26,
        RequiredLevel: 67,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+2 魔法使技能等級",
            Index: 1
          },
          {
            PropertyString: "增加 3-32 電擊傷害",
            Index: 3
          },
          {
            PropertyString: "+50 生命",
            Index: 2
          },
          {
            PropertyString: "+42 法力",
            Index: 4
          },
          {
            PropertyString: "電擊抗性 +33%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Orb",
        "Set": "Tal Rasha's Wrappings",
        SetPropertiesString: [
          "+1 魔法使技能等級 （2 件）",
          "敵人火焰抗性 -15% （3 件）",
          "敵人電擊抗性 -15% （4 件）",
          "+15% 寒冰技能傷害 （5 件）"
        ],
        Name: "塔拉夏的警惕之眼 (Tal Rasha's Lidless Eye)",
        Index: "Tal Rasha's Lidless Eye",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 26,
        RequiredLevel: 65,
        Code: "oba",
        Properties: [
          {
            PropertyString: "+20% 施法速度",
            Index: 3
          },
          {
            PropertyString: "+1-2 火焰專精（只限魔法使）",
            Index: 4
          },
          {
            PropertyString: "+1-2 閃電專精（只限魔法使）",
            Index: 5
          },
          {
            PropertyString: "+1-2 冰寒專精（只限魔法使）",
            Index: 6
          },
          {
            PropertyString: "+10 能量",
            Index: 2
          },
          {
            PropertyString: "+57 生命",
            Index: 0
          },
          {
            PropertyString: "+77 法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "18 to 42"
            }
          ],
          EquipmentType: 1,
          Name: "渦流水晶 (Swirling Crystal)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 50,
          Type: {
            Name: "Orb",
            Index: "Orb",
            Class: "sor"
          },
          RequiredClass: "Sorceress"
        }
      },
      {
        Type: "Armor",
        "Set": "Tal Rasha's Wrappings",
        SetPropertiesString: [
          "+10% 施法速度 （2 件）"
        ],
        Name: "塔拉夏的守護 (Tal Rasha's Guardianship)",
        Index: "Tal Rasha's Guardianship",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 26,
        RequiredLevel: 71,
        Code: "uth",
        Properties: [
          {
            PropertyString: "+400 防禦",
            Index: 6
          },
          {
            PropertyString: "冰寒抗性 +40%",
            Index: 3
          },
          {
            PropertyString: "電擊抗性 +40%",
            Index: 5
          },
          {
            PropertyString: "火焰抗性 +40%",
            Index: 4
          },
          {
            PropertyString: "魔法傷害降低 15",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +88%",
            Index: 2
          },
          {
            PropertyString: "需求 -60%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "433",
          EquipmentType: 0,
          Name: "漆護鎧甲 (Lacquered Plate)",
          RequiredStrength: 208,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 82,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Tal Rasha's Wrappings",
        SetPropertiesString: [],
        Name: "塔拉夏的赫拉迪姆之冠 (Tal Rasha's Horadric Crest)",
        Index: "Tal Rasha's Horadric Crest",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 26,
        RequiredLevel: 66,
        Code: "xsk",
        Properties: [
          {
            PropertyString: "擊中竊取 +10% 法力",
            Index: 5
          },
          {
            PropertyString: "擊中竊取 10% 生命",
            Index: 4
          },
          {
            PropertyString: "+45 防禦",
            Index: 2
          },
          {
            PropertyString: "+60 生命",
            Index: 1
          },
          {
            PropertyString: "+30 法力",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +15%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129-154",
          EquipmentType: 0,
          Name: "死亡面具 (Death Mask)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 48,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "生命回復 +10",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +65%",
        Index: 2
      },
      {
        PropertyString: "+25% 打擊恢復",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 魔法使技能等級",
        Index: 1
      },
      {
        PropertyString: "+150 防禦",
        Index: 2
      },
      {
        PropertyString: "+50 對遠程防禦",
        Index: 4
      },
      {
        PropertyString: "+150 生命",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Griswold's Legacy",
    Name: "格里斯瓦德的傳奇 (Griswold's Legacy)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Griswold's Legacy",
        SetPropertiesString: [
          "+2 防禦靈氣 （只限聖騎士） （2 件）"
        ],
        Name: "格里斯瓦德的勇氣 (Griswold's Valor)",
        Index: "Griswold's Valor",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 44,
        RequiredLevel: 69,
        Code: "urn",
        Properties: [
          {
            PropertyString: "+50-75% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +5%",
            Index: 5
          },
          {
            PropertyString: "寒冰傷害吸引 +0.25 （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +20-30%",
            Index: 4
          },
          {
            PropertyString: "需求 -40%",
            Index: 3
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "263-308",
          EquipmentType: 0,
          Name: "日冕之冠 (Corona)",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 85,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Griswold's Legacy",
        SetPropertiesString: [],
        Name: "格里斯瓦德之心 (Griswold's Heart)",
        Index: "Griswold's Heart",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 44,
        RequiredLevel: 45,
        Code: "xar",
        Properties: [
          {
            PropertyString: "+2 攻擊靈氣 （只限聖騎士）",
            Index: 1
          },
          {
            PropertyString: "+500 防禦",
            Index: 0
          },
          {
            PropertyString: "+20 力量",
            Index: 3
          },
          {
            PropertyString: "需求 -40%",
            Index: 4
          },
          {
            PropertyString: "鑲孔 (3)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1045-1170",
          EquipmentType: 0,
          Name: "華麗戰甲 (Ornate Plate)",
          RequiredStrength: 170,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 64,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Scepter",
        "Set": "Griswold's Legacy",
        SetPropertiesString: [
          "+2 戰鬥技能 （只限聖騎士） （2 件）",
          "增加 10-20 傷害 （3 件）",
          "增加 10-20 傷害 （4 件）"
        ],
        Name: "格里斯瓦德的救贖 (Griswold's Redemption)",
        Index: "Griswold's Redemption",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 44,
        RequiredLevel: 53,
        Code: "7ws",
        Properties: [
          {
            PropertyString: "攻擊速度 +40%",
            Index: 1
          },
          {
            PropertyString: "+200-240% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+200% 對不死怪物的傷害",
            Index: 2
          },
          {
            PropertyString: "需求 -20%",
            Index: 3
          },
          {
            PropertyString: "鑲孔 (3-4)",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(111-125) to (129-146)"
            }
          ],
          EquipmentType: 1,
          Name: "神使權杖 (Caduceus)",
          RequiredStrength: 97,
          RequiredDexterity: 70,
          Durability: 250,
          ItemLevel: 85,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Auric Shields",
        "Set": "Griswold's Legacy",
        SetPropertiesString: [],
        Name: "格里斯瓦德的榮耀 (Griswold's Honor)",
        Index: "Griswold's Honor",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 44,
        RequiredLevel: 68,
        Code: "paf",
        Properties: [
          {
            PropertyString: "+65% 格擋速度",
            Index: 2
          },
          {
            PropertyString: "格擋機率提高 +20%",
            Index: 3
          },
          {
            PropertyString: "+108 防禦",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +45%",
            Index: 4
          },
          {
            PropertyString: "鑲孔 (3)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "5 to 87",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "290",
          EquipmentType: 0,
          Name: "渦旋盾 (Vortex Shield)",
          RequiredStrength: 148,
          RequiredDexterity: 0,
          Durability: 90,
          ItemLevel: 85,
          Type: {
            Name: "Auric Shields",
            Index: "Auric Shields",
            Class: "pal"
          },
          RequiredClass: "Paladin"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20 力量",
        Index: 0
      },
      {
        PropertyString: "+30 敏捷",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 聖騎士技能等級",
        Index: 1
      },
      {
        PropertyString: "+30% 打擊恢復",
        Index: 5
      },
      {
        PropertyString: "+200 準確率",
        Index: 2
      },
      {
        PropertyString: "+150 生命",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Trang-Oul's Avatar",
    Name: "塔格奧的化身 (Trang-Oul's Avatar)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Trang-Oul's Avatar",
        SetPropertiesString: [],
        Name: "塔格奧之容 (Trang-Oul's Guise)",
        Index: "Trang-Oul's Guise",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 32,
        RequiredLevel: 65,
        Code: "uh9",
        Properties: [
          {
            PropertyString: "+25% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+80-100 防禦",
            Index: 0
          },
          {
            PropertyString: "生命回復 +5",
            Index: 4
          },
          {
            PropertyString: "+150 法力",
            Index: 3
          },
          {
            PropertyString: "攻擊者反傷 +20",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "252-303",
          EquipmentType: 0,
          Name: "骸骨面罩 (Bone Visage)",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 84,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Trang-Oul's Avatar",
        SetPropertiesString: [
          "電擊抗性 +50% （3 件）",
          "物理傷害降低 +25% （5 件）"
        ],
        Name: "塔格奧之鱗 (Trang-Oul's Scales)",
        Index: "Trang-Oul's Scales",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 32,
        RequiredLevel: 49,
        Code: "xul",
        Properties: [
          {
            PropertyString: "+2 召喚技能 （只限死靈法師）",
            Index: 3
          },
          {
            PropertyString: "+40% 跑步 / 行走速度",
            Index: 4
          },
          {
            PropertyString: "+150% 防禦強化",
            Index: 5
          },
          {
            PropertyString: "+100 對遠程防禦",
            Index: 1
          },
          {
            PropertyString: "毒素抗性 +40%",
            Index: 2
          },
          {
            PropertyString: "需求 -40%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "615-715",
          EquipmentType: 0,
          Name: "混沌戰甲 (Chaos Armor)",
          RequiredStrength: 140,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 61,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Voodoo Heads",
        "Set": "Trang-Oul's Avatar",
        SetPropertiesString: [
          "敵人毒素抗性 -25% （3 件）",
          "生命回復 +15 （4 件）"
        ],
        Name: "塔格奧之翼 (Trang-Oul's Wing)",
        Index: "Trang-Oul's Wing",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 32,
        RequiredLevel: 54,
        Code: "ne9",
        Properties: [
          {
            PropertyString: "+2 毒素與骸骨技能 （只限死靈法師）",
            Index: 6
          },
          {
            PropertyString: "格擋機率提高 +30%",
            Index: 4
          },
          {
            PropertyString: "+125 防禦",
            Index: 0
          },
          {
            PropertyString: "+25 力量",
            Index: 1
          },
          {
            PropertyString: "+15 敏捷",
            Index: 2
          },
          {
            PropertyString: "火焰抗性 +38-45%",
            Index: 3
          },
          {
            PropertyString: "毒素抗性 +40%",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "175",
          EquipmentType: 0,
          Name: "領唱者首級 (Cantor Trophy)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 49,
          Type: {
            Name: "Voodoo Heads",
            Index: "Voodoo Heads",
            Class: "nec"
          },
          RequiredClass: "Necromancer"
        }
      },
      {
        Type: "Gloves",
        "Set": "Trang-Oul's Avatar",
        SetPropertiesString: [],
        Name: "塔格奧之爪 (Trang-Oul's Claws)",
        Index: "Trang-Oul's Claws",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 32,
        RequiredLevel: 45,
        Code: "xmg",
        Properties: [
          {
            PropertyString: "+2 詛咒 （只限死靈法師）",
            Index: 3
          },
          {
            PropertyString: "+20% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+30 防禦",
            Index: 0
          },
          {
            PropertyString: "冰寒抗性 +30%",
            Index: 2
          },
          {
            PropertyString: "+25% 毒素技能傷害",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "37",
          EquipmentType: 0,
          Name: "重型護腕 (Heavy Bracers)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 43,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Trang-Oul's Avatar",
        SetPropertiesString: [
          "冰寒抗性 +40% （3 件）"
        ],
        Name: "塔格奧之腹 (Trang-Oul's Girth)",
        Index: "Trang-Oul's Girth",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 32,
        RequiredLevel: 47,
        Code: "utc",
        Properties: [
          {
            PropertyString: "+75-100 防禦",
            Index: 0
          },
          {
            PropertyString: "+66 生命",
            Index: 3
          },
          {
            PropertyString: "生命回復 +5",
            Index: 2
          },
          {
            PropertyString: "+25-50 法力",
            Index: 6
          },
          {
            PropertyString: "無法冰凍",
            Index: 4
          },
          {
            PropertyString: "需求 -40%",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "126-138",
          EquipmentType: 0,
          Name: "食人妖腰帶 (Troll Belt)",
          RequiredStrength: 151,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 82,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "法力恢復 15%",
        Index: 0
      },
      {
        PropertyString: "+18 火球術",
        Index: 1
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 2
      },
      {
        PropertyString: "+13 火牆術",
        Index: 3
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 4
      },
      {
        PropertyString: "+10 隕石術",
        Index: 5
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 死靈法師技能等級",
        Index: 1
      },
      {
        PropertyString: "+3 火焰專精",
        Index: 6
      },
      {
        PropertyString: "擊中竊取 20% 生命",
        Index: 7
      },
      {
        PropertyString: "+200 防禦",
        Index: 3
      },
      {
        PropertyString: "+100 法力",
        Index: 2
      },
      {
        PropertyString: "法力恢復 15%",
        Index: 5
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "M'avina's Battle Hymn",
    Name: "馬維娜之戰鬥詩歌 (M'avina's Battle Hymn)",
    SetItems: [
      {
        Type: "Circlet",
        "Set": "M'avina's Battle Hymn",
        SetPropertiesString: [
          "+1 所有技能 （2 件）",
          "+50% 準確率加成 （3 件）",
          "所有抗性 +25% （4 件）"
        ],
        Name: "馬維娜的真實之眼 (M'avina's True Sight)",
        Index: "M'avina's True Sight",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 21,
        RequiredLevel: 59,
        Code: "ci3",
        Properties: [
          {
            PropertyString: "攻擊速度 +30%",
            Index: 2
          },
          {
            PropertyString: "+150 防禦",
            Index: 0
          },
          {
            PropertyString: "生命回復 +10",
            Index: 1
          },
          {
            PropertyString: "+25 法力",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "200",
          EquipmentType: 0,
          Name: "權冠 (Diadem)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 85,
          Type: {
            Name: "Circlet",
            Index: "Circlet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "M'avina's Battle Hymn",
        SetPropertiesString: [
          "+30% 打擊恢復 （3 件）"
        ],
        Name: "馬維娜的擁抱 (M'avina's Embrace)",
        Index: "M'avina's Embrace",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 21,
        RequiredLevel: 70,
        Code: "uld",
        Properties: [
          {
            PropertyString: "被擊中時有 10% 機率施展等級 3 冰川之槍",
            Index: 0
          },
          {
            PropertyString: "+2 被動與魔法技能 （只限亞馬遜）",
            Index: 3
          },
          {
            PropertyString: "+4 防禦 （依角色等級而定）",
            Index: 4
          },
          {
            PropertyString: "+350 防禦",
            Index: 5
          },
          {
            PropertyString: "魔法傷害降低 5",
            Index: 2
          },
          {
            PropertyString: "需求 -30%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "417",
          EquipmentType: 0,
          Name: "海怪之殼 (Kraken Shell)",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 48,
          ItemLevel: 81,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "M'avina's Battle Hymn",
        SetPropertiesString: [
          "增加 131-252 寒冰傷害 （4 件）",
          "+20% 寒冰技能傷害 （5 件）"
        ],
        Name: "馬維娜的冰握 (M'avina's Icy Clutch)",
        Index: "M'avina's Icy Clutch",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 21,
        RequiredLevel: 32,
        Code: "xtg",
        Properties: [
          {
            PropertyString: "增加 6-18 寒冰傷害",
            Index: 1
          },
          {
            PropertyString: "+45-50 防禦",
            Index: 0
          },
          {
            PropertyString: "+10 力量",
            Index: 4
          },
          {
            PropertyString: "+15 敏捷",
            Index: 5
          },
          {
            PropertyString: "冰凍時間減半",
            Index: 2
          },
          {
            PropertyString: "怪物金幣掉落量提高 +56%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "140",
          EquipmentType: 0,
          Name: "戰鬥護手 (Battle Gauntlets)",
          RequiredStrength: 88,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 49,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "M'avina's Battle Hymn",
        SetPropertiesString: [
          "所有抗性 +25% （4 件）"
        ],
        Name: "馬維娜的教義 (M'avina's Tenet)",
        Index: "M'avina's Tenet",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 21,
        RequiredLevel: 45,
        Code: "zvb",
        Properties: [
          {
            PropertyString: "+20% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "擊中竊取 +5% 法力",
            Index: 2
          },
          {
            PropertyString: "+50 防禦",
            Index: 0
          },
          {
            PropertyString: "照亮範圍 +5",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "73-83",
          EquipmentType: 0,
          Name: "鯊皮腰帶 (Sharkskin Belt)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 39,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amazon Bow",
        "Set": "M'avina's Battle Hymn",
        SetPropertiesString: [
          "擊中時有 10% 機率施展等級 15 閃電新星 （3 件）",
          "+2 弓與弩技能 （只限亞馬遜） （4 件）",
          "增加 114-377 魔法傷害 （2 件）"
        ],
        Name: "馬維娜的強弓 (M'avina's Caster)",
        Index: "M'avina's Caster",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 21,
        RequiredLevel: 70,
        Code: "amc",
        Properties: [
          {
            PropertyString: "攻擊速度 +40%",
            Index: 1
          },
          {
            PropertyString: "+188% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "射出魔法箭矢 +1",
            Index: 2
          },
          {
            PropertyString: "+50 準確率",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "40 to 207"
            }
          ],
          EquipmentType: 1,
          Name: "主母之弓 (Grand Matron Bow)",
          RequiredStrength: 108,
          RequiredDexterity: 152,
          Durability: 0,
          ItemLevel: 78,
          Type: {
            Name: "Amazon Bow",
            Index: "Amazon Bow",
            Class: "ama"
          },
          RequiredClass: "Amazon"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20 力量",
        Index: 0
      },
      {
        PropertyString: "+30 敏捷",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 亞馬遜技能等級",
        Index: 1
      },
      {
        PropertyString: "+100 準確率",
        Index: 3
      },
      {
        PropertyString: "+100 防禦",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "The Disciple",
    Name: "門徒 (The Disciple)",
    SetItems: [
      {
        Type: "Amulet",
        "Set": "The Disciple",
        SetPropertiesString: [],
        Name: "誦唸珠 (Telling of Beads)",
        Index: "Telling of Beads",
        Enabled: true,
        Rarity: 1,
        ItemLevel: 39,
        RequiredLevel: 30,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 1
          },
          {
            PropertyString: "冰寒抗性 +18%",
            Index: 2
          },
          {
            PropertyString: "毒素抗性 +35-50%",
            Index: 0
          },
          {
            PropertyString: "攻擊者反傷 +8-10",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "The Disciple",
        SetPropertiesString: [],
        Name: "按手禮 (Laying of Hands)",
        Index: "Laying of Hands",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 39,
        RequiredLevel: 63,
        Code: "ulg",
        Properties: [
          {
            PropertyString: "擊中時有 10% 機率施展等級 3 聖光彈",
            Index: 4
          },
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+350% 對惡魔的傷害",
            Index: 3
          },
          {
            PropertyString: "+25 防禦",
            Index: 0
          },
          {
            PropertyString: "火焰抗性 +50%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "54",
          EquipmentType: 0,
          Name: "荊棘手套 (Bramble Mitts)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 57,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "The Disciple",
        SetPropertiesString: [],
        Name: "入門式 (Rite of Passage)",
        Index: "Rite of Passage",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 39,
        RequiredLevel: 29,
        Code: "xlb",
        Properties: [
          {
            PropertyString: "+30% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "+25 防禦",
            Index: 0
          },
          {
            PropertyString: "冰凍時間減半",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "26 to 46",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "28",
          EquipmentType: 0,
          Name: "魔皮長靴 (Demonhide Boots)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 36,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "The Disciple",
        SetPropertiesString: [],
        Name: "隱門徒 (Dark Adherent)",
        Index: "Dark Adherent",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 39,
        RequiredLevel: 43,
        Code: "uui",
        Properties: [
          {
            PropertyString: "被擊中時有 25% 機率施展等級 3 閃電新星",
            Index: 2
          },
          {
            PropertyString: "增加 25-35 毒素傷害 Over 2 Seconds",
            Index: 3
          },
          {
            PropertyString: "+305-415 防禦",
            Index: 0
          },
          {
            PropertyString: "火焰抗性 +24%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361",
          EquipmentType: 0,
          Name: "灰暮罩衣 (Dusk Shroud)",
          RequiredStrength: 77,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 65,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "The Disciple",
        SetPropertiesString: [],
        Name: "守信條 (Credendum)",
        Index: "Credendum",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 39,
        RequiredLevel: 65,
        Code: "umc",
        Properties: [
          {
            PropertyString: "+50 防禦",
            Index: 0
          },
          {
            PropertyString: "+10 力量",
            Index: 1
          },
          {
            PropertyString: "+10 敏捷",
            Index: 2
          },
          {
            PropertyString: "所有抗性 +15%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "58",
          EquipmentType: 0,
          Name: "秘銀腰帶 (Mithril Coil)",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 75,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+150 防禦",
        Index: 0
      },
      {
        PropertyString: "+22 毒素傷害，時效 3 秒",
        Index: 2
      },
      {
        PropertyString: "+10 力量",
        Index: 4
      },
      {
        PropertyString: "+10 敏捷",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 1
      },
      {
        PropertyString: "+100 法力",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Heaven's Brethren",
    Name: "天堂的同胞 (Heaven's Brethren)",
    SetItems: [
      {
        Type: "Mace",
        "Set": "Heaven's Brethren",
        SetPropertiesString: [],
        Name: "檀君的教導 (Dangoon's Teaching)",
        Index: "Dangoon's Teaching",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 55,
        RequiredLevel: 68,
        Code: "7ma",
        Properties: [
          {
            PropertyString: "擊中時有 10% 機率施展等級 3 冰霜新星",
            Index: 2
          },
          {
            PropertyString: "攻擊速度 +40%",
            Index: 1
          },
          {
            PropertyString: "+1.5 最大傷害 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "增加 20-30 火焰傷害",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "41 to 49"
            }
          ],
          EquipmentType: 1,
          Name: "強化釘鎚 (Reinforced Mace)",
          RequiredStrength: 145,
          RequiredDexterity: 46,
          Durability: 250,
          ItemLevel: 63,
          Type: {
            Name: "Mace",
            Index: "Mace",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Heaven's Brethren",
        SetPropertiesString: [],
        Name: "太白山的榮光 (Taebaek's Glory)",
        Index: "Taebaek's Glory",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 55,
        RequiredLevel: 81,
        Code: "uts",
        Properties: [
          {
            PropertyString: "無法破壞",
            Index: 4
          },
          {
            PropertyString: "+30% 格擋速度",
            Index: 6
          },
          {
            PropertyString: "格擋機率提高 +25%",
            Index: 5
          },
          {
            PropertyString: "+50 防禦",
            Index: 0
          },
          {
            PropertyString: "+100 法力",
            Index: 1
          },
          {
            PropertyString: "電擊抗性 +30%",
            Index: 2
          },
          {
            PropertyString: "攻擊者反傷 +30",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "11 to 35",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "203",
          EquipmentType: 0,
          Name: "庇護盾 (Ward)",
          RequiredStrength: 185,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 84,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Heaven's Brethren",
        SetPropertiesString: [],
        Name: "解慕漱的堅決 (Haemosu's Adamant)",
        Index: "Haemosu's Adamant",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 55,
        RequiredLevel: 44,
        Code: "xrs",
        Properties: [
          {
            PropertyString: "+500 防禦",
            Index: 0
          },
          {
            PropertyString: "+40 對近戰防禦",
            Index: 3
          },
          {
            PropertyString: "+35 對遠程防禦",
            Index: 1
          },
          {
            PropertyString: "+75 生命",
            Index: 2
          },
          {
            PropertyString: "需求 -20%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "688",
          EquipmentType: 0,
          Name: "護胸甲 (Cuirass)",
          RequiredStrength: 65,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 47,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Heaven's Brethren",
        SetPropertiesString: [],
        Name: "溫達的全靈 (Ondal's Almighty)",
        Index: "Ondal's Almighty",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 55,
        RequiredLevel: 69,
        Code: "uhm",
        Properties: [
          {
            PropertyString: "擊中時有 10% 機率施展等級 3 削弱",
            Index: 2
          },
          {
            PropertyString: "+24% 打擊恢復",
            Index: 5
          },
          {
            PropertyString: "+50 防禦",
            Index: 0
          },
          {
            PropertyString: "+10 力量",
            Index: 3
          },
          {
            PropertyString: "+15 敏捷",
            Index: 4
          },
          {
            PropertyString: "需求 -40%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "293-327",
          EquipmentType: 0,
          Name: "巨角頭盔 (Spired Helm)",
          RequiredStrength: 192,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 79,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "擊中竊取 10% 生命",
        Index: 0
      },
      {
        PropertyString: "生命回復 +30",
        Index: 2
      },
      {
        PropertyString: "增加 3 火焰傷害 （依角色等級而定）",
        Index: 3
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 1
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 +24%",
        Index: 4
      },
      {
        PropertyString: "無法冰凍",
        Index: 2
      },
      {
        PropertyString: "照亮範圍 +5",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Orphan's Call",
    Name: "孤兒的呼喚 (Orphan's Call)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Orphan's Call",
        SetPropertiesString: [],
        Name: "吉永之臉 (Guillaume's Face)",
        Index: "Guillaume's Face",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 41,
        RequiredLevel: 34,
        Code: "xhm",
        Properties: [
          {
            PropertyString: "+30% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+35% 概率造成粉碎打擊",
            Index: 2
          },
          {
            PropertyString: "+15% 致命打擊",
            Index: 3
          },
          {
            PropertyString: "+120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+15 力量",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "189-232",
          EquipmentType: 0,
          Name: "翼盔 (Winged Helm)",
          RequiredStrength: 115,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 51,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Orphan's Call",
        SetPropertiesString: [],
        Name: "威廉的自尊 (Wilhelm's Pride)",
        Index: "Wilhelm's Pride",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 41,
        RequiredLevel: 42,
        Code: "ztb",
        Properties: [
          {
            PropertyString: "擊中竊取 +5% 法力",
            Index: 1
          },
          {
            PropertyString: "擊中竊取 5% 生命",
            Index: 3
          },
          {
            PropertyString: "+75% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "冰寒抗性 +10%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "66-83",
          EquipmentType: 0,
          Name: "戰鬥腰帶 (Battle Belt)",
          RequiredStrength: 88,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 49,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Orphan's Call",
        SetPropertiesString: [],
        Name: "馬格納斯之皮 (Magnus' Skin)",
        Index: "Magnus' Skin",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 41,
        RequiredLevel: 37,
        Code: "xvg",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 2
          },
          {
            PropertyString: "+100 準確率",
            Index: 4
          },
          {
            PropertyString: "+50% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "火焰抗性 +15%",
            Index: 1
          },
          {
            PropertyString: "照亮範圍 +3",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "51",
          EquipmentType: 0,
          Name: "鯊皮手套 (Sharkskin Gloves)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 39,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Orphan's Call",
        SetPropertiesString: [],
        Name: "惠斯坦的守護 (Whitstan's Guard)",
        Index: "Whitstan's Guard",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 41,
        RequiredLevel: 29,
        Code: "xml",
        Properties: [
          {
            PropertyString: "+40% 格擋速度",
            Index: 1
          },
          {
            PropertyString: "格擋機率提高 +55%",
            Index: 2
          },
          {
            PropertyString: "+175% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "冰凍時間減半",
            Index: 3
          },
          {
            PropertyString: "照亮範圍 +5",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "7 to 14",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "132",
          EquipmentType: 0,
          Name: "圓型盾 (Round Shield)",
          RequiredStrength: 53,
          RequiredDexterity: 0,
          Durability: 64,
          ItemLevel: 37,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+35 生命",
        Index: 0
      },
      {
        PropertyString: "攻擊者反傷 +5",
        Index: 2
      },
      {
        PropertyString: "+100 防禦",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+100 防禦",
        Index: 3
      },
      {
        PropertyString: "+20 力量",
        Index: 2
      },
      {
        PropertyString: "+10 敏捷",
        Index: 1
      },
      {
        PropertyString: "+50 生命",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +15%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +80%",
        Index: 5
      }
    ],
    Level: 1
  },
  {
    Index: "Hwanin's Majesty",
    Name: "桓因的威嚴 (Hwanin's Majesty)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Hwanin's Majesty",
        SetPropertiesString: [],
        Name: "桓因的光輝 (Hwanin's Splendor)",
        Index: "Hwanin's Splendor",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 28,
        RequiredLevel: 45,
        Code: "xrn",
        Properties: [
          {
            PropertyString: "+100% 防禦強化",
            Index: 3
          },
          {
            PropertyString: "生命回復 +20",
            Index: 0
          },
          {
            PropertyString: "冰寒抗性 +37%",
            Index: 2
          },
          {
            PropertyString: "魔法傷害降低 10",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "158",
          EquipmentType: 0,
          Name: "莊嚴王冠 (Grand Crown)",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 55,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Hwanin's Majesty",
        SetPropertiesString: [],
        Name: "桓因的庇佑 (Hwanin's Refuge)",
        Index: "Hwanin's Refuge",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 28,
        RequiredLevel: 30,
        Code: "xcl",
        Properties: [
          {
            PropertyString: "被擊中時有 10% 機率施展等級 3 靜電力場",
            Index: 3
          },
          {
            PropertyString: "+200 防禦",
            Index: 0
          },
          {
            PropertyString: "+100 生命",
            Index: 2
          },
          {
            PropertyString: "毒素抗性 +27%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "477-548",
          EquipmentType: 0,
          Name: "鎖鱗戰甲 (Tigulated Mail)",
          RequiredStrength: 86,
          RequiredDexterity: 0,
          Durability: 36,
          ItemLevel: 43,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Hwanin's Majesty",
        SetPropertiesString: [],
        Name: "桓因的祝福 (Hwanin's Blessing)",
        Index: "Hwanin's Blessing",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 28,
        RequiredLevel: 35,
        Code: "mbl",
        Properties: [
          {
            PropertyString: "增加 3-33 電擊傷害",
            Index: 0
          },
          {
            PropertyString: "防止怪物自療",
            Index: 1
          },
          {
            PropertyString: "+1.5 防禦 （依角色等級而定）",
            Index: 2
          },
          {
            PropertyString: "+12% 受到的傷害轉為法力",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "5",
          EquipmentType: 0,
          Name: "腰帶 (Belt)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 12,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Polearm",
        "Set": "Hwanin's Majesty",
        SetPropertiesString: [],
        Name: "桓因的制裁 (Hwanin's Justice)",
        Index: "Hwanin's Justice",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 28,
        RequiredLevel: 28,
        Code: "9vo",
        Properties: [
          {
            PropertyString: "無法破壞",
            Index: 1
          },
          {
            PropertyString: "擊中時有 10% 機率施展等級 3 寒冰球",
            Index: 2
          },
          {
            PropertyString: "攻擊速度 +40%",
            Index: 3
          },
          {
            PropertyString: "+200% 傷害強化",
            Index: 4
          },
          {
            PropertyString: "+330 準確率",
            Index: 0
          },
          {
            PropertyString: "增加 5-25 電擊傷害",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "42 to 159"
            }
          ],
          EquipmentType: 1,
          Name: "長柄鍥 (Bill)",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 37,
          Type: {
            Name: "Polearm",
            Index: "Polearm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+100 防禦",
        Index: 0
      },
      {
        PropertyString: "+200 防禦",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+30% 跑步 / 行走速度",
        Index: 2
      },
      {
        PropertyString: "擊中竊取 20% 生命",
        Index: 1
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Sazabi's Grand Tribute",
    Name: "沙薩比的崇高禮讚 (Sazabi's Grand Tribute)",
    SetItems: [
      {
        Type: "Sword",
        "Set": "Sazabi's Grand Tribute",
        SetPropertiesString: [],
        Name: "沙薩比的救贖鈷劍 (Sazabi's Cobalt Redeemer)",
        Index: "Sazabi's Cobalt Redeemer",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 34,
        RequiredLevel: 73,
        Code: "7ls",
        Properties: [
          {
            PropertyString: "無法破壞",
            Index: 4
          },
          {
            PropertyString: "攻擊速度 +40%",
            Index: 2
          },
          {
            PropertyString: "+150% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+318% 對惡魔的傷害",
            Index: 3
          },
          {
            PropertyString: "增加 25-35 寒冰傷害",
            Index: 1
          },
          {
            PropertyString: "+5 力量",
            Index: 6
          },
          {
            PropertyString: "+15 敏捷",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "12 to 192"
            }
          ],
          EquipmentType: 1,
          Name: "絕秘劍 (Cryptic Sword)",
          RequiredStrength: 99,
          RequiredDexterity: 109,
          Durability: 0,
          ItemLevel: 82,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Sazabi's Grand Tribute",
        SetPropertiesString: [],
        Name: "沙薩比的解靈框體 (Sazabi's Ghost Liberator)",
        Index: "Sazabi's Ghost Liberator",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 34,
        RequiredLevel: 67,
        Code: "upl",
        Properties: [
          {
            PropertyString: "+30% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+300 對惡魔的准确率",
            Index: 3
          },
          {
            PropertyString: "+400 防禦",
            Index: 0
          },
          {
            PropertyString: "+25 力量",
            Index: 2
          },
          {
            PropertyString: "+50-75 生命",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1068-1233",
          EquipmentType: 0,
          Name: "炎魔皮板甲 (Balrog Skin)",
          RequiredStrength: 165,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 76,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Sazabi's Grand Tribute",
        SetPropertiesString: [],
        Name: "沙薩比的精神護罩 (Sazabi's Mental Sheath)",
        Index: "Sazabi's Mental Sheath",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 34,
        RequiredLevel: 43,
        Code: "xhl",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 1
          },
          {
            PropertyString: "+100 防禦",
            Index: 0
          },
          {
            PropertyString: "電擊抗性 +15-20%",
            Index: 3
          },
          {
            PropertyString: "火焰抗性 +15-20%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "205-228",
          EquipmentType: 0,
          Name: "輕盔 (Basinet)",
          RequiredStrength: 82,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 45,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+40% 跑步 / 行走速度",
        Index: 0
      },
      {
        PropertyString: "中毒的時效縮短 75%",
        Index: 1
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 3
      },
      {
        PropertyString: "擊中竊取 15% 生命",
        Index: 1
      },
      {
        PropertyString: "生命上限 +27%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "物理傷害降低 +16%",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Bul-Kathos' Children",
    Name: "布爾凱索的子嗣 (Bul-Kathos' Children)",
    SetItems: [
      {
        Type: "Sword",
        "Set": "Bul-Kathos' Children",
        SetPropertiesString: [],
        Name: "布爾凱索的神聖職責 (Bul-Kathos' Sacred Charge)",
        Index: "Bul-Kathos' Sacred Charge",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 50,
        RequiredLevel: 61,
        Code: "7gd",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 2
          },
          {
            PropertyString: "+200% 傷害強化",
            Index: 3
          },
          {
            PropertyString: "+35% 概率造成粉碎打擊",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 0,
              DamageString: "75 to 195"
            },
            {
              Type: 1,
              DamageString: "174 to 345"
            }
          ],
          EquipmentType: 1,
          Name: "巨神刃 (Colossus Blade)",
          RequiredStrength: 189,
          RequiredDexterity: 110,
          Durability: 250,
          ItemLevel: 85,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Bul-Kathos' Children",
        SetPropertiesString: [],
        Name: "布爾凱索的部族守護 (Bul-Kathos' Tribal Guardian)",
        Index: "Bul-Kathos' Tribal Guardian",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 50,
        RequiredLevel: 54,
        Code: "7wd",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 2
          },
          {
            PropertyString: "+200% 傷害強化",
            Index: 4
          },
          {
            PropertyString: "+50 毒素傷害，時效 2 秒",
            Index: 1
          },
          {
            PropertyString: "+20 力量",
            Index: 3
          },
          {
            PropertyString: "火焰抗性 +50%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "120 to 150"
            }
          ],
          EquipmentType: 1,
          Name: "秘儀劍 (Mythical Sword)",
          RequiredStrength: 147,
          RequiredDexterity: 124,
          Durability: 250,
          ItemLevel: 85,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 1
      },
      {
        PropertyString: "+200 準確率",
        Index: 2
      },
      {
        PropertyString: "+200% 對惡魔的傷害",
        Index: 5
      },
      {
        PropertyString: "+200% 對不死怪物的傷害",
        Index: 4
      },
      {
        PropertyString: "增加 200 火焰傷害",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 10% 生命",
        Index: 6
      },
      {
        PropertyString: "+20% 致命打擊",
        Index: 7
      },
      {
        PropertyString: "+200 防禦",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Cow King's Leathers",
    Name: "牛王皮甲 (Cow King's Leathers)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Cow King's Leathers",
        SetPropertiesString: [],
        Name: "牛王之角 (Cow King's Horns)",
        Index: "Cow King's Horns",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 25,
        Code: "xap",
        Properties: [
          {
            PropertyString: "+75 防禦",
            Index: 0
          },
          {
            PropertyString: "冰凍時間減半",
            Index: 1
          },
          {
            PropertyString: "攻擊者反傷 +10",
            Index: 3
          },
          {
            PropertyString: "+35% 受到的傷害轉為法力",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "80-92",
          EquipmentType: 0,
          Name: "戰帽 (War Hat)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 34,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Cow King's Leathers",
        SetPropertiesString: [],
        Name: "牛王之皮 (Cow King's Hide)",
        Index: "Cow King's Hide",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 18,
        Code: "stu",
        Properties: [
          {
            PropertyString: "被擊中時有 18% 機率施展等級 5 連鎖閃電",
            Index: 3
          },
          {
            PropertyString: "+60% 防禦強化",
            Index: 1
          },
          {
            PropertyString: "+30 生命",
            Index: 2
          },
          {
            PropertyString: "所有抗性 +18%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "67-82",
          EquipmentType: 0,
          Name: "鑲釘皮甲 (Studded Leather)",
          RequiredStrength: 27,
          RequiredDexterity: 0,
          Durability: 32,
          ItemLevel: 8,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Cow King's Leathers",
        SetPropertiesString: [],
        Name: "牛王之蹄 (Cow King's Hooves)",
        Index: "Cow King's Hooves",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 13,
        Code: "vbt",
        Properties: [
          {
            PropertyString: "+30% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "增加 25-35 火焰傷害",
            Index: 4
          },
          {
            PropertyString: "+25-35 防禦",
            Index: 0
          },
          {
            PropertyString: "+20 敏捷",
            Index: 3
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +25%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "4 to 10",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "30-40",
          EquipmentType: 0,
          Name: "重靴 (Heavy Boots)",
          RequiredStrength: 18,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 7,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+10 地震猛擊",
        Index: 0
      },
      {
        PropertyString: "+100 防禦",
        Index: 1
      }
    ],
    FullProperties: [
      {
        PropertyString: "被擊中時有 25% 機率施展等級 5 靜電力場",
        Index: 4
      },
      {
        PropertyString: "+2-3 所有技能",
        Index: 7
      },
      {
        PropertyString: "攻擊速度 +30%",
        Index: 5
      },
      {
        PropertyString: "+20 力量",
        Index: 1
      },
      {
        PropertyString: "+100 生命",
        Index: 6
      },
      {
        PropertyString: "怪物金幣掉落量提高 +100%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Naj's Ancient Vestige",
    Name: "娜吉的上古遺物 (Naj's Ancient Vestige)",
    SetItems: [
      {
        Type: "Staff",
        "Set": "Naj's Ancient Vestige",
        SetPropertiesString: [],
        Name: "娜吉的解謎杖 (Naj's Puzzler)",
        Index: "Naj's Puzzler",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 43,
        RequiredLevel: 78,
        Code: "6cs",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 6
          },
          {
            PropertyString: "+150% 傷害強化",
            Index: 1
          },
          {
            PropertyString: "+30% 施法速度",
            Index: 3
          },
          {
            PropertyString: "增加 6-45 電擊傷害",
            Index: 4
          },
          {
            PropertyString: "+35 能量",
            Index: 0
          },
          {
            PropertyString: "+70 法力",
            Index: 5
          },
          {
            PropertyString: "等級 11 傳送術（69 次）",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "200 to 232"
            }
          ],
          EquipmentType: 1,
          Name: "長者法杖 (Elder Staff)",
          RequiredStrength: 44,
          RequiredDexterity: 37,
          Durability: 250,
          ItemLevel: 74,
          Type: {
            Name: "Staff",
            Index: "Staff",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Naj's Ancient Vestige",
        SetPropertiesString: [],
        Name: "娜吉的輕鎧 (Naj's Light Plate)",
        Index: "Naj's Light Plate",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 43,
        RequiredLevel: 71,
        Code: "ult",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 4
          },
          {
            PropertyString: "+300 防禦",
            Index: 5
          },
          {
            PropertyString: "+65 生命",
            Index: 1
          },
          {
            PropertyString: "所有抗性 +25%",
            Index: 2
          },
          {
            PropertyString: "+45% 受到的傷害轉為法力",
            Index: 3
          },
          {
            PropertyString: "需求 -60%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "844-949",
          EquipmentType: 0,
          Name: "地獄鍛甲 (Hellforge Plate)",
          RequiredStrength: 196,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 78,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Circlet",
        "Set": "Naj's Ancient Vestige",
        SetPropertiesString: [],
        Name: "娜吉的頭環 (Naj's Circlet)",
        Index: "Naj's Circlet",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 43,
        RequiredLevel: 28,
        Code: "ci0",
        Properties: [
          {
            PropertyString: "被擊中時有 12% 機率施展等級 5 連鎖閃電",
            Index: 4
          },
          {
            PropertyString: "增加 25-35 火焰傷害",
            Index: 1
          },
          {
            PropertyString: "+75 防禦",
            Index: 0
          },
          {
            PropertyString: "+15 力量",
            Index: 3
          },
          {
            PropertyString: "照亮範圍 +5",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "20",
          EquipmentType: 0,
          Name: "頭環 (Circlet)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 35,
          ItemLevel: 24,
          Type: {
            Name: "Circlet",
            Index: "Circlet",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+175 防禦",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +1.5% （依角色等級而定）",
        Index: 1
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+2 火焰技能",
        Index: 6
      },
      {
        PropertyString: "+20 力量",
        Index: 4
      },
      {
        PropertyString: "+15 敏捷",
        Index: 2
      },
      {
        PropertyString: "生命上限 +12%",
        Index: 7
      },
      {
        PropertyString: "生命回復 +20",
        Index: 1
      },
      {
        PropertyString: "+100 法力",
        Index: 5
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Sander's Folly",
    Name: "山德的愚行 (Sander's Folly)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Sander's Folly",
        SetPropertiesString: [],
        Name: "山德的模範 (Sander's Paragon)",
        Index: "Sander's Paragon",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 20,
        RequiredLevel: 25,
        Code: "cap",
        Properties: [
          {
            PropertyString: "+1 防禦 （依角色等級而定）",
            Index: 2
          },
          {
            PropertyString: "攻擊者反傷 +8",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +35%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "18-28",
          EquipmentType: 0,
          Name: "便帽 (Cap)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 1,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Sander's Folly",
        SetPropertiesString: [],
        Name: "山德的碎石 (Sander's Riprap)",
        Index: "Sander's Riprap",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 20,
        Code: "vbt",
        Properties: [
          {
            PropertyString: "+40% 跑步 / 行走速度",
            Index: 0
          },
          {
            PropertyString: "+100 準確率",
            Index: 1
          },
          {
            PropertyString: "+5 力量",
            Index: 2
          },
          {
            PropertyString: "+10 敏捷",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "4 to 10",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "30-40",
          EquipmentType: 0,
          Name: "重靴 (Heavy Boots)",
          RequiredStrength: 18,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 7,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Sander's Folly",
        SetPropertiesString: [],
        Name: "山德的禁忌 (Sander's Taboo)",
        Index: "Sander's Taboo",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 28,
        Code: "vgl",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "增加 9-11 毒素傷害 Over 3 Seconds",
            Index: 3
          },
          {
            PropertyString: "+20-25 防禦",
            Index: 0
          },
          {
            PropertyString: "+40 生命",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25-35",
          EquipmentType: 0,
          Name: "厚皮手套 (Heavy Gloves)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 7,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Wand",
        "Set": "Sander's Folly",
        SetPropertiesString: [],
        Name: "山德的迷信 (Sander's Superstition)",
        Index: "Sander's Superstition",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 25,
        Code: "bwn",
        Properties: [
          {
            PropertyString: "+75% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+20% 施法速度",
            Index: 3
          },
          {
            PropertyString: "增加 25-75 寒冰傷害",
            Index: 4
          },
          {
            PropertyString: "擊中竊取 +8% 法力",
            Index: 2
          },
          {
            PropertyString: "+25 法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "3 to 7"
            }
          ],
          EquipmentType: 1,
          Name: "骸骨魔杖 (Bone Wand)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 18,
          Type: {
            Name: "Wand",
            Index: "Wand",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 防禦",
        Index: 0
      },
      {
        PropertyString: "+75 準確率",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 4% 生命",
        Index: 3
      },
      {
        PropertyString: "+50 法力",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Midnight Calling",
    Name: "午夜召喚 (Midnight Calling)",
    SetItems: [
      {
        Type: "Hand to Hand",
        "Set": "Midnight Calling",
        SetPropertiesString: [
          "+15 最小傷害 （2 件）"
        ],
        Name: "雅基拉的襲擊 (Jakira's Strike)",
        Index: "Jakira's Strike",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 10,
        RequiredLevel: 12,
        Code: "axf",
        Properties: [
          {
            PropertyString: "+120% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "擊中竊取 5% 生命",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "4 to 33"
            }
          ],
          EquipmentType: 1,
          Name: "斧手 (Hatchet Hands)",
          RequiredStrength: 37,
          RequiredDexterity: 37,
          Durability: 250,
          ItemLevel: 12,
          Type: {
            Name: "Hand to Hand",
            Index: "Hand to Hand",
            Class: "ass"
          },
          RequiredClass: "Assassin"
        }
      },
      {
        Type: "Gloves",
        "Set": "Midnight Calling",
        SetPropertiesString: [
          "+2 陷阱 （只限刺客） （3 件）"
        ],
        Name: "雅基拉的手套 (Jakira's Braces)",
        Index: "Jakira's Braces",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 10,
        RequiredLevel: 10,
        Code: "mgl",
        Properties: [
          {
            PropertyString: "攻擊速度 +10%",
            Index: 0
          },
          {
            PropertyString: "+75% 防禦強化",
            Index: 1
          },
          {
            PropertyString: "+25-35 生命",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "15",
          EquipmentType: 0,
          Name: "鍊甲手套 (Chain Gloves)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 12,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Midnight Calling",
        SetPropertiesString: [
          "魔法傷害降低 6 （2 件）"
        ],
        Name: "雅基拉的頭巾 (Jakira's Hood)",
        Index: "Jakira's Hood",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 10,
        RequiredLevel: 5,
        Code: "cap",
        Properties: [
          {
            PropertyString: "+1 刺客技能等級",
            Index: 0
          },
          {
            PropertyString: "+15-25 防禦",
            Index: 1
          },
          {
            PropertyString: "+20-30 法力",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "18-28",
          EquipmentType: 0,
          Name: "便帽 (Cap)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 1,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Midnight Calling",
        SetPropertiesString: [
          "物理傷害降低 8 （3 件）"
        ],
        Name: "雅基拉的皮甲 (Jakira's Leather Jerkin)",
        Index: "Jakira's Leather Jerkin",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 10,
        RequiredLevel: 9,
        Code: "stu",
        Properties: [
          {
            PropertyString: "+35-50 防禦",
            Index: 0
          },
          {
            PropertyString: "+15 力量",
            Index: 2
          },
          {
            PropertyString: "+15 敏捷",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "67-82",
          EquipmentType: 0,
          Name: "鑲釘皮甲 (Studded Leather)",
          RequiredStrength: 27,
          RequiredDexterity: 0,
          Durability: 32,
          ItemLevel: 8,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+10 敏捷",
        Index: 0
      },
      {
        PropertyString: "+10 力量",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 刺客技能等級",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +15%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +20%",
        Index: 3
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Nature's Grove",
    Name: "自然叢林 (Nature's Grove)",
    SetItems: [
      {
        Type: "Ring",
        "Set": "Nature's Grove",
        SetPropertiesString: [],
        Name: "平和之戒指 (Peace Ring)",
        Index: "Peace Ring",
        Enabled: true,
        Rarity: 5,
        ItemLevel: 12,
        RequiredLevel: 12,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+40-50 生命",
            Index: 1
          },
          {
            PropertyString: "+40-50 法力",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Hammer",
        "Set": "Nature's Grove",
        SetPropertiesString: [
          "增加 10-30 寒冰傷害 （2 件）"
        ],
        Name: "力量的平衡 (Balance of Power)",
        Index: "Balance of Power",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 12,
        RequiredLevel: 18,
        Code: "mau",
        Properties: [
          {
            PropertyString: "攻擊速度 +15%",
            Index: 1
          },
          {
            PropertyString: "+140-200% 傷害強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(72-90) to (103-129)"
            }
          ],
          EquipmentType: 1,
          Name: "重鎚 (Maul)",
          RequiredStrength: 69,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 21,
          Type: {
            Name: "Hammer",
            Index: "Hammer",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Nature's Grove",
        SetPropertiesString: [
          "生命回復 +3 （3 件）",
          "法力恢復 75% （4 件）"
        ],
        Name: "平静的擁抱 (Calming Embrace)",
        Index: "Calming Embrace",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 12,
        RequiredLevel: 7,
        Code: "hla",
        Properties: [
          {
            PropertyString: "+1-3 召喚技能 （只限德魯伊）",
            Index: 1
          },
          {
            PropertyString: "+80-120% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "39-48",
          EquipmentType: 0,
          Name: "硬皮甲 (Hard Leather Armor)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 28,
          ItemLevel: 5,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Pelt",
        "Set": "Nature's Grove",
        SetPropertiesString: [
          "+4 變形術（只限德魯伊） （4 件）"
        ],
        Name: "動物的親和 (Animal Kinship)",
        Index: "Animal Kinship",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 12,
        RequiredLevel: 15,
        Code: "dr3",
        Properties: [
          {
            PropertyString: "+1 德魯伊技能等級",
            Index: 1
          },
          {
            PropertyString: "+30-40 防禦",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "48-58",
          EquipmentType: 0,
          Name: "巨角獸帽 (Antlers)",
          RequiredStrength: 24,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 16,
          Type: {
            Name: "Pelt",
            Index: "Pelt",
            Class: "dru"
          },
          RequiredClass: "Druid"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+10 體能",
        Index: 0
      },
      {
        PropertyString: "+10 能量",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 元素技能 （只限德魯伊）",
        Index: 2
      },
      {
        PropertyString: "+1 德魯伊技能等級",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 3
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Grimlock's Grave",
    Name: "格里姆洛克的坟墓 (Grimlock's Grave)",
    SetItems: [
      {
        Type: "Voodoo Heads",
        "Set": "Grimlock's Grave",
        SetPropertiesString: [
          "+100% 防禦強化 （2 件）"
        ],
        Name: "格里姆洛克的頭骨 (Grimlock's Skull)",
        Index: "Grimlock's Skull",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 11,
        RequiredLevel: 16,
        Code: "ne2",
        Properties: [
          {
            PropertyString: "+20% 格擋速度",
            Index: 1
          },
          {
            PropertyString: "格擋機率提高 +25-30%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "4",
          EquipmentType: 0,
          Name: "殭屍頭顱 (Zombie Head)",
          RequiredStrength: 14,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 8,
          Type: {
            Name: "Voodoo Heads",
            Index: "Voodoo Heads",
            Class: "nec"
          },
          RequiredClass: "Necromancer"
        }
      },
      {
        Type: "Wand",
        "Set": "Grimlock's Grave",
        SetPropertiesString: [
          "增加 8-20 傷害 （3 件）"
        ],
        Name: "格里姆洛克的魔杖 (Grimlock's Wand)",
        Index: "Grimlock's Wand",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 11,
        RequiredLevel: 15,
        Code: "bwn",
        Properties: [
          {
            PropertyString: "+1 死靈法師技能等級",
            Index: 0
          },
          {
            PropertyString: "+33 法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "3 to 7"
            }
          ],
          EquipmentType: 1,
          Name: "骸骨魔杖 (Bone Wand)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 18,
          Type: {
            Name: "Wand",
            Index: "Wand",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Grimlock's Grave",
        SetPropertiesString: [
          "+77 防禦 （2 件）",
          "法力恢復 40% （3 件）"
        ],
        Name: "格里姆洛克的裹尸布 (Grimlock's Shroud)",
        Index: "Grimlock's Shroud",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 11,
        RequiredLevel: 11,
        Code: "qui",
        Properties: [
          {
            PropertyString: "被擊中時有 15% 機率施展等級 2 冰霜新星",
            Index: 1
          },
          {
            PropertyString: "物理傷害降低 +10%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "8",
          EquipmentType: 0,
          Name: "棉布甲 (Quilted Armor)",
          RequiredStrength: 12,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 1,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Grimlock's Grave",
        SetPropertiesString: [
          "+20 防禦 （2 件）"
        ],
        Name: "格里姆洛克的腰带 (Grimlock's Belt)",
        Index: "Grimlock's Belt",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 11,
        RequiredLevel: 9,
        Code: "mbl",
        Properties: [
          {
            PropertyString: "+15% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+20-25 生命",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "5",
          EquipmentType: 0,
          Name: "腰帶 (Belt)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 12,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+10 能量",
        Index: 0
      },
      {
        PropertyString: "+10 敏捷",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 死靈法師技能等級",
        Index: 0
      },
      {
        PropertyString: "敵人毒素抗性 -10%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 3
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Corgina's Element",
    Name: "科爾吉娜的元素 (Corgina's Element)",
    SetItems: [
      {
        Type: "Orb",
        "Set": "Corgina's Element",
        SetPropertiesString: [
          "+1 冰寒技能 （只限魔法使） （2 件）",
          "+1 閃電技能 （只限魔法使） （3 件）",
          "+1 火焰技能 （只限魔法使） （4 件）"
        ],
        Name: "科爾吉娜的法球 (Corgina's Orb)",
        Index: "Corgina's Orb",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "ob2",
        Properties: [
          {
            PropertyString: "+1 魔法使技能等級",
            Index: 0
          },
          {
            PropertyString: "+2-4 擊殺法力恢復",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "3 to 8"
            }
          ],
          EquipmentType: 1,
          Name: "神聖天球 (Sacred Globe)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 8,
          Type: {
            Name: "Orb",
            Index: "Orb",
            Class: "sor"
          },
          RequiredClass: "Sorceress"
        }
      },
      {
        Type: "Armor",
        "Set": "Corgina's Element",
        SetPropertiesString: [
          "+1 法力 （依角色等級而定） （3 件）",
          "+10% 受到的傷害轉為法力 （2 件）"
        ],
        Name: "科爾吉娜的板甲 (Corgina's Plate)",
        Index: "Corgina's Plate",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 21,
        Code: "ltp",
        Properties: [
          {
            PropertyString: "+75-105% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "159-186",
          EquipmentType: 0,
          Name: "輕型鎧甲 (Light Plate)",
          RequiredStrength: 41,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 35,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Corgina's Element",
        SetPropertiesString: [
          "+15% 格擋速度 （2 件）",
          "冰寒抗性 +20% （3 件）",
          "電擊抗性 +20% （4 件）"
        ],
        Name: "科爾吉娜的防衛 (Corgina's Ward)",
        Index: "Corgina's Ward",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 12,
        RequiredLevel: 14,
        Code: "lrg",
        Properties: [
          {
            PropertyString: "格擋機率提高 +15-25%",
            Index: 1
          },
          {
            PropertyString: "+20-30 防禦",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "2 to 4",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "32-42",
          EquipmentType: 0,
          Name: "大型盾 (Large Shield)",
          RequiredStrength: 34,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 11,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Corgina's Element",
        SetPropertiesString: [
          "火焰抗性 +20% （2 件）",
          "毒素抗性 +20% （3 件）"
        ],
        Name: "科爾吉娜的拖鞋 (Corgina's Slippers)",
        Index: "Corgina's Slippers",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 9,
        RequiredLevel: 9,
        Code: "lbt",
        Properties: [
          {
            PropertyString: "+20% 跑步 / 行走速度",
            Index: 0
          },
          {
            PropertyString: "+20% 打擊恢復",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "3 to 8",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "2",
          EquipmentType: 0,
          Name: "皮靴 (Boots)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 3,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+60 法力",
        Index: 0
      },
      {
        PropertyString: "+20% 施法速度",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 魔法使技能等級",
        Index: 0
      },
      {
        PropertyString: "+10% 火焰技能傷害",
        Index: 2
      },
      {
        PropertyString: "+10% 寒冰技能傷害",
        Index: 3
      },
      {
        PropertyString: "+10% 閃電技能傷害",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Sheena's Grace",
    Name: "希娜的優雅 (Sheena's Grace)",
    SetItems: [
      {
        Type: "Amazon Bow",
        "Set": "Sheena's Grace",
        SetPropertiesString: [
          "攻擊速度 +25% （4 件）"
        ],
        Name: "希娜的心木 (Sheena's Heartwood)",
        Index: "Sheena's Heartwood",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "am1",
        Properties: [
          {
            PropertyString: "增加 15-30 傷害",
            Index: 0
          },
          {
            PropertyString: "+35-55% 機率造成開放傷口",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "22 to 42"
            }
          ],
          EquipmentType: 1,
          Name: "獵鹿弓 (Stag Bow)",
          RequiredStrength: 30,
          RequiredDexterity: 45,
          Durability: 0,
          ItemLevel: 18,
          Type: {
            Name: "Amazon Bow",
            Index: "Amazon Bow",
            Class: "ama"
          },
          RequiredClass: "Amazon"
        }
      },
      {
        Type: "Amulet",
        "Set": "Sheena's Grace",
        SetPropertiesString: [
          "所有抗性 +12% （3 件）"
        ],
        Name: "希娜的項鏈 (Sheena's Choker)",
        Index: "Sheena's Choker",
        Enabled: true,
        Rarity: 5,
        ItemLevel: 12,
        RequiredLevel: 12,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Sheena's Grace",
        SetPropertiesString: [
          "擊中竊取 5% 生命 （4 件）",
          "物理傷害降低 12 （2 件）",
          "魔法傷害降低 8 （3 件）"
        ],
        Name: "希娜的精靈甲 (Sheena's Elven Mail)",
        Index: "Sheena's Elven Mail",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 16,
        RequiredLevel: 14,
        Code: "scl",
        Properties: [
          {
            PropertyString: "+100-150 防禦",
            Index: 0
          },
          {
            PropertyString: "+15 敏捷",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "157-207",
          EquipmentType: 0,
          Name: "鱗甲 (Scale Mail)",
          RequiredStrength: 44,
          RequiredDexterity: 0,
          Durability: 36,
          ItemLevel: 13,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Sheena's Grace",
        SetPropertiesString: [
          "+10 體能 （2 件）"
        ],
        Name: "希娜的彩帶 (Sheena's Band)",
        Index: "Sheena's Band",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 8,
        RequiredLevel: 10,
        Code: "vbl",
        Properties: [
          {
            PropertyString: "生命上限 +5-10%",
            Index: 0
          },
          {
            PropertyString: "+5-10 法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "3",
          EquipmentType: 0,
          Name: "輕腰帶 (Light Belt)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 7,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "攻擊速度 +15%",
        Index: 0
      },
      {
        PropertyString: "+30 生命",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 亞馬遜技能等級",
        Index: 0
      },
      {
        PropertyString: "+20 最大傷害",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +35%",
        Index: 3
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Talonrage's Fury",
    Name: "塔倫拉格之怒 (Talonrage's Fury)",
    SetItems: [
      {
        Type: "Primal Helm",
        "Set": "Talonrage's Fury",
        SetPropertiesString: [
          "+1 戰鬥技能 （只限野蠻人） （3 件）"
        ],
        Name: "狂戰士的呼嘯 (Berserker's Howl)",
        Index: "Berserker's Howl",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 18,
        RequiredLevel: 18,
        Code: "ba4",
        Properties: [
          {
            PropertyString: "+1 野蠻人技能等級",
            Index: 0
          },
          {
            PropertyString: "+1 恐懼",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "30",
          EquipmentType: 0,
          Name: "突擊頭盔 (Assault Helmet)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 20,
          Type: {
            Name: "Primal Helm",
            Index: "Primal Helm",
            Class: "bar"
          },
          RequiredClass: "Barbarian"
        }
      },
      {
        Type: "Armor",
        "Set": "Talonrage's Fury",
        SetPropertiesString: [
          "+40 生命 （2 件）",
          "物理傷害降低 +10% （4 件）"
        ],
        Name: "渾沌之心 (Chaos Heart)",
        Index: "Chaos Heart",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 22,
        Code: "fld",
        Properties: [
          {
            PropertyString: "+90-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "193-224",
          EquipmentType: 0,
          Name: "野戰鎧甲 (Field Plate)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 48,
          ItemLevel: 28,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Spear",
        "Set": "Talonrage's Fury",
        SetPropertiesString: [
          "攻擊速度 +30% （2 件）"
        ],
        Name: "戰神長槍 (Warlord's Pike)",
        Index: "Warlord's Pike",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 20,
        Code: "pik",
        Properties: [
          {
            PropertyString: "+110-140% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "每 1 秒修復 0.05 點耐久度",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(29-33) to (132-151)"
            }
          ],
          EquipmentType: 1,
          Name: "步戰矛 (Pike)",
          RequiredStrength: 60,
          RequiredDexterity: 45,
          Durability: 250,
          ItemLevel: 24,
          Type: {
            Name: "Spear",
            Index: "Spear",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Talonrage's Fury",
        SetPropertiesString: [
          "+20 力量 （3 件）"
        ],
        Name: "粉碎拳套 (Shattering Fist)",
        Index: "Shattering Fist",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 21,
        Code: "hgl",
        Properties: [
          {
            PropertyString: "+10% 概率造成粉碎打擊",
            Index: 1
          },
          {
            PropertyString: "+20-30 防禦",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "12",
          EquipmentType: 0,
          Name: "鋼鐵護手 (Gauntlets)",
          RequiredStrength: 60,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 27,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "生命回復 +5",
        Index: 0
      },
      {
        PropertyString: "+35% 傷害強化",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 野蠻人技能等級",
        Index: 0
      },
      {
        PropertyString: "+30% 打擊恢復",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 3
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Greyhawk's Mantle",
    Name: "灰鷹的衣鉢 (Greyhawk's Mantle)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Greyhawk's Mantle",
        SetPropertiesString: [
          "生命回復 +3 （4 件）"
        ],
        Name: "灰鷹之翼 (Greyhawk's Wing)",
        Index: "Greyhawk's Wing",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 17,
        RequiredLevel: 19,
        Code: "plt",
        Properties: [
          {
            PropertyString: "+75-100 防禦",
            Index: 0
          },
          {
            PropertyString: "電擊抗性 +15-20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "183-208",
          EquipmentType: 0,
          Name: "鎧甲 (Plate Mail)",
          RequiredStrength: 65,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 24,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Scepter",
        "Set": "Greyhawk's Mantle",
        SetPropertiesString: [
          "被擊中時有 15% 機率施展等級 3 冰封甲 （3 件）"
        ],
        Name: "灰鷹的寒冰烙印 (Greyhawk's Icebrand)",
        Index: "Greyhawk's Icebrand",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 17,
        RequiredLevel: 14,
        Code: "scp",
        Properties: [
          {
            PropertyString: "+80-120% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "增加 10-20 寒冰傷害",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(10-13) to (19-24)"
            }
          ],
          EquipmentType: 1,
          Name: "權杖 (Scepter)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 3,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Auric Shields",
        "Set": "Greyhawk's Mantle",
        SetPropertiesString: [
          "+25% 格擋速度 （3 件）"
        ],
        Name: "灰鷹的偏轉護盾 (Greyhawk's Deflector)",
        Index: "Greyhawk's Deflector",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 17,
        RequiredLevel: 15,
        Code: "pa3",
        Properties: [
          {
            PropertyString: "格擋機率提高 +15%",
            Index: 1
          },
          {
            PropertyString: "鑲孔 (1-4)",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "3 to 9",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "16",
          EquipmentType: 0,
          Name: "紋章盾 (Heraldic Shield)",
          RequiredStrength: 40,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 16,
          Type: {
            Name: "Auric Shields",
            Index: "Auric Shields",
            Class: "pal"
          },
          RequiredClass: "Paladin"
        }
      },
      {
        Type: "Helm",
        "Set": "Greyhawk's Mantle",
        SetPropertiesString: [
          "+20 生命 （3 件）"
        ],
        Name: "灰鷹的面甲 (Greyhawk's Viser)",
        Index: "Greyhawk's Viser",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 17,
        RequiredLevel: 13,
        Code: "fhl",
        Properties: [
          {
            PropertyString: "擊中竊取 3-5% 法力",
            Index: 1
          },
          {
            PropertyString: "+20-30 防禦",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "43-53",
          EquipmentType: 0,
          Name: "全罩盔 (Full Helm)",
          RequiredStrength: 41,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 15,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+8 擊殺生命恢復",
        Index: 0
      },
      {
        PropertyString: "+4 擊殺法力恢復",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 聖騎士技能等級",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 3
      },
      {
        PropertyString: "中毒的時效縮短 60%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Silent Runnings",
    Name: "無聲狂奔 (Silent Runnings)",
    SetItems: [
      {
        Type: "Shield",
        "Set": "Silent Runnings",
        SetPropertiesString: [
          "格擋機率提高 +20% （2 件）"
        ],
        Name: "巨龍側翼 (Dragon's Flank)",
        Index: "Dragon's Flank",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 14,
        RequiredLevel: 18,
        Code: "bsh",
        Properties: [
          {
            PropertyString: "+65-90% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "物理傷害降低 +5-10%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "3 to 6",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "10",
          EquipmentType: 0,
          Name: "骨盾 (Bone Shield)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 19,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Silent Runnings",
        SetPropertiesString: [
          "尋獲魔法物品機率提高 +25% （3 件）"
        ],
        Name: "費利特之爪 (Ferrit's Paw)",
        Index: "Ferrit's Paw",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 12,
        RequiredLevel: 14,
        Code: "vgl",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 0
          },
          {
            PropertyString: "擊中竊取 4-6% 生命",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25-35",
          EquipmentType: 0,
          Name: "厚皮手套 (Heavy Gloves)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 7,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Silent Runnings",
        SetPropertiesString: [
          "物理傷害降低 +8% （3 件）"
        ],
        Name: "龜殼 (Turtle's Shell)",
        Index: "Turtle's Shell",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 22,
        RequiredLevel: 23,
        Code: "ful",
        Properties: [
          {
            PropertyString: "+20% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+90-130% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "286-347",
          EquipmentType: 0,
          Name: "全身鎧甲 (Full Plate Mail)",
          RequiredStrength: 80,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 37,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Silent Runnings",
        SetPropertiesString: [
          "+20 防禦 （3 件）"
        ],
        Name: "野狼獸皮 (Wolf Pelt)",
        Index: "Wolf Pelt",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 14,
        RequiredLevel: 14,
        Code: "tbl",
        Properties: [
          {
            PropertyString: "+35-50 生命",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +10-15%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "26-36",
          EquipmentType: 0,
          Name: "厚腰帶 (Heavy Belt)",
          RequiredStrength: 45,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 20,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Silent Runnings",
        SetPropertiesString: [],
        Name: "猛獸項圈 (Beast Collar)",
        Index: "Beast Collar",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "bhm",
        Properties: [
          {
            PropertyString: "+20-30% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "增加 20-30 魔法傷害",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "33",
          EquipmentType: 0,
          Name: "骸骨頭盔 (Bone Helm)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 22,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20% 跑步 / 行走速度",
        Index: 0
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 2
      },
      {
        PropertyString: "+20% 格擋速度",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 3
      },
      {
        PropertyString: "怪物金幣掉落量提高 +150%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +75%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Snowmane's Jewelry",
    Name: "斯羅曼尼的首飾盒 (Snowmane's Jewelry)",
    SetItems: [
      {
        Type: "Circlet",
        "Set": "Snowmane's Jewelry",
        SetPropertiesString: [
          "+15% 打擊恢復 （3 件）",
          "+20 生命 （2 件）"
        ],
        Name: "珠玉頭環 (Jeweled Circlet)",
        Index: "Jeweled Circlet",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 22,
        RequiredLevel: 22,
        Code: "ci0",
        Properties: [
          {
            PropertyString: "+15 力量",
            Index: 0
          },
          {
            PropertyString: "+15 體能",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "20",
          EquipmentType: 0,
          Name: "頭環 (Circlet)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 35,
          ItemLevel: 24,
          Type: {
            Name: "Circlet",
            Index: "Circlet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Snowmane's Jewelry",
        SetPropertiesString: [
          "物理傷害降低 +10% （4 件）"
        ],
        Name: "寶石腰帶 (Jeweled Belt)",
        Index: "Jeweled Belt",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 22,
        RequiredLevel: 22,
        Code: "hbl",
        Properties: [
          {
            PropertyString: "+100-125% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +10-15%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "18-19",
          EquipmentType: 0,
          Name: "鎧甲腰帶 (Plated Belt)",
          RequiredStrength: 60,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 27,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Snowmane's Jewelry",
        SetPropertiesString: [
          "+30 生命 （3 件）",
          "尋獲魔法物品機率提高 +15% （4 件）"
        ],
        Name: "紅寶指環 (Ruby Ring)",
        Index: "Ruby Ring",
        Enabled: true,
        Rarity: 4,
        ItemLevel: 22,
        RequiredLevel: 22,
        Code: "rin",
        Properties: [
          {
            PropertyString: "所有抗性 +10-15%",
            Index: 0
          },
          {
            PropertyString: "魔法傷害降低 6",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Snowmane's Jewelry",
        SetPropertiesString: [
          "+1 所有技能 （3 件）"
        ],
        Name: "鑽石項鏈 (Diamond Necklace)",
        Index: "Diamond Necklace",
        Enabled: true,
        Rarity: 4,
        ItemLevel: 22,
        RequiredLevel: 22,
        Code: "amu",
        Properties: [
          {
            PropertyString: "所有抗性 +15-20%",
            Index: 0
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +20-30%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "尋獲魔法物品機率提高 +30%",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +15%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+20% 跑步 / 行走速度",
        Index: 3
      },
      {
        PropertyString: "擊中竊取 +5% 法力",
        Index: 1
      },
      {
        PropertyString: "擊中竊取 5% 生命",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Four Seasons",
    Name: "四季 (Four Seasons)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Four Seasons",
        SetPropertiesString: [
          "冰寒抗性上限 +10 （3 件）",
          "寒冰吸引 +10% （2 件）",
          "無法冰凍 （4 件）"
        ],
        Name: "凜冬之心 (Winter's Heart)",
        Index: "Winter's Heart",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 25,
        Code: "aar",
        Properties: [
          {
            PropertyString: "敵人冰寒抗性 -10-15%",
            Index: 0
          },
          {
            PropertyString: "+10-15% 寒冰技能傷害",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "218",
          EquipmentType: 0,
          Name: "上古鎧甲 (Ancient Armor)",
          RequiredStrength: 100,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 40,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Four Seasons",
        SetPropertiesString: [
          "電擊抗性上限 +10 （3 件）",
          "電擊吸引 +10% （2 件）"
        ],
        Name: "早春破曉 (Spring Dawning)",
        Index: "Spring Dawning",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 22,
        Code: "ghm",
        Properties: [
          {
            PropertyString: "敵人電擊抗性 -10-15%",
            Index: 0
          },
          {
            PropertyString: "+10-15% 閃電技能傷害",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "30",
          EquipmentType: 0,
          Name: "重盔 (Great Helm)",
          RequiredStrength: 63,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 23,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Four Seasons",
        SetPropertiesString: [
          "火焰抗性上限 +10 （3 件）",
          "火焰吸引 +10% （2 件）"
        ],
        Name: "盛夏之焰 (Summer Flame)",
        Index: "Summer Flame",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 21,
        Code: "hbt",
        Properties: [
          {
            PropertyString: "敵人火焰抗性 -10-15%",
            Index: 0
          },
          {
            PropertyString: "+10-15% 火焰技能傷害",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "10 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "12",
          EquipmentType: 0,
          Name: "護脛",
          RequiredStrength: 70,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 27,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Four Seasons",
        SetPropertiesString: [
          "毒素抗性上限 ++10 （3 件）",
          "魔法抗性 +10% （2 件）",
          "中毒的時效縮短 75% （4 件）"
        ],
        Name: "晚秋之朽 (Autumn's Decay)",
        Index: "Autumn's Decay",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 19,
        Code: "tgl",
        Properties: [
          {
            PropertyString: "敵人毒素抗性 -10-15%",
            Index: 0
          },
          {
            PropertyString: "+10-15% 毒素技能傷害",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "9",
          EquipmentType: 0,
          Name: "輕型護手 (Light Gauntlets)",
          RequiredStrength: 45,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 20,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+10 所有屬性",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "被擊中時有 15% 機率施展等級 6 電能彈",
        Index: 2
      },
      {
        PropertyString: "被擊中時有 15% 機率施展等級 6 冰霜新星",
        Index: 3
      },
      {
        PropertyString: "被擊中時有 10% 機率施展等級 1 隕石術",
        Index: 4
      },
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Forgotten Treasures",
    Name: "被遺忘的寶藏 (Forgotten Treasures)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "魔法抗性 +10% （4 件）",
          "物理傷害降低 +15% （6 件）"
        ],
        Name: "費爾南德斯的板甲 (Fernandez' Plate)",
        Index: "Fernandez' Plate",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "brs",
        Properties: [
          {
            PropertyString: "+75-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (3)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "115-145",
          EquipmentType: 0,
          Name: "胸鎧 (Breast Plate)",
          RequiredStrength: 30,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 18,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "+30 法力 （2 件）",
          "法力恢復 50% （5 件）"
        ],
        Name: "卡特里娜的面具 (Katriana's Mask)",
        Index: "Katriana's Mask",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "msk",
        Properties: [
          {
            PropertyString: "+60-100% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (3)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "16-20",
          EquipmentType: 0,
          Name: "面具",
          RequiredStrength: 23,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 19,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "擊中竊取 +5% 法力 （4 件）",
          "+50 生命 （3 件）"
        ],
        Name: "盧瑟的腰繩 (Luther's Cord)",
        Index: "Luther's Cord",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 10,
        RequiredLevel: 10,
        Code: "tbl",
        Properties: [
          {
            PropertyString: "+20-30 防禦",
            Index: 0
          },
          {
            PropertyString: "生命回復 +2-5",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "26-36",
          EquipmentType: 0,
          Name: "厚腰帶 (Heavy Belt)",
          RequiredStrength: 45,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 20,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "擊中竊取 5% 生命 （4 件）",
          "+10 力量 （6 件）"
        ],
        Name: "傑尼斯的手套 (Janis' Gloves)",
        Index: "Janis' Gloves",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 10,
        RequiredLevel: 10,
        Code: "vgl",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+20-30 防禦",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25-35",
          EquipmentType: 0,
          Name: "厚皮手套 (Heavy Gloves)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 7,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "+20% 打擊恢復 （3 件）",
          "+10 敏捷 （5 件）"
        ],
        Name: "謝維爾的護脛 (Xavier's Greaves)",
        Index: "Xavier's Greaves",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "tbt",
        Properties: [
          {
            PropertyString: "+30% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "+80-110% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "8 to 16",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "18-21",
          EquipmentType: 0,
          Name: "輕鎧靴 (Light Plated Boots)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 20,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "+25% 格擋速度 （2 件）",
          "格擋機率提高 +20% （4 件）"
        ],
        Name: "昆西的刺盾 (Quincy's Shield)",
        Index: "Quincy's Shield",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 10,
        RequiredLevel: 10,
        Code: "spk",
        Properties: [
          {
            PropertyString: "+100-135% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (3)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "5 to 9",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "32-37",
          EquipmentType: 0,
          Name: "尖刺盾 (Spiked Shield)",
          RequiredStrength: 30,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 11,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+15 力量",
        Index: 0
      },
      {
        PropertyString: "+15 敏捷",
        Index: 2
      },
      {
        PropertyString: "+15 能量",
        Index: 4
      },
      {
        PropertyString: "+15 體能",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +40%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +4%",
        Index: 3
      },
      {
        PropertyString: "怪物金幣掉落量提高 +200%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Insight of Brother Laz",
    Name: "拉兹兄弟的洞察 (Insight of Brother Laz)",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "Insight of Brother Laz",
        SetPropertiesString: [
          "+15 力量 （3 件）"
        ],
        Name: "拉兹兄弟的力量 (Power of Brother Laz)",
        Index: "Power of Brother Laz",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 33,
        Code: "xtg",
        Properties: [
          {
            PropertyString: "攻擊速度 +10%",
            Index: 0
          },
          {
            PropertyString: "擊中竊取 4-6% 法力",
            Index: 1
          },
          {
            PropertyString: "+80-100% 防禦強化",
            Index: 3
          },
          {
            PropertyString: "火焰抗性 +15-20%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "140",
          EquipmentType: 0,
          Name: "戰鬥護手 (Battle Gauntlets)",
          RequiredStrength: 88,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 49,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Auric Shields",
        "Set": "Insight of Brother Laz",
        SetPropertiesString: [
          "被擊中時有 7% 機率施展等級 1 冰封球 （5 件）"
        ],
        Name: "拉兹兄弟的禱告 (Prayer of Brother Laz)",
        Index: "Prayer of Brother Laz",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 38,
        Code: "pa8",
        Properties: [
          {
            PropertyString: "+20% 打擊恢復",
            Index: 2
          },
          {
            PropertyString: "+20% 格擋速度",
            Index: 1
          },
          {
            PropertyString: "格擋機率提高 +20-30%",
            Index: 0
          },
          {
            PropertyString: "+1 防禦 （依角色等級而定）",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "18 to 24",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "129",
          EquipmentType: 0,
          Name: "守護之盾 (Protector Shield)",
          RequiredStrength: 69,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 46,
          Type: {
            Name: "Auric Shields",
            Index: "Auric Shields",
            Class: "pal"
          },
          RequiredClass: "Paladin"
        }
      },
      {
        Type: "Amulet",
        "Set": "Insight of Brother Laz",
        SetPropertiesString: [
          "被擊中時有 9% 機率施展等級 2 心靈震爆 （3 件）",
          "+25 法力 （2 件）"
        ],
        Name: "拉兹兄弟的聖物 (Brother Laz' Holy Symbol)",
        Index: "Brother Laz' Holy Symbol",
        Enabled: true,
        Rarity: 5,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+1 聖騎士技能等級",
            Index: 0
          },
          {
            PropertyString: "+25-50 生命",
            Index: 1
          },
          {
            PropertyString: "電擊抗性 +25-50%",
            Index: 2
          },
          {
            PropertyString: "中毒的時效縮短 60%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Scepter",
        "Set": "Insight of Brother Laz",
        SetPropertiesString: [
          "擊中時有 12% 機率施展等級 1 火牆術 （3 件）",
          "+1 最大傷害 （依角色等級而定） （4 件）"
        ],
        Name: "拉兹兄弟的怒火 (Wrath of Brother Laz)",
        Index: "Wrath of Brother Laz",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 29,
        Code: "9sc",
        Properties: [
          {
            PropertyString: "+1 聖騎士技能等級",
            Index: 2
          },
          {
            PropertyString: "+160-190% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "增加 20-40 傷害",
            Index: 1
          },
          {
            PropertyString: "無視目標防禦",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(53-57) to (102-109)"
            }
          ],
          EquipmentType: 1,
          Name: "符文權杖 (Rune Scepter)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 31,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Insight of Brother Laz",
        SetPropertiesString: [
          "被擊中時有 6% 機率施展等級 2 戰爭狂嘯 （4 件）",
          "生命回復 +3 （5 件）"
        ],
        Name: "拉兹兄弟的信仰 (Brother Laz' Faith)",
        Index: "Brother Laz' Faith",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "xld",
        Properties: [
          {
            PropertyString: "+100-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "法力恢復 50%",
            Index: 3
          },
          {
            PropertyString: "魔法抗性 +15-20%",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 +15%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "558-631",
          EquipmentType: 0,
          Name: "鯊齒戰甲 (Sharktooth Armor)",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 48,
          ItemLevel: 55,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 0
      },
      {
        PropertyString: "+20 力量",
        Index: 2
      },
      {
        PropertyString: "+20 敏捷",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 聖騎士技能等級",
        Index: 0
      },
      {
        PropertyString: "+100 生命",
        Index: 3
      },
      {
        PropertyString: "+50 法力",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +60%",
        Index: 1
      },
      {
        PropertyString: "冰凍時間減半",
        Index: 5
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Hades' Underworld",
    Name: "黑帝斯的地下世界 (Hades' Underworld)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Hades' Underworld",
        SetPropertiesString: [
          "+50 法力 （4 件）"
        ],
        Name: "轉生 (Afterlife)",
        Index: "Afterlife",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 34,
        Code: "xla",
        Properties: [
          {
            PropertyString: "+1-3 召喚技能 （只限死靈法師）",
            Index: 1
          },
          {
            PropertyString: "+4 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "電擊抗性 +25-40%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "270-369",
          EquipmentType: 0,
          Name: "魔皮護甲 (Demonhide Armor)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 28,
          ItemLevel: 37,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Voodoo Heads",
        "Set": "Hades' Underworld",
        SetPropertiesString: [
          "物理傷害降低 +20% （4 件）"
        ],
        Name: "龍巫妖 (Dracolich)",
        Index: "Dracolich",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "ne8",
        Properties: [
          {
            PropertyString: "格擋機率提高 +20-30%",
            Index: 0
          },
          {
            PropertyString: "+2 防禦 （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "火焰抗性 +25-40%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "44",
          EquipmentType: 0,
          Name: "司事首級 (Sexton Trophy)",
          RequiredStrength: 47,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 45,
          Type: {
            Name: "Voodoo Heads",
            Index: "Voodoo Heads",
            Class: "nec"
          },
          RequiredClass: "Necromancer"
        }
      },
      {
        Type: "Ring",
        "Set": "Hades' Underworld",
        SetPropertiesString: [],
        Name: "吸血鬼的聖教軍 (Vampire's Crusade)",
        Index: "Vampire's Crusade",
        Enabled: true,
        Rarity: 5,
        ItemLevel: 30,
        RequiredLevel: 39,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+10% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+1 法力 （依角色等級而定）",
            Index: 2
          },
          {
            PropertyString: "法力恢復 50%",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +8-15%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Hades' Underworld",
        SetPropertiesString: [
          "無法冰凍 （5 件）"
        ],
        Name: "斯蒂克斯之河 (The River Stix)",
        Index: "The River Stix",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 32,
        Code: "xlb",
        Properties: [
          {
            PropertyString: "+30% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "+1 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "冰寒抗性 +25-40%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "26 to 46",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "28",
          EquipmentType: 0,
          Name: "魔皮長靴 (Demonhide Boots)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 36,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Hades' Underworld",
        SetPropertiesString: [
          "怪物金幣掉落量提高 +100% （3 件）",
          "尋獲魔法物品機率提高 +35% （4 件）"
        ],
        Name: "黑帝斯王座 (Lord Hades' Throne)",
        Index: "Lord Hades' Throne",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 41,
        Code: "xrn",
        Properties: [
          {
            PropertyString: "+20% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+100% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "毒素抗性 +25-40%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "158",
          EquipmentType: 0,
          Name: "莊嚴王冠 (Grand Crown)",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 55,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+2 重生",
        Index: 0
      },
      {
        PropertyString: "+7 骷髏專精",
        Index: 2
      },
      {
        PropertyString: "+4 大吼",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 死靈法師技能等級",
        Index: 0
      },
      {
        PropertyString: "寒冰吸引 +20%",
        Index: 2
      },
      {
        PropertyString: "電擊吸引 +20%",
        Index: 3
      },
      {
        PropertyString: "火焰吸引 +20%",
        Index: 1
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Darque's Cabal",
    Name: "達爾凱的陰謀 (Darque's Cabal)",
    SetItems: [
      {
        Type: "Primal Helm",
        "Set": "Darque's Cabal",
        SetPropertiesString: [
          "攻擊速度 +15% （4 件）",
          "+15 最大傷害 （2 件）"
        ],
        Name: "祕社 (Secret Society)",
        Index: "Secret Society",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 40,
        Code: "ba9",
        Properties: [
          {
            PropertyString: "被擊中時有 12% 機率施展等級 6 靜電力場",
            Index: 1
          },
          {
            PropertyString: "+1 野蠻人技能等級",
            Index: 0
          },
          {
            PropertyString: "+100% 防禦強化",
            Index: 3
          },
          {
            PropertyString: "+50-70 生命",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "172",
          EquipmentType: 0,
          Name: "凶蠻頭盔 (Savage Helmet)",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 49,
          Type: {
            Name: "Primal Helm",
            Index: "Primal Helm",
            Class: "bar"
          },
          RequiredClass: "Barbarian"
        }
      },
      {
        Type: "Armor",
        "Set": "Darque's Cabal",
        SetPropertiesString: [
          "+100% 對惡魔的傷害 （2 件）"
        ],
        Name: "墮落天使 (Fallen Angels)",
        Index: "Fallen Angels",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 43,
        Code: "xth",
        Properties: [
          {
            PropertyString: "+180-220% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +20-30%",
            Index: 1
          },
          {
            PropertyString: "鑲孔 (1)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "792-905",
          EquipmentType: 0,
          Name: "雕紋戰甲 (Embossed Plate)",
          RequiredStrength: 125,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 58,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Darque's Cabal",
        SetPropertiesString: [
          "攻擊速度 +40% （2 件）",
          "增加 50-125 傷害 （3 件）",
          "防止怪物自療 （4 件）"
        ],
        Name: "學者之怒 (Savant Fury)",
        Index: "Savant Fury",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 42,
        Code: "9gd",
        Properties: [
          {
            PropertyString: "無法破壞",
            Index: 1
          },
          {
            PropertyString: "+220-300% 傷害強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 0,
              DamageString: "(76-96) to (128-160)"
            },
            {
              Type: 1,
              DamageString: "(150-188) to (256-320)"
            }
          ],
          EquipmentType: 1,
          Name: "處刑劍 (Executioner Sword)",
          RequiredStrength: 170,
          RequiredDexterity: 110,
          Durability: 0,
          ItemLevel: 54,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Darque's Cabal",
        SetPropertiesString: [
          "+20% 格擋速度 （3 件）"
        ],
        Name: "黎明祝福 (Dawn's Blessing)",
        Index: "Dawn's Blessing",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 41,
        Code: "xts",
        Properties: [
          {
            PropertyString: "+35-50% 傷害強化",
            Index: 2
          },
          {
            PropertyString: "+25% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "格擋機率提高 +25-35%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "12 to 16",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "178-194",
          EquipmentType: 0,
          Name: "上古盾 (Ancient Shield)",
          RequiredStrength: 110,
          RequiredDexterity: 0,
          Durability: 80,
          ItemLevel: 56,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+200% 對不死怪物的傷害",
        Index: 0
      },
      {
        PropertyString: "+200% 對惡魔的傷害",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 野蠻人技能等級",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +40%",
        Index: 1
      },
      {
        PropertyString: "+25 所有屬性",
        Index: 2
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 3
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +125%",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Red Havoc's Challenge",
    Name: "赤劫之挑戰 (Red Havoc's Challenge)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Red Havoc's Challenge",
        SetPropertiesString: [
          "+1 最大傷害 （依角色等級而定） （3 件）"
        ],
        Name: "惡狼之嚎 (Cry of the Wolf)",
        Index: "Cry of the Wolf",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 35,
        Code: "xcl",
        Properties: [
          {
            PropertyString: "+20% 跑步 / 行走速度",
            Index: 2
          },
          {
            PropertyString: "+2% 防禦強化 （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "等級 35 召喚恐狼（8 次）",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "477-548",
          EquipmentType: 0,
          Name: "鎖鱗戰甲 (Tigulated Mail)",
          RequiredStrength: 86,
          RequiredDexterity: 0,
          Durability: 36,
          ItemLevel: 43,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Pelt",
        "Set": "Red Havoc's Challenge",
        SetPropertiesString: [
          "尋獲魔法物品機率提高 +25% （2 件）"
        ],
        Name: "滿月狂潮 (Full Moon Frenzy)",
        Index: "Full Moon Frenzy",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 33,
        Code: "dr6",
        Properties: [
          {
            PropertyString: "+2-3 變形技能 （只限德魯伊）",
            Index: 1
          },
          {
            PropertyString: "+180% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "生命上限 +10%",
            Index: 3
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "52",
          EquipmentType: 0,
          Name: "猛狼頭盔 (Alpha Helm)",
          RequiredStrength: 44,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 35,
          Type: {
            Name: "Pelt",
            Index: "Pelt",
            Class: "dru"
          },
          RequiredClass: "Druid"
        }
      },
      {
        Type: "Hammer",
        "Set": "Red Havoc's Challenge",
        SetPropertiesString: [
          "所有抗性 +35% （3 件）"
        ],
        Name: "無辜之折磨 (Torment of Innocence)",
        Index: "Torment of Innocence",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 39,
        Code: "9m9",
        Properties: [
          {
            PropertyString: "攻擊速度 +50%",
            Index: 1
          },
          {
            PropertyString: "+160-200% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+20% 準確率加成",
            Index: 3
          },
          {
            PropertyString: "需求 -40%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(137-159) to (202-234)"
            }
          ],
          EquipmentType: 1,
          Name: "征戰重鎚 (War Club)",
          RequiredStrength: 124,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 45,
          Type: {
            Name: "Hammer",
            Index: "Hammer",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Red Havoc's Challenge",
        SetPropertiesString: [
          "+50 法力 （4 件）"
        ],
        Name: "獸引腰帶 (Drawing Out the Beast)",
        Index: "Drawing Out the Beast",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 32,
        Code: "zlb",
        Properties: [
          {
            PropertyString: "+20% 施法速度",
            Index: 3
          },
          {
            PropertyString: "+90-110% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+30-40 生命",
            Index: 1
          },
          {
            PropertyString: "所有抗性 +10-15%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "54-63",
          EquipmentType: 0,
          Name: "魔皮束帶 (Demonhide Sash)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 36,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+8 狼人變化（只限德魯伊）",
        Index: 0
      },
      {
        PropertyString: "+6 變形術（只限德魯伊）",
        Index: 1
      },
      {
        PropertyString: "+5 狂怒連擊（只限德魯伊）",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 德魯伊技能等級",
        Index: 0
      },
      {
        PropertyString: "+30% 準確率加成",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 3
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +60%",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Mishy's Avatar",
    Name: "米希的化身 (Mishy's Avatar)",
    SetItems: [
      {
        Type: "Boots",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [
          "+20% 打擊恢復 （2 件）"
        ],
        Name: "精靈之優雅 (Elven Grace)",
        Index: "Elven Grace",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 32,
        Code: "xvb",
        Properties: [
          {
            PropertyString: "+5-10 最大傷害",
            Index: 3
          },
          {
            PropertyString: "+120-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+15 敏捷",
            Index: 1
          },
          {
            PropertyString: "冰寒抗性 +20-30%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "28 to 50",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "68",
          EquipmentType: 0,
          Name: "鯊皮靴 (Sharkskin Boots)",
          RequiredStrength: 47,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 39,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [
          "攻擊速度 +15% （3 件）",
          "+25 生命 （4 件）"
        ],
        Name: "林地守護者 (Woodland Protector)",
        Index: "Woodland Protector",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 35,
        Code: "xhn",
        Properties: [
          {
            PropertyString: "+100-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+1 生命 （依角色等級而定）",
            Index: 2
          },
          {
            PropertyString: "中毒的時效縮短 80%",
            Index: 3
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "547-646",
          EquipmentType: 0,
          Name: "鐵網戰甲 (Mesh Armor)",
          RequiredStrength: 92,
          RequiredDexterity: 0,
          Durability: 45,
          ItemLevel: 45,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Circlet",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [],
        Name: "無聲低語 (Silent Whisper)",
        Index: "Silent Whisper",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 40,
        Code: "ci1",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "+20% 施法速度",
            Index: 1
          },
          {
            PropertyString: "擊中竊取 +5% 法力",
            Index: 3
          },
          {
            PropertyString: "+22% 受到的傷害轉為法力",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "30",
          EquipmentType: 0,
          Name: "寶冠 (Coronet)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 52,
          Type: {
            Name: "Circlet",
            Index: "Circlet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [],
        Name: "獄吏的鐐銬 (Warder's Bond)",
        Index: "Warder's Bond",
        Enabled: true,
        Rarity: 5,
        ItemLevel: 35,
        RequiredLevel: 38,
        Code: "rin",
        Properties: [
          {
            PropertyString: "擊中竊取 6% 生命",
            Index: 1
          },
          {
            PropertyString: "擊退",
            Index: 3
          },
          {
            PropertyString: "+10 力量",
            Index: 0
          },
          {
            PropertyString: "+40-50 法力",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [
          "攻擊速度 +20% （5 件）"
        ],
        Name: "少女之吻 (Maiden's Kiss)",
        Index: "Maiden's Kiss",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 33,
        Code: "xmg",
        Properties: [
          {
            PropertyString: "冰寒抗性 +30-40%",
            Index: 3
          },
          {
            PropertyString: "電擊抗性 +30-40%",
            Index: 1
          },
          {
            PropertyString: "火焰抗性 +30-40%",
            Index: 0
          },
          {
            PropertyString: "毒素抗性 +30-40%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "37",
          EquipmentType: 0,
          Name: "重型護腕 (Heavy Bracers)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 43,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amazon Bow",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [
          "增加 25-100 火焰傷害 （6 件）"
        ],
        Name: "特倫特的強弓 (Trent's Caster)",
        Index: "Trent's Caster",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 40,
        Code: "am7",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+170-210% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (3)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(51-58) to (110-127)"
            }
          ],
          EquipmentType: 1,
          Name: "儀禮弓 (Ceremonial Bow)",
          RequiredStrength: 73,
          RequiredDexterity: 110,
          Durability: 0,
          ItemLevel: 47,
          Type: {
            Name: "Amazon Bow",
            Index: "Amazon Bow",
            Class: "ama"
          },
          RequiredClass: "Amazon"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+150 準確率",
        Index: 0
      },
      {
        PropertyString: "+40% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "+10 敏捷",
        Index: 4
      },
      {
        PropertyString: "+10 敏捷",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 亞馬遜技能等級",
        Index: 0
      },
      {
        PropertyString: "+75 生命",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Joel's Sanctuary",
    Name: "喬爾的聖堂 (Joel's Sanctuary)",
    SetItems: [
      {
        Type: "Orb",
        "Set": "Joel's Sanctuary",
        SetPropertiesString: [],
        Name: "特倫特之眼 (Eye of the Trent)",
        Index: "Eye of the Trent",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 32,
        RequiredLevel: 33,
        Code: "ob8",
        Properties: [
          {
            PropertyString: "裝備時賦予等級 4 淨化靈氣",
            Index: 2
          },
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "+20% 施法速度",
            Index: 1
          },
          {
            PropertyString: "法力上限 +20%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "11 to 29"
            }
          ],
          EquipmentType: 1,
          Name: "雲霧之球 (Cloudy Sphere)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 41,
          Type: {
            Name: "Orb",
            Index: "Orb",
            Class: "sor"
          },
          RequiredClass: "Sorceress"
        }
      },
      {
        Type: "Armor",
        "Set": "Joel's Sanctuary",
        SetPropertiesString: [
          "生命回復 +5 （4 件）"
        ],
        Name: "烈火之力 (Power of Fire)",
        Index: "Power of Fire",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 32,
        RequiredLevel: 33,
        Code: "xui",
        Properties: [
          {
            PropertyString: "+10-20% 火焰技能傷害",
            Index: 1
          },
          {
            PropertyString: "敵人火焰抗性 -10-20%",
            Index: 2
          },
          {
            PropertyString: "+100-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "火焰抗性 +35-50%",
            Index: 4
          },
          {
            PropertyString: "火焰吸引 +10-20%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "206-226",
          EquipmentType: 0,
          Name: "鬼魂戰衣 (Ghost Armor)",
          RequiredStrength: 38,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 34,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Joel's Sanctuary",
        SetPropertiesString: [
          "冰凍時間減半 （3 件）"
        ],
        Name: "寒冰之力 (Power of Ice)",
        Index: "Power of Ice",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 32,
        RequiredLevel: 33,
        Code: "xap",
        Properties: [
          {
            PropertyString: "+10-20% 寒冰技能傷害",
            Index: 1
          },
          {
            PropertyString: "敵人冰寒抗性 -10-20%",
            Index: 2
          },
          {
            PropertyString: "+100-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "冰寒抗性 +35-50%",
            Index: 4
          },
          {
            PropertyString: "寒冰吸引 +10-20%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "80-92",
          EquipmentType: 0,
          Name: "戰帽 (War Hat)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 34,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Joel's Sanctuary",
        SetPropertiesString: [
          "格擋機率提高 +20% （2 件）"
        ],
        Name: "閃電之力 (Power of Lightning)",
        Index: "Power of Lightning",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 32,
        RequiredLevel: 33,
        Code: "xuc",
        Properties: [
          {
            PropertyString: "+10-20% 閃電技能傷害",
            Index: 1
          },
          {
            PropertyString: "敵人電擊抗性 -10-20%",
            Index: 2
          },
          {
            PropertyString: "+100-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "電擊抗性 +35-50%",
            Index: 4
          },
          {
            PropertyString: "電擊吸引 +10-20%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "8 to 12",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "84-92",
          EquipmentType: 0,
          Name: "防禦盾 (Defender)",
          RequiredStrength: 38,
          RequiredDexterity: 0,
          Durability: 68,
          ItemLevel: 34,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 法力",
        Index: 0
      },
      {
        PropertyString: "法力恢復 50%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 魔法使技能等級",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "+7 擊殺法力恢復",
        Index: 4
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "JBouley's Scion",
    Name: "傑布雷的子嗣 (JBouley's Scion)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "JBouley's Scion",
        SetPropertiesString: [],
        Name: "暗影忍者 (Shadow Ninja)",
        Index: "Shadow Ninja",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 35,
        Code: "xtu",
        Properties: [
          {
            PropertyString: "+1 閃躲",
            Index: 1
          },
          {
            PropertyString: "+1 閃避",
            Index: 2
          },
          {
            PropertyString: "+1 閃身",
            Index: 3
          },
          {
            PropertyString: "+300-400 防禦",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361-417",
          EquipmentType: 0,
          Name: "格網護甲 (Trellised Armor)",
          RequiredStrength: 61,
          RequiredDexterity: 0,
          Durability: 32,
          ItemLevel: 40,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "JBouley's Scion",
        SetPropertiesString: [
          "所有抗性 +15% （3 件）"
        ],
        Name: "暮風酥撫 (Night's Caress)",
        Index: "Night's Caress",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 32,
        Code: "xlg",
        Properties: [
          {
            PropertyString: "+2 武學技藝 （只限刺客）",
            Index: 2
          },
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+1.5 防禦 （依角色等級而定）",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "28",
          EquipmentType: 0,
          Name: "魔皮手套 (Demonhide Gloves)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 33,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Hand to Hand 2",
        "Set": "JBouley's Scion",
        SetPropertiesString: [
          "擊中竊取 +8% 法力 （4 件）",
          "擊中竊取 8% 生命 （3 件）"
        ],
        Name: "神秘之刃 (Mystic Blades)",
        Index: "Mystic Blades",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 39,
        Code: "9qr",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+160-190% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (1)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(49-55) to (104-116)"
            }
          ],
          EquipmentType: 1,
          Name: "格鬥剪刃 (Scissors Quhab)",
          RequiredStrength: 82,
          RequiredDexterity: 82,
          Durability: 250,
          ItemLevel: 54,
          Type: {
            Name: "Hand to Hand 2",
            Index: "Hand to Hand 2",
            Class: "ass"
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "JBouley's Scion",
        SetPropertiesString: [
          "使目標減慢 15% （2 件）"
        ],
        Name: "隱於墨黑 (Fade to Black)",
        Index: "Fade to Black",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 38,
        Code: "ztb",
        Properties: [
          {
            PropertyString: "+80% 防禦強化",
            Index: 4
          },
          {
            PropertyString: "+25 生命",
            Index: 2
          },
          {
            PropertyString: "+25 法力",
            Index: 3
          },
          {
            PropertyString: "所有抗性 +15%",
            Index: 1
          },
          {
            PropertyString: "You feel incorporeal...",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "66-83",
          EquipmentType: 0,
          Name: "戰鬥腰帶 (Battle Belt)",
          RequiredStrength: 88,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 49,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+33% 致命打擊",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 刺客技能等級",
        Index: 0
      },
      {
        PropertyString: "+100% 機率造成開放傷口",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +40%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Forsaken Divinity",
    Name: "被遺忘的神性 (Forsaken Divinity)",
    SetItems: [
      {
        Type: "Ring",
        "Set": "Forsaken Divinity",
        SetPropertiesString: [],
        Name: "失卻天恩 (Fall From Grace)",
        Index: "Fall From Grace",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "rin",
        Properties: [
          {
            PropertyString: "擊中竊取 4-7% 法力",
            Index: 1
          },
          {
            PropertyString: "擊中竊取 6-9% 生命",
            Index: 0
          },
          {
            PropertyString: "+35-50 生命",
            Index: 2
          },
          {
            PropertyString: "+60-80 法力",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Forsaken Divinity",
        SetPropertiesString: [],
        Name: "泰瑞爾的悲傷 (Tyrial's Grief)",
        Index: "Tyrial's Grief",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+20% 施法速度",
            Index: 2
          },
          {
            PropertyString: "生命回復 +3-5",
            Index: 0
          },
          {
            PropertyString: "法力恢復 45%",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +25-35%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Forsaken Divinity",
        SetPropertiesString: [],
        Name: "天贖不允 (Redemption Denied)",
        Index: "Redemption Denied",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "+10 所有屬性",
            Index: 2
          },
          {
            PropertyString: "所有抗性 +15-25%",
            Index: 3
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +40-50%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Forsaken Divinity",
        SetPropertiesString: [
          "+1 所有技能 （4 件）",
          "怪物金幣掉落量提高 +100% （2 件）",
          "尋獲魔法物品機率提高 +50% （3 件）"
        ],
        Name: "地獄的擁抱 (Hell's Embrace)",
        Index: "Hell's Embrace",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "xtp",
        Properties: [
          {
            PropertyString: "+160-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (4)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "525-725",
          EquipmentType: 0,
          Name: "法師鎧甲 (Mage Plate)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 60,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "獲得的經驗值 -3%",
        Index: 0
      },
      {
        PropertyString: "獲得的經驗值 -5%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +50%",
        Index: 4
      },
      {
        PropertyString: "+200% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 -7%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Volf's Undead Legion",
    Name: "沃爾夫的亡靈軍團 (Volf's Undead Legion)",
    SetItems: [
      {
        Type: "Shield",
        "Set": "Volf's Undead Legion",
        SetPropertiesString: [
          "格擋機率提高 +35% （2 件）"
        ],
        Name: "幽靈騎士的邪惡之盾 (Spectral Knight's Unholy Shield)",
        Index: "Spectral Knight's Unholy Shield",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 38,
        Code: "xsh",
        Properties: [
          {
            PropertyString: "+125-155% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "-10 生命",
            Index: 3
          },
          {
            PropertyString: "所有抗性 +20-30%",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 +15%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "14 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "89-102",
          EquipmentType: 0,
          Name: "陰森盾牌 (Grim Shield)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 48,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Volf's Undead Legion",
        SetPropertiesString: [
          "攻擊速度 +20% （2 件）",
          "+100% 對惡魔的傷害 （4 件）"
        ],
        Name: "死亡騎士的惡魔之刃 (Death Knight's Demon Blade)",
        Index: "Death Knight's Demon Blade",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 37,
        Code: "9bs",
        Properties: [
          {
            PropertyString: "+160-220% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "增加 20-55 傷害",
            Index: 1
          },
          {
            PropertyString: "擊中竊取 15% 生命",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(61-71) to (143-163)"
            }
          ],
          EquipmentType: 1,
          Name: "戰鬥長劍 (Battle Sword)",
          RequiredStrength: 92,
          RequiredDexterity: 43,
          Durability: 250,
          ItemLevel: 40,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Volf's Undead Legion",
        SetPropertiesString: [
          "+1 魔法使技能等級 （4 件）",
          "+15 力量 （3 件）"
        ],
        Name: "巫妖的邪惡顱骨 (Lich's Cranium)",
        Index: "Lich's Cranium",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 39,
        Code: "xh9",
        Properties: [
          {
            PropertyString: "+25% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+60-80 法力",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (1)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129",
          EquipmentType: 0,
          Name: "陰森頭盔 (Grim Helm)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 50,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Volf's Undead Legion",
        SetPropertiesString: [
          "無法冰凍 （4 件）"
        ],
        Name: "骷髏戰士的尸骨板甲 (Skeleton Warrior's Corpse Plate)",
        Index: "Skeleton Warrior's Corpse Plate",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 42,
        Code: "xlt",
        Properties: [
          {
            PropertyString: "+25% 打擊恢復",
            Index: 2
          },
          {
            PropertyString: "+80-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+2 防禦 （依角色等級而定）",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "632-733",
          EquipmentType: 0,
          Name: "聖堂騎士戰甲 (Templar Coat)",
          RequiredStrength: 118,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 52,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "吸取生命 -1",
        Index: 0
      },
      {
        PropertyString: "吸取生命 -2",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+300% 對不死怪物的傷害",
        Index: 3
      },
      {
        PropertyString: "殺死的怪物就此安息",
        Index: 4
      },
      {
        PropertyString: "吸取生命 -2",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +35%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Legacy of Vashna",
    Name: "瓦什納的遺產 (Legacy of Vashna)",
    SetItems: [
      {
        Type: "Knife",
        "Set": "Legacy of Vashna",
        SetPropertiesString: [
          "+8 擊殺生命恢復 （2 件）",
          "+5 擊殺法力恢復 （3 件）"
        ],
        Name: "瓦什納的匕首 (Dagger of Vashna)",
        Index: "Dagger of Vashna",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 30,
        Code: "9dg",
        Properties: [
          {
            PropertyString: "攻擊速度 +75%",
            Index: 1
          },
          {
            PropertyString: "+10% 施法速度",
            Index: 2
          },
          {
            PropertyString: "增加 35-70 傷害",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "41 to 88"
            }
          ],
          EquipmentType: 1,
          Name: "刺擊短劍 (Poignard)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 31,
          Type: {
            Name: "Knife",
            Index: "Knife",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Legacy of Vashna",
        SetPropertiesString: [
          "+5 復生骷髏（2 件）",
          "+3 骷髏專精（3 件）"
        ],
        Name: "瓦什納的的面具 (Mask of Vashna)",
        Index: "Mask of Vashna",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 37,
        Code: "xsk",
        Properties: [
          {
            PropertyString: "+15% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "+10% 施法速度",
            Index: 2
          },
          {
            PropertyString: "+100-115% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129-154",
          EquipmentType: 0,
          Name: "死亡面具 (Death Mask)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 48,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Legacy of Vashna",
        SetPropertiesString: [
          "防止怪物自療 （3 件）"
        ],
        Name: "瓦什納的長袍 (Robes of Vashna)",
        Index: "Robes of Vashna",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 33,
        Code: "xea",
        Properties: [
          {
            PropertyString: "+1 死靈法師技能等級",
            Index: 2
          },
          {
            PropertyString: "+50% 對不死怪物的傷害",
            Index: 3
          },
          {
            PropertyString: "+300-400 防禦",
            Index: 1
          },
          {
            PropertyString: "冰凍時間減半",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361-461",
          EquipmentType: 0,
          Name: "海蛇皮甲 (Serpentskin Armor)",
          RequiredStrength: 43,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 36,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +15% 法力",
        Index: 4
      },
      {
        PropertyString: "擊中竊取 15% 生命",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "Reduces all Vendor Prices -10%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Salander's Tirade",
    Name: "薩蘭德的咆哮 (Salander's Tirade)",
    SetItems: [
      {
        Type: "Polearm",
        "Set": "Salander's Tirade",
        SetPropertiesString: [
          "增加 75-120 火焰傷害 （2 件）"
        ],
        Name: "藍瑟之域 (Lancer's Reach)",
        Index: "Lancer's Reach",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 37,
        Code: "9pa",
        Properties: [
          {
            PropertyString: "攻擊速度 +30%",
            Index: 1
          },
          {
            PropertyString: "+180-240% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "擊退",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(95-115) to (210-255)"
            }
          ],
          EquipmentType: 1,
          Name: "闊頭槍 (Partizan)",
          RequiredStrength: 113,
          RequiredDexterity: 67,
          Durability: 250,
          ItemLevel: 35,
          Type: {
            Name: "Polearm",
            Index: "Polearm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Salander's Tirade",
        SetPropertiesString: [
          "+35 生命 （2 件）"
        ],
        Name: "薩蘭德之甲 (Salander's Mail)",
        Index: "Salander's Mail",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 35,
        Code: "xng",
        Properties: [
          {
            PropertyString: "+25% 打擊恢復",
            Index: 2
          },
          {
            PropertyString: "+120-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +15%",
            Index: 3
          },
          {
            PropertyString: "鑲孔 (1)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "365-429",
          EquipmentType: 0,
          Name: "鍊扣戰甲 (Linked Mail)",
          RequiredStrength: 74,
          RequiredDexterity: 0,
          Durability: 26,
          ItemLevel: 42,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Salander's Tirade",
        SetPropertiesString: [
          "+35 法力 （2 件）"
        ],
        Name: "薩蘭德的護面 (Salander's Visor)",
        Index: "Salander's Visor",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 34,
        Code: "xlm",
        Properties: [
          {
            PropertyString: "+75-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+3 擊殺法力恢復",
            Index: 2
          },
          {
            PropertyString: "+10% 受到的傷害轉為法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "140-160",
          EquipmentType: 0,
          Name: "兜盔",
          RequiredStrength: 59,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 42,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "攻擊速度 +20%",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+30% 打擊恢復",
        Index: 3
      },
      {
        PropertyString: "增加 25-50 傷害",
        Index: 1
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 2
      },
      {
        PropertyString: "+20 擊殺生命恢復",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Jerik's Dragon Armor",
    Name: "傑里克的巨龍防具 (Jerik's Dragon Armor)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Jerik's Dragon Armor",
        SetPropertiesString: [
          "+40% 火焰技能傷害 （2 件）"
        ],
        Name: "赤龍鱗甲 (Red Dragon Scale Mail)",
        Index: "Red Dragon Scale Mail",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 37,
        Code: "xcl",
        Properties: [
          {
            PropertyString: "+4 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "火焰吸引 +35%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "477-548",
          EquipmentType: 0,
          Name: "鎖鱗戰甲 (Tigulated Mail)",
          RequiredStrength: 86,
          RequiredDexterity: 0,
          Durability: 36,
          ItemLevel: 43,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Jerik's Dragon Armor",
        SetPropertiesString: [
          "+30% 格擋速度 （3 件）",
          "格擋機率提高 +20% （2 件）"
        ],
        Name: "黑龍隱盾 (Black Dragon Hide Shield)",
        Index: "Black Dragon Hide Shield",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 37,
        Code: "xit",
        Properties: [
          {
            PropertyString: "+100% 防禦強化",
            Index: 1
          },
          {
            PropertyString: "所有抗性 +60%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "15 to 24",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "135",
          EquipmentType: 0,
          Name: "龍盾 (Dragon Shield)",
          RequiredStrength: 91,
          RequiredDexterity: 0,
          Durability: 76,
          ItemLevel: 45,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Jerik's Dragon Armor",
        SetPropertiesString: [
          "魔法傷害降低 20 （3 件）"
        ],
        Name: "青龍面具 (Green Dragon Mask)",
        Index: "Green Dragon Mask",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "xhm",
        Properties: [
          {
            PropertyString: "+100-125% 防禦強化",
            Index: 2
          },
          {
            PropertyString: "毒素抗性 +50%",
            Index: 0
          },
          {
            PropertyString: "物理傷害降低 20",
            Index: 3
          },
          {
            PropertyString: "中毒的時效縮短 60%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "189-232",
          EquipmentType: 0,
          Name: "翼盔 (Winged Helm)",
          RequiredStrength: 115,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 51,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "所有抗性 +15%",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "-15% Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 1
      },
      {
        PropertyString: "所有抗性上限 +5",
        Index: 4
      },
      {
        PropertyString: "獲得的經驗值 +2%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Onyx's Primal Rage",
    Name: "黑瑪瑙的原始狂暴 (Onyx's Primal Rage)",
    SetItems: [
      {
        Type: "Boots",
        "Set": "Onyx's Primal Rage",
        SetPropertiesString: [
          "+30 力量 （4 件）",
          "物理傷害降低 15 （2 件）",
          "魔法傷害降低 15 （3 件）"
        ],
        Name: "黑瑪瑙的隕星 (Onyx's Fallen Star)",
        Index: "Onyx's Fallen Star",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "uhb",
        Properties: [
          {
            PropertyString: "+25% 跑步 / 行走速度",
            Index: 2
          },
          {
            PropertyString: "+20% 打擊恢復",
            Index: 3
          },
          {
            PropertyString: "+170-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "電擊抗性 +25-35%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "83 to 149",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "138-151",
          EquipmentType: 0,
          Name: "勇士護脛 (Myrmidon Greaves)",
          RequiredStrength: 208,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 85,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Onyx's Primal Rage",
        SetPropertiesString: [
          "攻擊速度 +40% （4 件）",
          "擊中竊取 +7% 法力 （2 件）",
          "擊中竊取 12% 生命 （3 件）"
        ],
        Name: "黑玛瑙的太陽耀斑 (Onyx's Solar Flair)",
        Index: "Onyx's Solar Flair",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "7b7",
        Properties: [
          {
            PropertyString: "+200-300% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "增加 75-200 傷害",
            Index: 1
          },
          {
            PropertyString: "+2 Attacker Takes Damage of （依角色等級而定）",
            Index: 2
          },
          {
            PropertyString: "+10% 受到的傷害轉為法力",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 0,
              DamageString: "(147-171) to (362-416)"
            },
            {
              Type: 1,
              DamageString: "(288-359) to (449-532)"
            }
          ],
          EquipmentType: 1,
          Name: "豪傑大劍 (Champion Sword)",
          RequiredStrength: 163,
          RequiredDexterity: 103,
          Durability: 250,
          ItemLevel: 77,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Onyx's Primal Rage",
        SetPropertiesString: [
          "擊中時有 12% 機率施展等級 19 閃電新星 （2 件）",
          "+50 生命 （3 件）"
        ],
        Name: "黑瑪瑙的超新星 (Onyx's Super Nova)",
        Index: "Onyx's Super Nova",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "7gs",
        Properties: [
          {
            PropertyString: "攻擊速度 +30%",
            Index: 2
          },
          {
            PropertyString: "+200-300% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+3 最大傷害 （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 0,
              DamageString: "(45-60) to (225-300)"
            },
            {
              Type: 1,
              DamageString: "(165-220) to (354-472)"
            }
          ],
          EquipmentType: 1,
          Name: "炎魔之刃 (Balrog Blade)",
          RequiredStrength: 185,
          RequiredDexterity: 87,
          Durability: 250,
          ItemLevel: 71,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Onyx's Primal Rage",
        SetPropertiesString: [
          "被擊中時有 15% 機率施展等級 7 隕石術 （3 件）",
          "+1 野蠻人技能等級 （2 件）"
        ],
        Name: "黑瑪瑙的流星雨 (Onyx's Meteor Shower)",
        Index: "Onyx's Meteor Shower",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "upl",
        Properties: [
          {
            PropertyString: "+40% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+160-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "生命上限 +10-15%",
            Index: 2
          },
          {
            PropertyString: "法力上限 +10-15%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1068-1233",
          EquipmentType: 0,
          Name: "炎魔皮板甲 (Balrog Skin)",
          RequiredStrength: 165,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 76,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Primal Helm",
        "Set": "Onyx's Primal Rage",
        SetPropertiesString: [
          "攻擊速度 +20% （3 件）",
          "+4 準確率 （依角色等級而定） （4 件）",
          "獲得的經驗值 +3% （2 件）"
        ],
        Name: "黑瑪瑙的天體狂暴 (Onyx's Celestial Rage)",
        Index: "Onyx's Celestial Rage",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 79,
        Code: "baf",
        Properties: [
          {
            PropertyString: "+2 野蠻人技能等級",
            Index: 0
          },
          {
            PropertyString: "+15-25 所有屬性",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 +15-20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "117",
          EquipmentType: 0,
          Name: "守護者盔冠 (Guardian Crown)",
          RequiredStrength: 196,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 85,
          Type: {
            Name: "Primal Helm",
            Index: "Primal Helm",
            Class: "bar"
          },
          RequiredClass: "Barbarian"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "所有抗性 +25%",
        Index: 0
      },
      {
        PropertyString: "獲得的經驗值 +2%",
        Index: 2
      },
      {
        PropertyString: "+1 所有技能",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 所有技能",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Brother Laz' Calling",
    Name: "拉兹兄弟的呼喚 (Brother Laz' Calling)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Brother Laz' Calling",
        SetPropertiesString: [
          "+1 聖騎士技能等級 （2 件）",
          "+20% 打擊恢復 （3 件）",
          "獲得的經驗值 +3% （4 件）"
        ],
        Name: "拉兹兄弟的教诲 (Teachings of Brother Laz)",
        Index: "Teachings of Brother Laz",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 81,
        Code: "urn",
        Properties: [
          {
            PropertyString: "+100-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +20-30%",
            Index: 1
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "263-308",
          EquipmentType: 0,
          Name: "日冕之冠 (Corona)",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 85,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Brother Laz' Calling",
        SetPropertiesString: [
          "+1 所有技能 （2 件）",
          "殺死的怪物就此安息 （3 件）",
          "物理傷害降低 +15% （4 件）"
        ],
        Name: "神聖光環 (Holy Aura)",
        Index: "Holy Aura",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 83,
        Code: "uar",
        Properties: [
          {
            PropertyString: "裝備時賦予等級 3-5 聖護靈氣",
            Index: 1
          },
          {
            PropertyString: "+140-190% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "無法冰凍",
            Index: 2
          },
          {
            PropertyString: "中毒的時效縮短 60%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1171-1415",
          EquipmentType: 0,
          Name: "神聖戰甲 (Sacred Armor)",
          RequiredStrength: 232,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 85,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Auric Shields",
        "Set": "Brother Laz' Calling",
        SetPropertiesString: [
          "+15 最小傷害 （3 件）",
          "+33 最大傷害 （2 件）",
          "魔法抗性 +25% （4 件）"
        ],
        Name: "報應 (Retribution)",
        Index: "Retribution",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "pae",
        Properties: [
          {
            PropertyString: "+40% 格擋速度",
            Index: 2
          },
          {
            PropertyString: "格擋機率提高 +33%",
            Index: 1
          },
          {
            PropertyString: "+4 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "+10-20 力量",
            Index: 4
          },
          {
            PropertyString: "所有抗性 +20-30%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "46",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "169",
          EquipmentType: 0,
          Name: "撒卡蘭姆盾 (Zakarum Shield)",
          RequiredStrength: 142,
          RequiredDexterity: 0,
          Durability: 65,
          ItemLevel: 82,
          Type: {
            Name: "Auric Shields",
            Index: "Auric Shields",
            Class: "pal"
          },
          RequiredClass: "Paladin"
        }
      },
      {
        Type: "Gloves",
        "Set": "Brother Laz' Calling",
        SetPropertiesString: [
          "被擊中時有 10% 機率施展等級 3 傷害加深 （2 件）",
          "所有抗性 +15% （3 件）",
          "尋獲魔法物品機率提高 +50% （4 件）"
        ],
        Name: "救贖的榮耀 (Glory of Salvation)",
        Index: "Glory of Salvation",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "utg",
        Properties: [
          {
            PropertyString: "+3 聖護",
            Index: 3
          },
          {
            PropertyString: "+20% 施法速度",
            Index: 0
          },
          {
            PropertyString: "+75-125% 防禦強化",
            Index: 2
          },
          {
            PropertyString: "+60 法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "168-192",
          EquipmentType: 0,
          Name: "聖教軍護手 (Crusader Gauntlets)",
          RequiredStrength: 151,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 76,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Scepter",
        "Set": "Brother Laz' Calling",
        SetPropertiesString: [
          "擊中時有 20% 機率施展等級 8 冰霜新星 （3 件）",
          "+25 敏捷 （2 件）"
        ],
        Name: "天使之觸 (Angel's Touch)",
        Index: "Angel's Touch",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 71,
        Code: "7qs",
        Properties: [
          {
            PropertyString: "攻擊速度 +30%",
            Index: 3
          },
          {
            PropertyString: "+220-300% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "增加 40-120 傷害",
            Index: 2
          },
          {
            PropertyString: "+300% 對惡魔的傷害",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(184-220) to (292-336)"
            }
          ],
          EquipmentType: 1,
          Name: "熾天使節杖 (Seraph Rod)",
          RequiredStrength: 108,
          RequiredDexterity: 69,
          Durability: 250,
          ItemLevel: 76,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+15 所有屬性",
        Index: 0
      },
      {
        PropertyString: "+33% 概率造成粉碎打擊",
        Index: 2
      },
      {
        PropertyString: "+1 所有技能",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 所有技能",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +4%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +75%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "The Mysterious Spin",
    Name: "神秘螺旋 (The Mysterious Spin)",
    SetItems: [
      {
        Type: "Circlet",
        "Set": "The Mysterious Spin",
        SetPropertiesString: [
          "+1.5 防禦 （依角色等級而定） （3 件）",
          "+1.25 生命 （依角色等級而定） （5 件）",
          "+1 法力 （依角色等級而定） （5 件）",
          "所有抗性 +15% （2 件）",
          "所有抗性 +15% （3 件）",
          "怪物金幣掉落量提高 +100% （4 件）",
          "尋獲魔法物品機率提高 +25% （4 件）"
        ],
        Name: "螺旋之謎 (Spin's Enigma)",
        Index: "Spin's Enigma",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 59,
        Code: "ci2",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "40",
          EquipmentType: 0,
          Name: "頭冠 (Tiara)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 25,
          ItemLevel: 70,
          Type: {
            Name: "Circlet",
            Index: "Circlet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "The Mysterious Spin",
        SetPropertiesString: [
          "+20% 施法速度 （5 件）",
          "+20% 打擊恢復 （5 件）",
          "+120% 防禦強化 （3 件）",
          "魔法抗性 +15% （4 件）",
          "所有抗性 +15% （4 件）",
          "物理傷害降低 +15% （2 件）"
        ],
        Name: "螺旋悖論 (Spin's Paradox)",
        Index: "Spin's Paradox",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 68,
        Code: "ula",
        Properties: [
          {
            PropertyString: "+2 所有技能",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "814-925",
          EquipmentType: 0,
          Name: "聖甲蟲殼皮甲 (Scarab Husk)",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 28,
          ItemLevel: 68,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "The Mysterious Spin",
        SetPropertiesString: [
          "所有抗性 +10% （5 件）",
          "寒冰吸引 +10% （2 件）",
          "電擊吸引 +10% （3 件）",
          "火焰吸引 +10% （4 件）",
          "中毒的時效縮短 50% （5 件）",
          "尋獲魔法物品機率提高 +25% （4 件）"
        ],
        Name: "螺旋之秘 (Spin's Mystery)",
        Index: "Spin's Mystery",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 63,
        Code: "ulc",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "180-230",
          EquipmentType: 0,
          Name: "蛛網束帶 (Spiderweb Sash)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 61,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "The Mysterious Spin",
        SetPropertiesString: [
          "+40% 格擋速度 （3 件）",
          "格擋機率提高 +40% （2 件）",
          "+110% 防禦強化 （5 件）",
          "生命回復 +15 （4 件）",
          "法力恢復 75% （4 件）",
          "物理傷害降低 +15% （5 件）"
        ],
        Name: "螺旋難題 (Spin's Conundrum)",
        Index: "Spin's Conundrum",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 84,
        Code: "uow",
        Properties: [
          {
            PropertyString: "需求 -80%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "18 to 28",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "145",
          EquipmentType: 0,
          Name: "禦塔盾 (Aegis)",
          RequiredStrength: 219,
          RequiredDexterity: 0,
          Durability: 92,
          ItemLevel: 79,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Orb",
        "Set": "The Mysterious Spin",
        SetPropertiesString: [
          "+10% 火焰技能傷害 （2 件）",
          "+10% 寒冰技能傷害 （3 件）",
          "+10% 閃電技能傷害 （4 件）",
          "冰寒抗性 +25% （3 件）",
          "電擊抗性 +25% （4 件）",
          "火焰抗性 +25% （2 件）"
        ],
        Name: "螺旋謎題 (Spin's Perplexing Puzzle)",
        Index: "Spin's Perplexing Puzzle",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "obc",
        Properties: [
          {
            PropertyString: "+2 所有技能",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "18 to 50"
            }
          ],
          EquipmentType: 1,
          Name: "異能法珠 (Eldritch Orb)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 67,
          Type: {
            Name: "Orb",
            Index: "Orb",
            Class: "sor"
          },
          RequiredClass: "Sorceress"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+4 所有技能",
        Index: 0
      },
      {
        PropertyString: "+15 緩箭術",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +5%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Darkmage's Astral Projection",
    Name: "黑暗法師的星界投影 (Darkmage's Astral Projection)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Darkmage's Astral Projection",
        SetPropertiesString: [
          "所有抗性 +15% （4 件）",
          "物理傷害降低 +15% （2 件）"
        ],
        Name: "黑暗法師的隕星 (Darkmage's Falling Star)",
        Index: "Darkmage's Falling Star",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "uhn",
        Properties: [
          {
            PropertyString: "無法破壞",
            Index: 3
          },
          {
            PropertyString: "+150-180% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (1)",
            Index: 1
          },
          {
            PropertyString: "無形 （無法修復）",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1100-1400",
          EquipmentType: 0,
          Name: "骸骨網甲 (Boneweave)",
          RequiredStrength: 158,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 62,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Darkmage's Astral Projection",
        SetPropertiesString: [
          "被擊中時有 4% 機率施展等級 20 震波衝擊 （4 件）",
          "+25 力量 （4 件）",
          "+25 敏捷 （3 件）"
        ],
        Name: "黑暗法師的太陽耀斑 (Darkmage's Solar Flair)",
        Index: "Darkmage's Solar Flair",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "umg",
        Properties: [
          {
            PropertyString: "無法破壞",
            Index: 3
          },
          {
            PropertyString: "攻擊速度 +30%",
            Index: 1
          },
          {
            PropertyString: "+125-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "無形 （無法修復）",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "59",
          EquipmentType: 0,
          Name: "護臂 (Vambraces)",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 69,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Darkmage's Astral Projection",
        SetPropertiesString: [
          "被擊中時有 20% 機率施展等級 14 閃電新星 （5 件）",
          "擊中竊取 +6% 法力 （4 件）",
          "擊中竊取 6% 生命 （2 件）"
        ],
        Name: "黑暗法師的超新星 (Darkmage's Super Nova)",
        Index: "Darkmage's Super Nova",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "umb",
        Properties: [
          {
            PropertyString: "無法破壞",
            Index: 3
          },
          {
            PropertyString: "+30% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "+140-170% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "無形 （無法修復）",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "69 to 118",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "108-132",
          EquipmentType: 0,
          Name: "骸骨網靴 (Boneweave Boots)",
          RequiredStrength: 118,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 72,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Mace",
        "Set": "Darkmage's Astral Projection",
        SetPropertiesString: [
          "擊中時有 8% 機率施展等級 12 隕石術 （4 件）",
          "+1 所有技能 （3 件）",
          "+25% 概率造成粉碎打擊 （5 件）"
        ],
        Name: "黑暗法師的流星雨 (Darkmage's Meteor Shower)",
        Index: "Darkmage's Meteor Shower",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "7mt",
        Properties: [
          {
            PropertyString: "無法破壞",
            Index: 3
          },
          {
            PropertyString: "攻擊速度 +25%",
            Index: 1
          },
          {
            PropertyString: "+220-280% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "無形 （無法修復）",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(137-163) to (169-201)"
            }
          ],
          EquipmentType: 1,
          Name: "妖鬼釘頭鎚 (Devil Star)",
          RequiredStrength: 153,
          RequiredDexterity: 44,
          Durability: 0,
          ItemLevel: 70,
          Type: {
            Name: "Mace",
            Index: "Mace",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Pelt",
        "Set": "Darkmage's Astral Projection",
        SetPropertiesString: [
          "+2 德魯伊技能等級 （3 件）",
          "+135 生命 （4 件）",
          "+75 法力 （5 件）"
        ],
        Name: "黑暗法師的天體狂暴 (Darkmage's Celestial Fury)",
        Index: "Darkmage's Celestial Fury",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "dre",
        Properties: [
          {
            PropertyString: "無法破壞",
            Index: 3
          },
          {
            PropertyString: "+20% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+190-220% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "無形 （無法修復）",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "301-332",
          EquipmentType: 0,
          Name: "天翔靈獸帽 (Sky Spirit)",
          RequiredStrength: 113,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 83,
          Type: {
            Name: "Pelt",
            Index: "Pelt",
            Class: "dru"
          },
          RequiredClass: "Druid"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+10 所有屬性",
        Index: 0
      },
      {
        PropertyString: "+20 所有屬性",
        Index: 2
      },
      {
        PropertyString: "+20 所有屬性",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+4 所有技能",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +4%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Phrozen Heart's Mysticism",
    Name: "冰封之心的神秘主義 (Phrozen Heart's Mysticism)",
    SetItems: [
      {
        Type: "Hand to Hand 2",
        "Set": "Phrozen Heart's Mysticism",
        SetPropertiesString: [
          "+20% 概率造成粉碎打擊 （3 件）",
          "+20% 致命打擊 （2 件）",
          "獲得的經驗值 +2% （4 件）"
        ],
        Name: "絕秘之爪 (Cryptic Claws)",
        Index: "Cryptic Claws",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "7tw",
        Properties: [
          {
            PropertyString: "+200-300% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "擊中竊取 11% 生命",
            Index: 1
          },
          {
            PropertyString: "生命回復 +6",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(72-96) to (132-176)"
            }
          ],
          EquipmentType: 1,
          Name: "符紋爪 (Runic Talons)",
          RequiredStrength: 115,
          RequiredDexterity: 115,
          Durability: 250,
          ItemLevel: 81,
          Type: {
            Name: "Hand to Hand 2",
            Index: "Hand to Hand 2",
            Class: "ass"
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Phrozen Heart's Mysticism",
        SetPropertiesString: [
          "物理傷害降低 +20% （2 件）",
          "無法冰凍 （4 件）",
          "中毒的時效縮短 50% （3 件）"
        ],
        Name: "陰影之道 (Way of the Shadow)",
        Index: "Way of the Shadow",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 71,
        Code: "ung",
        Properties: [
          {
            PropertyString: "+30% 打擊恢復",
            Index: 0
          },
          {
            PropertyString: "+160-200% 防禦強化",
            Index: 1
          },
          {
            PropertyString: "+75-100 生命",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1267-1536",
          EquipmentType: 0,
          Name: "鑽石鎖甲 (Diamond Mail)",
          RequiredStrength: 131,
          RequiredDexterity: 0,
          Durability: 26,
          ItemLevel: 72,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Phrozen Heart's Mysticism",
        SetPropertiesString: [
          "攻擊速度 +20% （2 件）",
          "+50% 傷害強化 （3 件）",
          "+15 力量 （5 件）",
          "+15 敏捷 （4 件）"
        ],
        Name: "黎明迷霧 (Dawns Mist)",
        Index: "Dawns Mist",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "uvg",
        Properties: [
          {
            PropertyString: "+100-140% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+40-50 法力",
            Index: 1
          },
          {
            PropertyString: "所有抗性 +10-15%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "106-156",
          EquipmentType: 0,
          Name: "吸血鬼骸骨手套 (Vampirebone Gloves)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 63,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Phrozen Heart's Mysticism",
        SetPropertiesString: [
          "+3 閃躲（2 件）",
          "+3 閃避（3 件）",
          "+3 傳送術（4 件）",
          "踢擊傷害 +15 （5 件）"
        ],
        Name: "足下生羽 (Featherfoot)",
        Index: "Featherfoot",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "ulb",
        Properties: [
          {
            PropertyString: "+40% 跑步 / 行走速度",
            Index: 2
          },
          {
            PropertyString: "+125-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+100-200 防禦",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "65 to 100",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "143-165",
          EquipmentType: 0,
          Name: "龍皮靴 (Wyrmhide Boots)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 60,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Phrozen Heart's Mysticism",
        SetPropertiesString: [
          "踢擊傷害 +10 （3 件）",
          "物理傷害降低 +15% （4 件）",
          "尋獲魔法物品機率提高 +50% （2 件）"
        ],
        Name: "冬日的紛爭 (Winter's Discord)",
        Index: "Winter's Discord",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "uvc",
        Properties: [
          {
            PropertyString: "被擊中時有 10% 機率施展等級 6 冰霜新星",
            Index: 1
          },
          {
            PropertyString: "+20% 準確率加成",
            Index: 2
          },
          {
            PropertyString: "+100-120% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "114-125",
          EquipmentType: 0,
          Name: "吸血鬼牙腰帶 (Vampirefang Belt)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 68,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+1 所有技能",
        Index: 2
      },
      {
        PropertyString: "+1 所有技能",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "被擊中時有 12% 機率施展等級 8 冰封球",
        Index: 5
      },
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +5%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Chaos Energy",
    Name: "渾沌能量 (Chaos Energy)",
    SetItems: [
      {
        Type: "Amulet",
        "Set": "Chaos Energy",
        SetPropertiesString: [
          "所有抗性 +23% （3 件）",
          "尋獲魔法物品機率提高 +35% （4 件）"
        ],
        Name: "力之靈魂石 (Soulstone of Power)",
        Index: "Soulstone of Power",
        Enabled: true,
        Rarity: 2,
        ItemLevel: 85,
        RequiredLevel: 81,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+2 所有技能",
            Index: 0
          },
          {
            PropertyString: "+15% 施法速度",
            Index: 1
          },
          {
            PropertyString: "法力恢復 25%",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 +10%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Chaos Energy",
        SetPropertiesString: [
          "+50 法力 （2 件）",
          "+22% 受到的傷害轉為法力 （5 件）"
        ],
        Name: "引導焦點 (Guiding Focus)",
        Index: "Guiding Focus",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "ukp",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 2
          },
          {
            PropertyString: "+20% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+120-165% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+4-8 擊殺法力恢復",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "224-244",
          EquipmentType: 0,
          Name: "多頭蛇顱盔 (Hydraskull)",
          RequiredStrength: 84,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 63,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Voodoo Heads",
        "Set": "Chaos Energy",
        SetPropertiesString: [
          "+55 法力 （5 件）",
          "所有抗性 +22% （3 件）"
        ],
        Name: "渾沌護盾 (Chaotic Shield)",
        Index: "Chaotic Shield",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 83,
        Code: "nef",
        Properties: [
          {
            PropertyString: "被擊中時有 44% 機率施展等級 17 電能彈",
            Index: 1
          },
          {
            PropertyString: "+3 死靈法師技能等級",
            Index: 0
          },
          {
            PropertyString: "+30% 格擋速度",
            Index: 3
          },
          {
            PropertyString: "格擋機率提高 +20-40%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "103",
          EquipmentType: 0,
          Name: "鮮血之王顱骨 (Bloodlord Skull)",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 85,
          Type: {
            Name: "Voodoo Heads",
            Index: "Voodoo Heads",
            Class: "nec"
          },
          RequiredClass: "Necromancer"
        }
      },
      {
        Type: "Boots",
        "Set": "Chaos Energy",
        SetPropertiesString: [
          "+30% 跑步 / 行走速度 （2 件）",
          "攻擊速度 +20% （4 件）",
          "尋獲魔法物品機率提高 +25% （3 件）"
        ],
        Name: "能量踐踏 (Treads of Energy)",
        Index: "Treads of Energy",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "uvb",
        Properties: [
          {
            PropertyString: "+122 to Minimum Magic Damage",
            Index: 3
          },
          {
            PropertyString: "擊中竊取 3-6% 法力",
            Index: 2
          },
          {
            PropertyString: "+100% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+0.75 能量 （依角色等級而定）",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "60 to 110",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "131-142",
          EquipmentType: 0,
          Name: "聖甲蟲殼皮靴 (Scarabshell Boots)",
          RequiredStrength: 91,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 66,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Chaos Energy",
        SetPropertiesString: [
          "+85 生命 （2 件）",
          "+77 法力 （4 件）",
          "魔法抗性 +20% （5 件）"
        ],
        Name: "神秘頻帶 (Band of Mysticism)",
        Index: "Band of Mysticism",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "urs",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 1
          },
          {
            PropertyString: "+40% 施法速度",
            Index: 0
          },
          {
            PropertyString: "生命上限 +20%",
            Index: 3
          },
          {
            PropertyString: "生命回復 +7-9",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "995-1195",
          EquipmentType: 0,
          Name: "鱗鎧胸甲 (Great Hauberk)",
          RequiredStrength: 118,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 75,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+25 能量",
        Index: 0
      },
      {
        PropertyString: "+25 體能",
        Index: 2
      },
      {
        PropertyString: "+25 敏捷",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+4 所有技能",
        Index: 0
      },
      {
        PropertyString: "+25 力量",
        Index: 5
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +5%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Aiel Shieldmaiden",
    Name: "艾爾女戰士 (Aiel Shieldmaiden)",
    SetItems: [
      {
        Type: "Amazon Javelin",
        "Set": "Aiel Shieldmaiden",
        SetPropertiesString: [
          "+2 亞馬遜技能等級 （3 件）",
          "攻擊速度 +20% （2 件）"
        ],
        Name: "奇亞德的長槍 (Chiad's Lances)",
        Index: "Chiad's Lances",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "amf",
        Properties: [
          {
            PropertyString: "+1-3 標槍與長矛技能 （只限亞馬遜）",
            Index: 2
          },
          {
            PropertyString: "+220-250% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+33% 穿透攻擊",
            Index: 3
          },
          {
            PropertyString: "增加 35-70 傷害",
            Index: 1
          },
          {
            PropertyString: "回復數量",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(131-140) to (242-259)"
            },
            {
              Type: 2,
              DamageString: "(147-157) to (281-301)"
            }
          ],
          EquipmentType: 1,
          Name: "女傑標槍 (Matriarchal Javelin)",
          RequiredStrength: 107,
          RequiredDexterity: 151,
          Durability: 250,
          ItemLevel: 65,
          Type: {
            Name: "Amazon Javelin",
            Index: "Amazon Javelin",
            Class: "ama"
          },
          RequiredClass: "Amazon"
        }
      },
      {
        Type: "Shield",
        "Set": "Aiel Shieldmaiden",
        SetPropertiesString: [
          "所有抗性 +25% （4 件）",
          "物理傷害降低 +20% （3 件）"
        ],
        Name: "奇亞達之墻 (Chiad's Wall)",
        Index: "Chiad's Wall",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "uit",
        Properties: [
          {
            PropertyString: "+30% 格擋速度",
            Index: 3
          },
          {
            PropertyString: "格擋機率提高 +33%",
            Index: 2
          },
          {
            PropertyString: "+180-220% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "需求 -40%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "12 to 34",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "375-428",
          EquipmentType: 0,
          Name: "君主盾 (Monarch)",
          RequiredStrength: 156,
          RequiredDexterity: 0,
          Durability: 86,
          ItemLevel: 72,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Aiel Shieldmaiden",
        SetPropertiesString: [
          "+75 生命 （4 件）",
          "+75 法力 （5 件）"
        ],
        Name: "奇亞德的心脏 (Chiad's Heartbane)",
        Index: "Chiad's Heartbane",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "ucl",
        Properties: [
          {
            PropertyString: "增加 20-50 傷害",
            Index: 3
          },
          {
            PropertyString: "+175-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+35 敏捷",
            Index: 2
          },
          {
            PropertyString: "需求 -35%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1075-1173",
          EquipmentType: 0,
          Name: "綴鱗戰甲 (Loricated Mail)",
          RequiredStrength: 149,
          RequiredDexterity: 0,
          Durability: 36,
          ItemLevel: 73,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Aiel Shieldmaiden",
        SetPropertiesString: [
          "+35 生命 （3 件）",
          "尋獲魔法物品機率提高 +20% （2 件）"
        ],
        Name: "奇亞德的光晕 (Chiad's Halo)",
        Index: "Chiad's Halo",
        Enabled: true,
        Rarity: 2,
        ItemLevel: 60,
        RequiredLevel: 71,
        Code: "rin",
        Properties: [
          {
            PropertyString: "裝備時賦予等級 4 神聖冰凍靈氣",
            Index: 3
          },
          {
            PropertyString: "攻擊速度 +20%",
            Index: 0
          },
          {
            PropertyString: "擊中竊取 6-8% 法力",
            Index: 2
          },
          {
            PropertyString: "擊中竊取 8-12% 生命",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Aiel Shieldmaiden",
        SetPropertiesString: [
          "+25% 閃電技能傷害 （3 件）",
          "+15 擊殺生命恢復 （4 件）"
        ],
        Name: "奇亞德的勇气 (Chiad's Valor)",
        Index: "Chiad's Valor",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "ulc",
        Properties: [
          {
            PropertyString: "敵人電擊抗性 -15%",
            Index: 3
          },
          {
            PropertyString: "+160-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+15 所有屬性",
            Index: 2
          },
          {
            PropertyString: "You feel incorporeal...",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "180-230",
          EquipmentType: 0,
          Name: "蛛網束帶 (Spiderweb Sash)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 61,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+1 所有技能",
        Index: 2
      },
      {
        PropertyString: "獲得的經驗值 +2%",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 所有技能",
        Index: 0
      },
      {
        PropertyString: "+100% 傷害強化",
        Index: 5
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +4%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Myhrginoc's Warbreeder",
    Name: "米爾金諾的戰爭販子 (Myhrginoc's Warbreeder)",
    SetItems: [
      {
        Type: "Axe",
        "Set": "Myhrginoc's Warbreeder",
        SetPropertiesString: [],
        Name: "米爾金諾的獵頭者 (Myhrginoc's Headhunter)",
        Index: "Myhrginoc's Headhunter",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "7ga",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 2
          },
          {
            PropertyString: "+280-320% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+2.25 最大傷害 （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "防止怪物自療",
            Index: 4
          },
          {
            PropertyString: "擊退",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(224-247) to (357-394)"
            }
          ],
          EquipmentType: 1,
          Name: "豪傑斧 (Champion Axe)",
          RequiredStrength: 167,
          RequiredDexterity: 59,
          Durability: 250,
          ItemLevel: 82,
          Type: {
            Name: "Axe",
            Index: "Axe",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Myhrginoc's Warbreeder",
        SetPropertiesString: [],
        Name: "米爾金諾的黑雨 (Myhrginoc's Black Rain)",
        Index: "Myhrginoc's Black Rain",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "uul",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 2
          },
          {
            PropertyString: "+170-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +20-30%",
            Index: 3
          },
          {
            PropertyString: "物理傷害降低 +15-25%",
            Index: 1
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1072-1162",
          EquipmentType: 0,
          Name: "暗影鎧甲 (Shadow Plate)",
          RequiredStrength: 230,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 83,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Myhrginoc's Warbreeder",
        SetPropertiesString: [],
        Name: "米爾金諾的緋紅聖教军 (Myhrginoc's Crimson Crusader)",
        Index: "Myhrginoc's Crimson Crusader",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "ulm",
        Properties: [
          {
            PropertyString: "被擊中時有 12% 機率施展等級 4 戰爭狂嘯",
            Index: 3
          },
          {
            PropertyString: "+2 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "生命上限 +10%",
            Index: 1
          },
          {
            PropertyString: "法力上限 +10%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "255-305",
          EquipmentType: 0,
          Name: "覆頰盔 (Armet)",
          RequiredStrength: 109,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 68,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Myhrginoc's Warbreeder",
        SetPropertiesString: [
          "+22% 概率造成粉碎打擊 （2 件）",
          "+16% 致命打擊 （3 件）"
        ],
        Name: "米爾金諾的死亡商販 (Myhrginoc's Deathmonger)",
        Index: "Myhrginoc's Deathmonger",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 79,
        Code: "uhg",
        Properties: [
          {
            PropertyString: "+10 近戰精通",
            Index: 2
          },
          {
            PropertyString: "攻擊速度 +15%",
            Index: 1
          },
          {
            PropertyString: "+30-40% 傷害強化",
            Index: 3
          },
          {
            PropertyString: "+100-130% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "138-157",
          EquipmentType: 0,
          Name: "巨魔護手 (Ogre Gauntlets)",
          RequiredStrength: 185,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 85,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "攻擊速度 +30%",
        Index: 0
      },
      {
        PropertyString: "增加 25-50 傷害",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "擊中竊取 +10% 法力",
        Index: 4
      },
      {
        PropertyString: "擊中竊取 10% 生命",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      },
      {
        PropertyString: "+15 所有屬性",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Nefarious Ways",
    Name: "邪惡之路 (Nefarious Ways)",
    SetItems: [
      {
        Type: "Polearm",
        "Set": "Nefarious Ways",
        SetPropertiesString: [
          "怪物金幣掉落量提高 +4% （依角色等級而定） （3 件）",
          "尋獲魔法物品機率提高 +2% （依角色等級而定） （2 件）"
        ],
        Name: "罪與貪 (Sin and Greed)",
        Index: "Sin and Greed",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "7s8",
        Properties: [
          {
            PropertyString: "擊中時有 15% 機率施展等級 15 昏暗視野",
            Index: 3
          },
          {
            PropertyString: "攻擊速度 +40%",
            Index: 2
          },
          {
            PropertyString: "+400-500% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "需求提高 20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(60-72) to (705-846)"
            }
          ],
          EquipmentType: 1,
          Name: "斬鐮 (Thresher)",
          RequiredStrength: 152,
          RequiredDexterity: 118,
          Durability: 250,
          ItemLevel: 71,
          Type: {
            Name: "Polearm",
            Index: "Polearm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Nefarious Ways",
        SetPropertiesString: [],
        Name: "邪惡衝動 (Wicked Impulse)",
        Index: "wicked Impulse",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "ult",
        Properties: [
          {
            PropertyString: "攻擊速度 +30%",
            Index: 3
          },
          {
            PropertyString: "+100-160% 傷害強化",
            Index: 2
          },
          {
            PropertyString: "+40% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+125-175% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "844-949",
          EquipmentType: 0,
          Name: "地獄鍛甲 (Hellforge Plate)",
          RequiredStrength: 196,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 78,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Nefarious Ways",
        SetPropertiesString: [
          "尋獲魔法物品機率提高 +30% （3 件）"
        ],
        Name: "惡名在外 (Evil Reputation)",
        Index: "Evil Reputation",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 76,
        Code: "utb",
        Properties: [
          {
            PropertyString: "+50% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "擊中竊取 7% 生命",
            Index: 2
          },
          {
            PropertyString: "+200-250 防禦",
            Index: 0
          },
          {
            PropertyString: "+15-25 敏捷",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "50 to 145",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "168-186",
          EquipmentType: 0,
          Name: "幻鏡戰靴 (Mirrored Boots)",
          RequiredStrength: 163,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 81,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Nefarious Ways",
        SetPropertiesString: [
          "+7 擊殺法力恢復 （2 件）"
        ],
        Name: "惡毒低語 (Noxious Whispers)",
        Index: "Noxious Whispers",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "usk",
        Properties: [
          {
            PropertyString: "+1-2 所有技能",
            Index: 2
          },
          {
            PropertyString: "+150-200 生命",
            Index: 0
          },
          {
            PropertyString: "+75-100 法力",
            Index: 1
          },
          {
            PropertyString: "+15-25 擊殺生命恢復",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "101",
          EquipmentType: 0,
          Name: "惡魔頭骨 (Demonhead)",
          RequiredStrength: 102,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 74,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "吸取生命 -3",
        Index: 0
      },
      {
        PropertyString: "獲得的經驗值 -10%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+5 所有技能",
        Index: 0
      },
      {
        PropertyString: "+50% 概率造成粉碎打擊",
        Index: 3
      },
      {
        PropertyString: "+50% 致命打擊",
        Index: 2
      },
      {
        PropertyString: "殺死的怪物就此安息",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +100%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Kraj's Memorial",
    Name: "克拉伊的紀念館 (Kraj's Memorial)",
    SetItems: [
      {
        Type: "Amulet",
        "Set": "Kraj's Memorial",
        SetPropertiesString: [
          "所有抗性 +18% （2 件）",
          "冰凍時間減半 （3 件）"
        ],
        Name: "永恒安眠 (Eternal Sleep)",
        Index: "Eternal Sleep",
        Enabled: true,
        Rarity: 2,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+2 所有技能",
            Index: 0
          },
          {
            PropertyString: "殺死的怪物就此安息",
            Index: 1
          },
          {
            PropertyString: "生命上限 +10%",
            Index: 2
          },
          {
            PropertyString: "法力上限 +10%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Kraj's Memorial",
        SetPropertiesString: [
          "裝備時賦予等級 4 淨化靈氣 （4 件）",
          "+25% 打擊恢復 （3 件）",
          "格擋機率提高 +35% （2 件）"
        ],
        Name: "平靜寧和 (Calming Peace)",
        Index: "Calming Peace",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 83,
        Code: "uow",
        Properties: [
          {
            PropertyString: "+140-160% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+2 防禦 （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "+125-150 防禦",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 +25-35%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "18 to 28",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "145",
          EquipmentType: 0,
          Name: "禦塔盾 (Aegis)",
          RequiredStrength: 219,
          RequiredDexterity: 0,
          Durability: 92,
          ItemLevel: 79,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Kraj's Memorial",
        SetPropertiesString: [
          "+70 生命 （3 件）"
        ],
        Name: "絲綢壽衣 (Silk Shroud)",
        Index: "Silk Shroud",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 79,
        Code: "uld",
        Properties: [
          {
            PropertyString: "+25% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+100-130% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "電擊抗性 +25-50%",
            Index: 3
          },
          {
            PropertyString: "火焰抗性 +25-50%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "417",
          EquipmentType: 0,
          Name: "海怪之殼 (Kraken Shell)",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 48,
          ItemLevel: 81,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Mace",
        "Set": "Kraj's Memorial",
        SetPropertiesString: [
          "攻擊速度 +25% （2 件）",
          "+18 擊殺生命恢復 （3 件）",
          "+3 擊殺法力恢復 （4 件）"
        ],
        Name: "神廟守衛 (Temple Guardian)",
        Index: "Temple Guardian",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "7fl",
        Properties: [
          {
            PropertyString: "+8 熱忱打擊",
            Index: 3
          },
          {
            PropertyString: "+220-250% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+75 最小傷害",
            Index: 1
          },
          {
            PropertyString: "+75% 準確率加成",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(84-85) to (256-280)"
            }
          ],
          EquipmentType: 1,
          Name: "罪罰連枷 (Scourge)",
          RequiredStrength: 125,
          RequiredDexterity: 77,
          Durability: 250,
          ItemLevel: 76,
          Type: {
            Name: "Mace",
            Index: "Mace",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "獲得的經驗值 +2%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +75%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "增加 150-250 寒冰傷害",
        Index: 4
      },
      {
        PropertyString: "+100% 機率造成開放傷口",
        Index: 2
      },
      {
        PropertyString: "防止怪物自療",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "The Darkest Weaves",
    Name: "至暗編制 (The Darkest Weaves)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "The Darkest Weaves",
        SetPropertiesString: [
          "+50% 打擊恢復 （2 件）"
        ],
        Name: "碎裂之心 (Sundered Heart)",
        Index: "Sundered Heart",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 76,
        Code: "uth",
        Properties: [
          {
            PropertyString: "+170-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (4)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "433",
          EquipmentType: 0,
          Name: "漆護鎧甲 (Lacquered Plate)",
          RequiredStrength: 208,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 82,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "The Darkest Weaves",
        SetPropertiesString: [
          "+1 最大傷害 （依角色等級而定） （2 件）"
        ],
        Name: "掠魂者 (Soulreaver)",
        Index: "Soulreaver",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "7cr",
        Properties: [
          {
            PropertyString: "+220-300% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (6)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "81 to 185"
            }
          ],
          EquipmentType: 1,
          Name: "幻化之刃 (Phase Blade)",
          RequiredStrength: 25,
          RequiredDexterity: 136,
          Durability: 0,
          ItemLevel: 73,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "The Darkest Weaves",
        SetPropertiesString: [
          "+50% 格擋速度 （2 件）"
        ],
        Name: "憎恨投擲 (Throws of Hatred)",
        Index: "Throws of Hatred",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 78,
        Code: "ush",
        Properties: [
          {
            PropertyString: "格擋機率提高 +30-50%",
            Index: 1
          },
          {
            PropertyString: "+170-210% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (3)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "24 to 38",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "429-492",
          EquipmentType: 0,
          Name: "食人妖骨盾 (Troll Nest)",
          RequiredStrength: 156,
          RequiredDexterity: 0,
          Durability: 74,
          ItemLevel: 76,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20 所有屬性",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+50% 跑步 / 行走速度",
        Index: 2
      },
      {
        PropertyString: "增加 300-500 火焰傷害",
        Index: 4
      },
      {
        PropertyString: "法力恢復 75%",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Blood Raven's Despair",
    Name: "血鴉的絕望 (Blood Raven's Despair)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Blood Raven's Despair",
        SetPropertiesString: [
          "+10 所有屬性 （2 件）"
        ],
        Name: "血鴉的痛苦 (Blood Raven's Pain)",
        Index: "Blood Raven's Pain",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "uh9",
        Properties: [
          {
            PropertyString: "+160-220 防禦",
            Index: 0
          },
          {
            PropertyString: "+80-100 生命",
            Index: 1
          },
          {
            PropertyString: "+75-100 法力",
            Index: 2
          },
          {
            PropertyString: "+15% 受到的傷害轉為法力",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "252-303",
          EquipmentType: 0,
          Name: "骸骨面罩 (Bone Visage)",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 84,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Blood Raven's Despair",
        SetPropertiesString: [
          "擊中竊取 +6% 法力 （2 件）"
        ],
        Name: "血鴉的诅咒 (Blood Raven's Curse)",
        Index: "Blood Raven's Curse",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "utu",
        Properties: [
          {
            PropertyString: "+25% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "擊中竊取 9% 生命",
            Index: 3
          },
          {
            PropertyString: "+675-900 防禦",
            Index: 0
          },
          {
            PropertyString: "+20-30 力量",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1050-1275",
          EquipmentType: 0,
          Name: "鋼線毛皮甲 (Wire Fleece)",
          RequiredStrength: 111,
          RequiredDexterity: 0,
          Durability: 32,
          ItemLevel: 70,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Bow",
        "Set": "Blood Raven's Despair",
        SetPropertiesString: [
          "+10 熾炎箭（2 件）"
        ],
        Name: "血鴉的救赎 (Blood Raven's Redemption)",
        Index: "Blood Raven's Redemption",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "6lb",
        Properties: [
          {
            PropertyString: "裝備時賦予等級 5 專注靈氣",
            Index: 4
          },
          {
            PropertyString: "+10-12 寒冰箭",
            Index: 3
          },
          {
            PropertyString: "+200-300% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+35-70 最小傷害",
            Index: 1
          },
          {
            PropertyString: "+100-150 最大傷害",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(80-130) to (277-386)"
            }
          ],
          EquipmentType: 1,
          Name: "暗影弓 (Shadow Bow)",
          RequiredStrength: 52,
          RequiredDexterity: 188,
          Durability: 0,
          ItemLevel: 63,
          Type: {
            Name: "Bow",
            Index: "Bow",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+100% 穿透攻擊",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "使目標減慢 25%",
        Index: 2
      },
      {
        PropertyString: "擊退",
        Index: 1
      },
      {
        PropertyString: "8-12% 機率將目標復生為：PlagueBearer",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Narrow Path Between Light and Darkness",
    Name: "光黯狹隙 (Narrow Path Between Light and Darkness)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Narrow Path Between Light and Darkness",
        SetPropertiesString: [
          "被擊中時有 25% 機率施展等級 1 冰霜新星 （3 件）",
          "攻擊速度 +15% （2 件）"
        ],
        Name: "查爾的死亡鬼臉 (Char's Grimace of Death)",
        Index: "Char's Grimace of Death",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 62,
        Code: "xh9",
        Properties: [
          {
            PropertyString: "+113% 防禦強化",
            Index: 3
          },
          {
            PropertyString: "+10 力量",
            Index: 1
          },
          {
            PropertyString: "+10 敏捷",
            Index: 2
          },
          {
            PropertyString: "照亮範圍 -2",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129",
          EquipmentType: 0,
          Name: "陰森頭盔 (Grim Helm)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 50,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Narrow Path Between Light and Darkness",
        SetPropertiesString: [
          "+45 法力 （2 件）",
          "法力恢復 10% （4 件）",
          "魔法傷害降低 10 （3 件）"
        ],
        Name: "查爾的晦澀空環 (Char's Annulus of Obscurity)",
        Index: "Char's Annulus of Obscurity",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 40,
        RequiredLevel: 51,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+1 聖騎士技能等級",
            Index: 1
          },
          {
            PropertyString: "+12-15 庇護",
            Index: 2
          },
          {
            PropertyString: "照亮範圍 -1",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Narrow Path Between Light and Darkness",
        SetPropertiesString: [
          "+45 生命 （2 件）",
          "物理傷害降低 10 （3 件）"
        ],
        Name: "查爾的幸運反射 (Char's Blessed Reflection)",
        Index: "Char's Blessed Reflection",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 40,
        RequiredLevel: 51,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+1 死靈法師技能等級",
            Index: 1
          },
          {
            PropertyString: "+8-12 衰老",
            Index: 2
          },
          {
            PropertyString: "照亮範圍 +1",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Scepter",
        "Set": "Narrow Path Between Light and Darkness",
        SetPropertiesString: [
          "+13-16 to Merc Static Field （3 件）",
          "增加 1-50 電擊傷害 （2 件）",
          "火焰抗性 +15% （4 件）"
        ],
        Name: "查爾的福光之手 (Char's Hand of Blessed Light)",
        Index: "Char's Hand of Blessed Light",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 67,
        Code: "7sc",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 3
          },
          {
            PropertyString: "+1 防禦靈氣 （只限聖騎士）",
            Index: 4
          },
          {
            PropertyString: "+75-110% 傷害強化",
            Index: 1
          },
          {
            PropertyString: "+15% 施法速度",
            Index: 2
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(70-84) to (91-109)"
            }
          ],
          EquipmentType: 1,
          Name: "強威權杖 (Mighty Scepter)",
          RequiredStrength: 125,
          RequiredDexterity: 65,
          Durability: 250,
          ItemLevel: 62,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Narrow Path Between Light and Darkness",
        SetPropertiesString: [
          "+1 所有技能 （3 件）"
        ],
        Name: "查爾的殼甲 (Char's Carapace)",
        Index: "Char's Carapace",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 65,
        Code: "uui",
        Properties: [
          {
            PropertyString: "+65-110% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +15-25%",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 +10-15%",
            Index: 3
          },
          {
            PropertyString: "鑲孔 (1)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361",
          EquipmentType: 0,
          Name: "灰暮罩衣 (Dusk Shroud)",
          RequiredStrength: 77,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 65,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 生命",
        Index: 0
      },
      {
        PropertyString: "+50 法力",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 2
      },
      {
        PropertyString: "所有抗性上限 +10",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Treasure Hunter",
    Name: "寶藏獵人 (Treasure Hunter)",
    SetItems: [
      {
        Type: "Belt",
        "Set": "Treasure Hunter",
        SetPropertiesString: [],
        Name: "王者裹腰 (Kingpin's Wrap)",
        Index: "Kingpin's Wrap",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 25,
        Code: "ztb",
        Properties: [
          {
            PropertyString: "攻擊速度 +10%",
            Index: 3
          },
          {
            PropertyString: "+40-60% 防禦強化",
            Index: 4
          },
          {
            PropertyString: "+25-35 防禦",
            Index: 2
          },
          {
            PropertyString: "怪物金幣掉落量提高 +50-80%",
            Index: 5
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +30%",
            Index: 0
          },
          {
            PropertyString: "照亮範圍 +2",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "66-83",
          EquipmentType: 0,
          Name: "戰鬥腰帶 (Battle Belt)",
          RequiredStrength: 88,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 49,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Treasure Hunter",
        SetPropertiesString: [],
        Name: "王者之脛 (Kingpin's Greaves)",
        Index: "Kingpin's Greaves",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 42,
        Code: "xtb",
        Properties: [
          {
            PropertyString: "+25% 跑步 / 行走速度",
            Index: 4
          },
          {
            PropertyString: "增加 15-25 傷害",
            Index: 6
          },
          {
            PropertyString: "+150-190% 防禦強化",
            Index: 5
          },
          {
            PropertyString: "+10 力量",
            Index: 1
          },
          {
            PropertyString: "+10 體能",
            Index: 0
          },
          {
            PropertyString: "攻擊者反傷 +5-10",
            Index: 7
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +30-50%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "37 to 64",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "90-100",
          EquipmentType: 0,
          Name: "戰鬥靴 (Battle Boots)",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 49,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Treasure Hunter",
        SetPropertiesString: [
          "+10 體能 （2 件）",
          "+10 能量 （3 件）"
        ],
        Name: "王者之怒 (Kingpin's Ire)",
        Index: "Kingpin's Ire",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 42,
        Code: "xpl",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "+160-200% 防禦強化",
            Index: 2
          },
          {
            PropertyString: "魔法傷害降低 10",
            Index: 4
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +1.25% （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "每 1 秒修復 0.2 點耐久度",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "531-632",
          EquipmentType: 0,
          Name: "赤褐戰甲 (Russet Armor)",
          RequiredStrength: 97,
          RequiredDexterity: 0,
          Durability: 90,
          ItemLevel: 49,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Treasure Hunter",
        SetPropertiesString: [
          "+44 生命 （5 件）",
          "尋獲魔法物品機率提高 +15% （4 件）"
        ],
        Name: "王者之印 (Kingpin's Signet)",
        Index: "Kingpin's Signet",
        Enabled: true,
        Rarity: 4,
        ItemLevel: 7,
        RequiredLevel: 7,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+50-80 準確率",
            Index: 2
          },
          {
            PropertyString: "魔法傷害降低 3",
            Index: 0
          },
          {
            PropertyString: "攻擊者反傷 +3-7",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +10-15%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Treasure Hunter",
        SetPropertiesString: [],
        Name: "王者之冠 (Kingpin's Crown)",
        Index: "Kingpin's Crown",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 61,
        Code: "uap",
        Properties: [
          {
            PropertyString: "+2 所有技能",
            Index: 3
          },
          {
            PropertyString: "+1.5 生命 （依角色等級而定）",
            Index: 2
          },
          {
            PropertyString: "+1.5 法力 （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "+2 所有屬性",
            Index: 0
          },
          {
            PropertyString: "物理傷害降低 +10%",
            Index: 5
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +50%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "98",
          EquipmentType: 0,
          Name: "軍帽 (Shako)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 58,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Treasure Hunter",
        SetPropertiesString: [
          "增加 50-120 傷害 （6 件）"
        ],
        Name: "領袖之刃 (Kingpin's Blade)",
        Index: "Kingpin's Blade",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 35,
        Code: "9fc",
        Properties: [
          {
            PropertyString: "+60-120% 傷害強化",
            Index: 4
          },
          {
            PropertyString: "+5-15 敏捷",
            Index: 5
          },
          {
            PropertyString: "+15 法力",
            Index: 3
          },
          {
            PropertyString: "怪物金幣掉落量提高 +2.5% （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +1% （依角色等級而定）",
            Index: 2
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(25-35) to (56-77)"
            }
          ],
          EquipmentType: 1,
          Name: "印度彎刀 (Tulwar)",
          RequiredStrength: 70,
          RequiredDexterity: 42,
          Durability: 250,
          ItemLevel: 37,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 1
      },
      {
        PropertyString: "所有抗性 +35%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +200%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Yohann's Savant",
    Name: "亞漢的博學 (Yohann's Savant)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Yohann's Savant",
        SetPropertiesString: [],
        Name: "睿者之帽 (Wiseman's Cap)",
        Index: "Wiseman's Cap",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 25,
        RequiredLevel: 28,
        Code: "crn",
        Properties: [
          {
            PropertyString: "+1 魔法使技能等級",
            Index: 0
          },
          {
            PropertyString: "敵人電擊抗性 -10-15%",
            Index: 3
          },
          {
            PropertyString: "電擊抗性 +15-25%",
            Index: 2
          },
          {
            PropertyString: "+2-3 擊殺法力恢復",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25",
          EquipmentType: 0,
          Name: "王冠 (Crown)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 29,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Yohann's Savant",
        SetPropertiesString: [
          "生命回復 +5 （4 件）"
        ],
        Name: "聖者皮甲 (Sage's Leather)",
        Index: "Sage's Leather",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 32,
        RequiredLevel: 33,
        Code: "xla",
        Properties: [
          {
            PropertyString: "+15 力量",
            Index: 0
          },
          {
            PropertyString: "+55-75 生命",
            Index: 3
          },
          {
            PropertyString: "物理傷害降低 15",
            Index: 1
          },
          {
            PropertyString: "魔法傷害降低 15",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "270-369",
          EquipmentType: 0,
          Name: "魔皮護甲 (Demonhide Armor)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 28,
          ItemLevel: 37,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Yohann's Savant",
        SetPropertiesString: [
          "尋獲魔法物品機率提高 +35% （3 件）"
        ],
        Name: "知識手套 (Gloves of Knowledge)",
        Index: "Gloves of Knowledge",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 38,
        Code: "xmg",
        Properties: [
          {
            PropertyString: "+20% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+35-45 法力",
            Index: 0
          },
          {
            PropertyString: "+10-15 擊殺生命恢復",
            Index: 2
          },
          {
            PropertyString: "+1-3 擊殺法力恢復",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "37",
          EquipmentType: 0,
          Name: "重型護腕 (Heavy Bracers)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 43,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Staff",
        "Set": "Yohann's Savant",
        SetPropertiesString: [
          "+1 旋風斬（4 件）",
          "擊中竊取 +5% 法力 （3 件）"
        ],
        Name: "奧術戰杖 (Arcane Battlestaff)",
        Index: "Arcane Battlestaff",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 23,
        Code: "8bs",
        Properties: [
          {
            PropertyString: "攻擊速度 +30%",
            Index: 2
          },
          {
            PropertyString: "+110-140% 傷害強化",
            Index: 1
          },
          {
            PropertyString: "增加 35-80 傷害",
            Index: 0
          },
          {
            PropertyString: "擊中竊取 6-8% 生命",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(64-68) to (151-161)"
            }
          ],
          EquipmentType: 1,
          Name: "哥德法杖 (Gothic Staff)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 42,
          Type: {
            Name: "Staff",
            Index: "Staff",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+125 法力",
        Index: 1
      },
      {
        PropertyString: "法力恢復 75%",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +35%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +75%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Zhoulomcrist's Dread",
    Name: "周洛姆·克里斯特的恐惧 (Zhoulomcrist's Dread)",
    SetItems: [
      {
        Type: "Helm",
        "Set": "Zhoulomcrist's Dread",
        SetPropertiesString: [
          "+1 暖流（4 件）",
          "+1 暖流（5 件）",
          "增加 25-35 寒冰傷害 （3 件）"
        ],
        Name: "邪惡之欲 (Unholy Desires)",
        Index: "Unholy Desires",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 25,
        RequiredLevel: 31,
        Code: "xap",
        Properties: [
          {
            PropertyString: "+15% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+35-50 法力",
            Index: 0
          },
          {
            PropertyString: "+12-15% 受到的傷害轉為法力",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "80-92",
          EquipmentType: 0,
          Name: "戰帽 (War Hat)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 34,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Axe",
        "Set": "Zhoulomcrist's Dread",
        SetPropertiesString: [
          "殺死敵人時有 20% 機率施展等級 15 偷取生命 （4 件）"
        ],
        Name: "至暗之願 (Darkest Wishes)",
        Index: "Darkest Wishes",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "72a",
        Properties: [
          {
            PropertyString: "+8 熱忱打擊",
            Index: 3
          },
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+220-260% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "擊退",
            Index: 2
          },
          {
            PropertyString: "等級 15 黏土魔像（65 次）",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(105-118) to (211-237)"
            }
          ],
          EquipmentType: 1,
          Name: "雙頭斧 (Ettin Axe)",
          RequiredStrength: 145,
          RequiredDexterity: 45,
          Durability: 250,
          ItemLevel: 70,
          Type: {
            Name: "Axe",
            Index: "Axe",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Zhoulomcrist's Dread",
        SetPropertiesString: [
          "物理傷害降低 20 （3 件）",
          "魔法傷害降低 25 （4 件）"
        ],
        Name: "附影之甲 (Shadowed Plate)",
        Index: "Shadowed Plate",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "utp",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 2
          },
          {
            PropertyString: "+30% 打擊恢復",
            Index: 0
          },
          {
            PropertyString: "+175-195% 防禦強化",
            Index: 3
          },
          {
            PropertyString: "獲得的經驗值 +1-5%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1150-1315",
          EquipmentType: 0,
          Name: "統御者鎧甲 (Archon Plate)",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 84,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Zhoulomcrist's Dread",
        SetPropertiesString: [
          "凍結目標 +2 （4 件）"
        ],
        Name: "德雷文指環 (Draven Coil)",
        Index: "Draven Coil",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 40,
        RequiredLevel: 50,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+10% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+10-20% 準確率加成",
            Index: 3
          },
          {
            PropertyString: "+80-120 防禦",
            Index: 2
          },
          {
            PropertyString: "+35-50 生命",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "生命回復 +5",
        Index: 0
      },
      {
        PropertyString: "法力恢復 50%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 所有技能",
        Index: 0
      },
      {
        PropertyString: "+3 降低抗性",
        Index: 4
      },
      {
        PropertyString: "魔法抗性 +25%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 3
      },
      {
        PropertyString: "物理傷害降低 +30%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "The Warlord of Blood",
    Name: "血腥軍閥 (The Warlord of Blood)",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "The Warlord of Blood",
        SetPropertiesString: [
          "+20% 準確率加成 （4 件）",
          "+15% 概率造成粉碎打擊 （3 件）",
          "+15% 致命打擊 （2 件）",
          "+250 防禦 （6 件）",
          "物理傷害降低 +10% （5 件）"
        ],
        Name: "苦痛的靈魂護手 (Tortured Soul Gauntlets)",
        Index: "Tortured Soul Gauntlets",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 28,
        RequiredLevel: 29,
        Code: "hgl",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 0
          },
          {
            PropertyString: "+30-50% 傷害強化",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "12",
          EquipmentType: 0,
          Name: "鋼鐵護手 (Gauntlets)",
          RequiredStrength: 60,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 27,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "The Warlord of Blood",
        SetPropertiesString: [
          "增加 10-20 傷害 （3 件）",
          "+313 防禦 （6 件）",
          "魔法抗性 +10% （4 件）",
          "所有抗性 +10% （2 件）",
          "+1.5 Attacker Takes Damage of （依角色等級而定） （5 件）"
        ],
        Name: "地獄的折磨護脛 (Hell's Torment Greaves)",
        Index: "Hell's Torment Greaves",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 28,
        RequiredLevel: 31,
        Code: "hbt",
        Properties: [
          {
            PropertyString: "擊中時有 18% 機率施展等級 1 偷取生命",
            Index: 1
          },
          {
            PropertyString: "+30% 跑步 / 行走速度",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "10 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "12",
          EquipmentType: 0,
          Name: "護脛",
          RequiredStrength: 70,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 27,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "The Warlord of Blood",
        SetPropertiesString: [
          "增加 25-200 電擊傷害 （6 件）",
          "敵人電擊抗性 -15% （4 件）",
          "電擊抗性 +33% （3 件）"
        ],
        Name: "血腥的幻象面甲 (Bloody Visage Helm)",
        Index: "Bloody Visage Helm",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "xhm",
        Properties: [
          {
            PropertyString: "擊退",
            Index: 3
          },
          {
            PropertyString: "+120-170% 防禦強化",
            Index: 4
          },
          {
            PropertyString: "+70-100 生命",
            Index: 0
          },
          {
            PropertyString: "+33-45 法力",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "189-232",
          EquipmentType: 0,
          Name: "翼盔 (Winged Helm)",
          RequiredStrength: 115,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 51,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "The Warlord of Blood",
        SetPropertiesString: [
          "增加 100-150 火焰傷害 （6 件）",
          "敵人火焰抗性 -15% （4 件）",
          "火焰抗性 +33% （3 件）"
        ],
        Name: "爆發的復仇 (Vengeance Unleashed)",
        Index: "Vengeance Unleashed",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 45,
        RequiredLevel: 47,
        Code: "zhb",
        Properties: [
          {
            PropertyString: "+180-200% 防禦強化",
            Index: 1
          },
          {
            PropertyString: "+50-75 生命",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 22",
            Index: 3
          },
          {
            PropertyString: "魔法傷害降低 20",
            Index: 4
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "41",
          EquipmentType: 0,
          Name: "征戰腰帶 (War Belt)",
          RequiredStrength: 110,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 54,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "The Warlord of Blood",
        SetPropertiesString: [],
        Name: "極樂淨土 (Elysian Fields)",
        Index: "Elysian Fields",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 68,
        Code: "upk",
        Properties: [
          {
            PropertyString: "+40% 格擋速度",
            Index: 1
          },
          {
            PropertyString: "格擋機率提高 +20-40%",
            Index: 0
          },
          {
            PropertyString: "增加 100-150 寒冰傷害",
            Index: 6
          },
          {
            PropertyString: "敵人冰寒抗性 -15%",
            Index: 5
          },
          {
            PropertyString: "+160-200% 防禦強化",
            Index: 4
          },
          {
            PropertyString: "所有抗性 +35-50%",
            Index: 3
          },
          {
            PropertyString: "物理傷害降低 +15-20%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "26 to 40",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "384-444",
          EquipmentType: 0,
          Name: "刀刃刺盾 (Blade Barrier)",
          RequiredStrength: 118,
          RequiredDexterity: 0,
          Durability: 83,
          ItemLevel: 68,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "The Warlord of Blood",
        SetPropertiesString: [
          "+2 所有技能 （6 件）",
          "防止怪物自療 （6 件）"
        ],
        Name: "死亡與腐朽 (Death and Decay)",
        Index: "Death and Decay",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "utp",
        Properties: [
          {
            PropertyString: "+180-220% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+15-25 力量",
            Index: 4
          },
          {
            PropertyString: "+15-20 敏捷",
            Index: 3
          },
          {
            PropertyString: "+75-100 生命",
            Index: 1
          },
          {
            PropertyString: "+35-50 法力",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1150-1315",
          EquipmentType: 0,
          Name: "統御者鎧甲 (Archon Plate)",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 84,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "獲得的經驗值 +2%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +20%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "殺死的怪物就此安息",
        Index: 2
      },
      {
        PropertyString: "怪物金幣掉落量提高 +200%",
        Index: 3
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Darque Necromancy",
    Name: "達爾克亡靈魔法 (Darque Necromancy)",
    SetItems: [
      {
        Type: "Belt",
        "Set": "Darque Necromancy",
        SetPropertiesString: [
          "+1 法力 （依角色等級而定） （5 件）"
        ],
        Name: "垂死詛咒 (Dying Curses)",
        Index: "Dying Curses",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 30,
        Code: "zlb",
        Properties: [
          {
            PropertyString: "當你升級時有 100% 機率施展等級 40 削弱",
            Index: 2
          },
          {
            PropertyString: "+1 詛咒 （只限死靈法師）",
            Index: 1
          },
          {
            PropertyString: "+100-120% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "54-63",
          EquipmentType: 0,
          Name: "魔皮束帶 (Demonhide Sash)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 36,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Darque Necromancy",
        SetPropertiesString: [
          "格擋機率提高 +25% （4 件）"
        ],
        Name: "巫妖儀式 (Lich's Rites)",
        Index: "Lich's Rites",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 63,
        Code: "uuc",
        Properties: [
          {
            PropertyString: "當你升級時有 100% 機率施展等級 33 骸骨護甲",
            Index: 2
          },
          {
            PropertyString: "+30% 格擋速度",
            Index: 1
          },
          {
            PropertyString: "+80-140% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (1)",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "16 to 30",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "220-240",
          EquipmentType: 0,
          Name: "斗盾 (Heater)",
          RequiredStrength: 77,
          RequiredDexterity: 0,
          Durability: 88,
          ItemLevel: 58,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Wand",
        "Set": "Darque Necromancy",
        SetPropertiesString: [],
        Name: "邪惡暮光 (Twilight of Evil)",
        Index: "Twilight of Evil",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 29,
        Code: "9yw",
        Properties: [
          {
            PropertyString: "裝備時賦予等級 1-7 荊棘靈氣",
            Index: 3
          },
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "+25% 施法速度",
            Index: 1
          },
          {
            PropertyString: "生命回復 +1-5",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "8 to 24"
            }
          ],
          EquipmentType: 1,
          Name: "石木魔杖 (Petrified Wand)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 38,
          Type: {
            Name: "Wand",
            Index: "Wand",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Darque Necromancy",
        SetPropertiesString: [
          "冰寒抗性 +20% （3 件）",
          "電擊抗性 +10% （4 件）",
          "火焰抗性 +15% （2 件）",
          "毒素抗性 +25% （5 件）"
        ],
        Name: "黑暗儀軌 (Dark Rituals)",
        Index: "Dark Rituals",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 40,
        RequiredLevel: 50,
        Code: "xtp",
        Properties: [
          {
            PropertyString: "+30% 打擊恢復",
            Index: 2
          },
          {
            PropertyString: "+300-400 防禦",
            Index: 0
          },
          {
            PropertyString: "物理傷害降低 +10-15%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "525-725",
          EquipmentType: 0,
          Name: "法師鎧甲 (Mage Plate)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 60,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Darque Necromancy",
        SetPropertiesString: [
          "怪物金幣掉落量提高 +100% （5 件）"
        ],
        Name: "血脈傳承 (Legacy in Blood)",
        Index: "Legacy in Blood",
        Enabled: true,
        Rarity: 4,
        ItemLevel: 33,
        RequiredLevel: 35,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "攻擊速度 +10%",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +50-75%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 死靈法師技能等級",
        Index: 0
      },
      {
        PropertyString: "+1 死靈法師技能等級",
        Index: 2
      },
      {
        PropertyString: "+1 死靈法師技能等級",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "被擊中時有 5% 機率施展等級 10 攻擊反噬",
        Index: 1
      },
      {
        PropertyString: "+3 重生",
        Index: 4
      },
      {
        PropertyString: "+300% 對不死怪物的傷害",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Marhawkman's Disguise",
    Name: "馬哈克曼的僞裝 (Marhawkman's Disguise)",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "Marhawkman's Disguise",
        SetPropertiesString: [],
        Name: "安達莉爾的利爪 (Andariel's Claw)",
        Index: "Andariel's Claw",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "uvg",
        Properties: [
          {
            PropertyString: "攻擊速度 +15%",
            Index: 1
          },
          {
            PropertyString: "+15% 施法速度",
            Index: 2
          },
          {
            PropertyString: "+90-130% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+40-70 法力",
            Index: 5
          },
          {
            PropertyString: "毒素抗性 +60-80%",
            Index: 3
          },
          {
            PropertyString: "中毒的時效縮短 60%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "106-156",
          EquipmentType: 0,
          Name: "吸血鬼骸骨手套 (Vampirebone Gloves)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 63,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Marhawkman's Disguise",
        SetPropertiesString: [],
        Name: "安達莉爾的蹄子 (Andariel's Hooves)",
        Index: "Andariel's Hooves",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 72,
        Code: "umb",
        Properties: [
          {
            PropertyString: "+25% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "+1200 毒素傷害，時效 12 秒",
            Index: 4
          },
          {
            PropertyString: "+80-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+20-30 敏捷",
            Index: 2
          },
          {
            PropertyString: "所有抗性 +10-20%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "69 to 118",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "108-132",
          EquipmentType: 0,
          Name: "骸骨網靴 (Boneweave Boots)",
          RequiredStrength: 118,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 72,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Marhawkman's Disguise",
        SetPropertiesString: [],
        Name: "安達莉爾的面具 (Andariel's Mask)",
        Index: "Andariel's Mask",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "xsk",
        Properties: [
          {
            PropertyString: "+75-100 防禦",
            Index: 0
          },
          {
            PropertyString: "+20-30 體能",
            Index: 4
          },
          {
            PropertyString: "+20-30 能量",
            Index: 3
          },
          {
            PropertyString: "+15-20 擊殺生命恢復",
            Index: 1
          },
          {
            PropertyString: "+3-6 擊殺法力恢復",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129-154",
          EquipmentType: 0,
          Name: "死亡面具 (Death Mask)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 48,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Marhawkman's Disguise",
        SetPropertiesString: [
          "獲得的經驗值 +4% （4 件）"
        ],
        Name: "安達莉爾的胸骨 (Andariel's Breastbone)",
        Index: "Andariel's Breastbone",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 60,
        Code: "ula",
        Properties: [
          {
            PropertyString: "+25% 毒素技能傷害",
            Index: 4
          },
          {
            PropertyString: "敵人毒素抗性 -25%",
            Index: 5
          },
          {
            PropertyString: "防止怪物自療",
            Index: 1
          },
          {
            PropertyString: "+120-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "物理傷害降低 20",
            Index: 2
          },
          {
            PropertyString: "魔法傷害降低 20",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "814-925",
          EquipmentType: 0,
          Name: "聖甲蟲殼皮甲 (Scarab Husk)",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 28,
          ItemLevel: 68,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+1 所有技能",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "被擊中時有 100% 機率施展等級 2 劇毒新星",
        Index: 1
      },
      {
        PropertyString: "擊中時有 8% 機率施展等級 12 劇毒新星",
        Index: 2
      },
      {
        PropertyString: "擊中竊取 +8% 法力",
        Index: 5
      },
      {
        PropertyString: "擊中竊取 8% 生命",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Aragorn's Scorn",
    Name: "阿拉貢的輕蔑 (Aragorn's Scorn)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Aragorn's Scorn",
        SetPropertiesString: [],
        Name: "阿拉貢的蔑視 (Aragorn's Contempt)",
        Index: "Aragorn's Contempt",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 33,
        Code: "xui",
        Properties: [
          {
            PropertyString: "+100-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "魔法抗性 +10%",
            Index: 3
          },
          {
            PropertyString: "火焰抗性 +25-35%",
            Index: 1
          },
          {
            PropertyString: "物理傷害降低 15",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "206-226",
          EquipmentType: 0,
          Name: "鬼魂戰衣 (Ghost Armor)",
          RequiredStrength: 38,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 34,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Axe",
        "Set": "Aragorn's Scorn",
        SetPropertiesString: [
          "增加 45-135 傷害 （4 件）",
          "+8-12 擊殺生命恢復 （2 件）"
        ],
        Name: "阿拉貢的嘲笑 (Aragorn's Derision)",
        Index: "Aragorn's Derision",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "9wa",
        Properties: [
          {
            PropertyString: "+120-200% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "增加 150-250 火焰傷害",
            Index: 1
          },
          {
            PropertyString: "敵人火焰抗性 -15-20%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(35-48) to (99-135)"
            }
          ],
          EquipmentType: 1,
          Name: "那伽斧 (Naga)",
          RequiredStrength: 121,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 48,
          Type: {
            Name: "Axe",
            Index: "Axe",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Aragorn's Scorn",
        SetPropertiesString: [],
        Name: "阿拉貢的憤怒 (Aragorn's Indignation)",
        Index: "Aragorn's Indignation",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 62,
        Code: "uml",
        Properties: [
          {
            PropertyString: "+20% 格擋速度",
            Index: 2
          },
          {
            PropertyString: "格擋機率提高 +20-30%",
            Index: 1
          },
          {
            PropertyString: "防止怪物自療",
            Index: 3
          },
          {
            PropertyString: "+2 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "冰寒抗性 +25-35%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "17 to 29",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "239-283",
          EquipmentType: 0,
          Name: "圓月盾 (Luna)",
          RequiredStrength: 100,
          RequiredDexterity: 0,
          Durability: 84,
          ItemLevel: 61,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Aragorn's Scorn",
        SetPropertiesString: [
          "+25 敏捷 （3 件）"
        ],
        Name: "阿拉貢的鄙視 (Aragorn's Disdain)",
        Index: "Aragorn's Disdain",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 43,
        Code: "xhb",
        Properties: [
          {
            PropertyString: "+20% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "踢擊傷害 +8-15",
            Index: 2
          },
          {
            PropertyString: "擊中竊取 3-6% 法力",
            Index: 3
          },
          {
            PropertyString: "+100-125% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "39 to 80",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "88-99",
          EquipmentType: 0,
          Name: "征戰靴 (War Boots)",
          RequiredStrength: 125,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 54,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "被擊中時有 25% 機率施展等級 2 靜電力場",
        Index: 2
      },
      {
        PropertyString: "+1 狂嗥",
        Index: 3
      },
      {
        PropertyString: "+100% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "使目標減慢 15%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Bogrot's Magic",
    Name: "博格羅特的魔法 (Bogrot's Magic)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Bogrot's Magic",
        SetPropertiesString: [],
        Name: "寒冬之擁 (Winter's Embrace)",
        Index: "Winter's Embrace",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 34,
        Code: "xea",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "敵人冰寒抗性 -10-20%",
            Index: 3
          },
          {
            PropertyString: "+250-350 防禦",
            Index: 2
          },
          {
            PropertyString: "無法冰凍",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361-461",
          EquipmentType: 0,
          Name: "海蛇皮甲 (Serpentskin Armor)",
          RequiredStrength: 43,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 36,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Mace",
        "Set": "Bogrot's Magic",
        SetPropertiesString: [
          "法力恢復 50% （3 件）"
        ],
        Name: "烈火洗禮 (Baptism by Fire)",
        Index: "Baptism by Fire",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 31,
        Code: "9ma",
        Properties: [
          {
            PropertyString: "裝備時賦予等級 3-5 神聖火焰靈氣",
            Index: 3
          },
          {
            PropertyString: "+2 所有技能",
            Index: 0
          },
          {
            PropertyString: "+20% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+35-50 法力",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "15 to 23"
            }
          ],
          EquipmentType: 1,
          Name: "凸緣釘鎚 (Flanged Mace)",
          RequiredStrength: 61,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 35,
          Type: {
            Name: "Mace",
            Index: "Mace",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Bogrot's Magic",
        SetPropertiesString: [],
        Name: "冰火交夾 (Between Fire and Ice)",
        Index: "Between Fire and Ice",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 48,
        RequiredLevel: 48,
        Code: "urg",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "+30% 打擊恢復",
            Index: 3
          },
          {
            PropertyString: "+35% 格擋速度",
            Index: 2
          },
          {
            PropertyString: "+15-25 力量",
            Index: 4
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +40-75%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "14 to 32",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "119",
          EquipmentType: 0,
          Name: "亥伯龍盾 (Hyperion)",
          RequiredStrength: 156,
          RequiredDexterity: 0,
          Durability: 82,
          ItemLevel: 64,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20 敏捷",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "格擋機率提高 +15%",
        Index: 5
      },
      {
        PropertyString: "+350 防禦",
        Index: 4
      },
      {
        PropertyString: "+75 生命",
        Index: 3
      },
      {
        PropertyString: "獲得的經驗值 +3%",
        Index: 2
      },
      {
        PropertyString: "怪物金幣掉落量提高 +200%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Cedric's Jinx",
    Name: "塞德里克的厄運 (Cedric's Jinx)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Cedric's Jinx",
        SetPropertiesString: [
          "+5 防禦 （依角色等級而定） （3 件）"
        ],
        Name: "吉蘭德拉的召喚 (Call of Gylandra)",
        Index: "Call of Gylandra",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "xla",
        Properties: [
          {
            PropertyString: "+120-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +15-25%",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 +15-25%",
            Index: 1
          },
          {
            PropertyString: "獲得的經驗值 +1-2%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "270-369",
          EquipmentType: 0,
          Name: "魔皮護甲 (Demonhide Armor)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 28,
          ItemLevel: 37,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Hammer",
        "Set": "Cedric's Jinx",
        SetPropertiesString: [
          "擊中竊取 +6% 法力 （2 件）",
          "擊中竊取 6% 生命 （3 件）"
        ],
        Name: "海德拉卡爾的回歸 (Return to Hydrakal)",
        Index: "Return to Hydrakal",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "7wh",
        Properties: [
          {
            PropertyString: "攻擊速度 +60%",
            Index: 1
          },
          {
            PropertyString: "+175-225% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(137-162) to (167-198)"
            }
          ],
          EquipmentType: 1,
          Name: "傳說戰鎚 (Legendary Mallet)",
          RequiredStrength: 189,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 82,
          Type: {
            Name: "Hammer",
            Index: "Hammer",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Cedric's Jinx",
        SetPropertiesString: [],
        Name: "奈普莉達之吻 (Neprida's Kiss)",
        Index: "Neprida's Kiss",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 43,
        Code: "xrg",
        Properties: [
          {
            PropertyString: "+35-50% 傷害強化",
            Index: 3
          },
          {
            PropertyString: "格擋機率提高 +10-20%",
            Index: 1
          },
          {
            PropertyString: "無視目標防禦",
            Index: 2
          },
          {
            PropertyString: "+1.62 防禦 （依角色等級而定）",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "11 to 15",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "53",
          EquipmentType: 0,
          Name: "大圓盾 (Scutum)",
          RequiredStrength: 71,
          RequiredDexterity: 0,
          Durability: 62,
          ItemLevel: 42,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [],
    FullProperties: [
      {
        PropertyString: "被擊中時有 25% 機率施展等級 9 戰鬥命令",
        Index: 2
      },
      {
        PropertyString: "被擊中時有 25% 機率施展等級 12 骸骨護甲",
        Index: 3
      },
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "增加 200-250 寒冰傷害",
        Index: 4
      },
      {
        PropertyString: "殺死的怪物就此安息",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Dragon Reborn",
    Name: "龍之重生 (Dragon Reborn)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Dragon Reborn",
        SetPropertiesString: [
          "+10 擊殺生命恢復 （2 件）",
          "+3 擊殺法力恢復 （4 件）"
        ],
        Name: "獄吏的背心 (Warder's Vest)",
        Index: "Warder's Vest",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 41,
        Code: "xtu",
        Properties: [
          {
            PropertyString: "+160-200% 防禦強化",
            Index: 2
          },
          {
            PropertyString: "怪物金幣掉落量提高 +75%",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +25-30%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361-417",
          EquipmentType: 0,
          Name: "格網護甲 (Trellised Armor)",
          RequiredStrength: 61,
          RequiredDexterity: 0,
          Durability: 32,
          ItemLevel: 40,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Dragon Reborn",
        SetPropertiesString: [],
        Name: "鷺印刀片 (Heron-Branded Blade)",
        Index: "Heron-Branded Blade",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 44,
        Code: "9cr",
        Properties: [
          {
            PropertyString: "擊中時有 4% 機率施展等級 20 削弱",
            Index: 2
          },
          {
            PropertyString: "+35-50 最小傷害",
            Index: 0
          },
          {
            PropertyString: "+100-140 最大傷害",
            Index: 1
          },
          {
            PropertyString: "+200% 對惡魔的傷害",
            Index: 3
          },
          {
            PropertyString: "寒冰吸引 +10-15",
            Index: 5
          },
          {
            PropertyString: "火焰吸引 +10-15",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(48-63) to (135-175)"
            }
          ],
          EquipmentType: 1,
          Name: "次元刃 (Dimensional Blade)",
          RequiredStrength: 85,
          RequiredDexterity: 60,
          Durability: 250,
          ItemLevel: 37,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Dragon Reborn",
        SetPropertiesString: [
          "+40 生命 （5 件）"
        ],
        Name: "特·安格爾之戒 (Ter'Angreal Ring)",
        Index: "Ter'Angreal Ring",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 60,
        RequiredLevel: 67,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 3
          },
          {
            PropertyString: "攻擊速度 +5%",
            Index: 0
          },
          {
            PropertyString: "+10% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+8-15 所有屬性",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Dragon Reborn",
        SetPropertiesString: [
          "被擊中時有 35% 機率施展等級 1 衰老 （5 件）",
          "+1 所有技能 （6 件）"
        ],
        Name: "瑟·安格爾護符 (Ser'Angreal Necklace)",
        Index: "Ser'Angreal Necklace",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 60,
        RequiredLevel: 67,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+10% 打擊恢復",
            Index: 0
          },
          {
            PropertyString: "格擋機率提高 +5-10%",
            Index: 1
          },
          {
            PropertyString: "獲得的經驗值 +4-7%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Dragon Reborn",
        SetPropertiesString: [],
        Name: "賽丁的污點 (Taint of Saidin)",
        Index: "Taint of Saidin",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 67,
        Code: "uuc",
        Properties: [
          {
            PropertyString: "+20% 打擊恢復",
            Index: 4
          },
          {
            PropertyString: "+20% 格擋速度",
            Index: 3
          },
          {
            PropertyString: "格擋機率提高 +10-25%",
            Index: 2
          },
          {
            PropertyString: "+130-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "生命回復 +5-8",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "16 to 30",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "220-240",
          EquipmentType: 0,
          Name: "斗盾 (Heater)",
          RequiredStrength: 77,
          RequiredDexterity: 0,
          Durability: 88,
          ItemLevel: 58,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Dragon Reborn",
        SetPropertiesString: [
          "+30% 跑步 / 行走速度 （3 件）",
          "+1 生命 （依角色等級而定） （6 件）",
          "+0.62 法力 （依角色等級而定） （5 件）",
          "所有抗性 +15% （4 件）",
          "尋獲魔法物品機率提高 +25% （2 件）"
        ],
        Name: "阿維恩達的禮物 (Aviendha's Gift)",
        Index: "Aviendha's Gift",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 10,
        RequiredLevel: 21,
        Code: "vbt",
        Properties: [
          {
            PropertyString: "+25-35 防禦",
            Index: 0
          },
          {
            PropertyString: "+10 敏捷",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "4 to 10",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "30-40",
          EquipmentType: 0,
          Name: "重靴 (Heavy Boots)",
          RequiredStrength: 18,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 7,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +35%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +65%",
        Index: 4
      },
      {
        PropertyString: "+1 所有技能",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "+7 犧牲打擊",
        Index: 2
      },
      {
        PropertyString: "攻擊速度 +30%",
        Index: 3
      },
      {
        PropertyString: "+40 最大傷害",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +40%",
        Index: 1
      },
      {
        PropertyString: "怪物金幣掉落量提高 +3.12% （依角色等級而定）",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Soldier's Cairn",
    Name: "士兵墓穴 (Soldier's Cairn)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Soldier's Cairn",
        SetPropertiesString: [],
        Name: "英雄們的高臺 (Heroes Stand)",
        Index: "Heroes Stand",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 35,
        Code: "xng",
        Properties: [
          {
            PropertyString: "+50-75% 傷害強化",
            Index: 1
          },
          {
            PropertyString: "+30% 打擊恢復",
            Index: 2
          },
          {
            PropertyString: "+130-170% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "365-429",
          EquipmentType: 0,
          Name: "鍊扣戰甲 (Linked Mail)",
          RequiredStrength: 74,
          RequiredDexterity: 0,
          Durability: 26,
          ItemLevel: 42,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Soldier's Cairn",
        SetPropertiesString: [
          "+3 近戰精通 （2 件）",
          "增加 100-150 傷害 （3 件）",
          "擊中竊取 8% 生命 （2 件）"
        ],
        Name: "战士的英勇氣概 (Warrior's Heroism)",
        Index: "Warrior's Heroism",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 55,
        Code: "9cm",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+200-300% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (1-4)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 0,
              DamageString: "(39-52) to (90-120)"
            },
            {
              Type: 1,
              DamageString: "(78-104) to (183-244)"
            }
          ],
          EquipmentType: 1,
          Name: "達西安長刀 (Dacian Falx)",
          RequiredStrength: 91,
          RequiredDexterity: 20,
          Durability: 250,
          ItemLevel: 42,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Soldier's Cairn",
        SetPropertiesString: [
          "+1 所有技能 （2 件）"
        ],
        Name: "烈士的信條 (Martyr's Principle)",
        Index: "Martyr's Principle",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "utg",
        Properties: [
          {
            PropertyString: "攻擊速度 +25%",
            Index: 1
          },
          {
            PropertyString: "+7-15% 致命打擊",
            Index: 2
          },
          {
            PropertyString: "+100-160 防禦",
            Index: 0
          },
          {
            PropertyString: "獲得的經驗值 +1-2%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "168-192",
          EquipmentType: 0,
          Name: "聖教軍護手 (Crusader Gauntlets)",
          RequiredStrength: 151,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 76,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+65% 機率造成開放傷口",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+150 最大傷害",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +20%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Gweibret's Rule",
    Name: "格韋布雷特的規則 (Gweibret's Rule)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Gweibret's Rule",
        SetPropertiesString: [],
        Name: "司法政令 (Judicial Decree)",
        Index: "Judicial Decree",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "xcl",
        Properties: [
          {
            PropertyString: "+30% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+170-210% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+1.25 生命 （依角色等級而定）",
            Index: 2
          },
          {
            PropertyString: "+0.75 法力 （依角色等級而定）",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "477-548",
          EquipmentType: 0,
          Name: "鎖鱗戰甲 (Tigulated Mail)",
          RequiredStrength: 86,
          RequiredDexterity: 0,
          Durability: 36,
          ItemLevel: 43,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Gweibret's Rule",
        SetPropertiesString: [],
        Name: "法規體制 (Regime of Regulation)",
        Index: "Regime of Regulation",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "7sm",
        Properties: [
          {
            PropertyString: "攻擊速度 +15%",
            Index: 2
          },
          {
            PropertyString: "+240-290% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "增加 30-80 傷害",
            Index: 1
          },
          {
            PropertyString: "+25% 閃電技能傷害",
            Index: 3
          },
          {
            PropertyString: "電擊吸引 +8-15",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(118-131) to (236-259)"
            }
          ],
          EquipmentType: 1,
          Name: "土耳其彎刀 (Ataghan)",
          RequiredStrength: 138,
          RequiredDexterity: 95,
          Durability: 250,
          ItemLevel: 61,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Gweibret's Rule",
        SetPropertiesString: [
          "+20% 格擋速度 （4 件）",
          "格擋機率提高 +20% （3 件）"
        ],
        Name: "國王法令 (King's Prescript)",
        Index: "King's Prescript",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 46,
        Code: "xit",
        Properties: [
          {
            PropertyString: "+125% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +15-20%",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 +15%",
            Index: 1
          },
          {
            PropertyString: "鑲孔 (1)",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "15 to 24",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "135",
          EquipmentType: 0,
          Name: "龍盾 (Dragon Shield)",
          RequiredStrength: 91,
          RequiredDexterity: 0,
          Durability: 76,
          ItemLevel: 45,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Gweibret's Rule",
        SetPropertiesString: [
          "+10% 施法速度 （2 件）",
          "+30 法力 （3 件）",
          "法力恢復 50% （4 件）"
        ],
        Name: "天生至高 (Born Supremacy)",
        Index: "Born Supremacy",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "umc",
        Properties: [
          {
            PropertyString: "+1.62 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "生命上限 +25%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "58",
          EquipmentType: 0,
          Name: "秘銀腰帶 (Mithril Coil)",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 75,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Gweibret's Rule",
        SetPropertiesString: [],
        Name: "統治之論 (Dominion's Thesis)",
        Index: "Dominion's Thesis",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 50,
        RequiredLevel: 50,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+1-2 野蠻人技能等級",
            Index: 0
          },
          {
            PropertyString: "攻擊速度 +10%",
            Index: 3
          },
          {
            PropertyString: "+10-15 最小傷害",
            Index: 2
          },
          {
            PropertyString: "+30-40 力量",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20% 傷害強化",
        Index: 0
      },
      {
        PropertyString: "+30% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "+50% 傷害強化",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "擊中時有 10% 機率施展等級 10 閃電新星",
        Index: 2
      },
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+469 毒素傷害，時效 6 秒",
        Index: 4
      },
      {
        PropertyString: "防止怪物自療",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +35%",
        Index: 5
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +1.5% （依角色等級而定）",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Haunted Asylum",
    Name: "靈異病院 (Haunted Asylum)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Haunted Asylum",
        SetPropertiesString: [
          "+200 防禦 （4 件）",
          "尋獲魔法物品機率提高 +50% （5 件）"
        ],
        Name: "星空之體 (Astral Body)",
        Index: "Astral Body",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 44,
        Code: "xhn",
        Properties: [
          {
            PropertyString: "攻擊速度 +15%",
            Index: 1
          },
          {
            PropertyString: "+15% 打擊恢復",
            Index: 2
          },
          {
            PropertyString: "+15% 格擋速度",
            Index: 3
          },
          {
            PropertyString: "+175-225% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "You feel incorporeal...",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "547-646",
          EquipmentType: 0,
          Name: "鐵網戰甲 (Mesh Armor)",
          RequiredStrength: 92,
          RequiredDexterity: 0,
          Durability: 45,
          ItemLevel: 45,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Haunted Asylum",
        SetPropertiesString: [
          "增加 25-75 傷害 （4 件）"
        ],
        Name: "鬼魂之怨 (Apparition of Malice)",
        Index: "Apparition of Malice",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 42,
        Code: "9ls",
        Properties: [
          {
            PropertyString: "+200-250% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+10-15% 寒冰技能傷害",
            Index: 2
          },
          {
            PropertyString: "敵人冰寒抗性 -15-20%",
            Index: 3
          },
          {
            PropertyString: "+225-250 防禦",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(30-35) to (126-147)"
            }
          ],
          EquipmentType: 1,
          Name: "符文劍 (Rune Sword)",
          RequiredStrength: 103,
          RequiredDexterity: 79,
          Durability: 250,
          ItemLevel: 44,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Haunted Asylum",
        SetPropertiesString: [
          "所有抗性 +25% （5 件）"
        ],
        Name: "恐懼之影 (Phantasm of Horror)",
        Index: "Phantasm of Horror",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 47,
        Code: "xsh",
        Properties: [
          {
            PropertyString: "+15% 格擋速度",
            Index: 2
          },
          {
            PropertyString: "格擋機率提高 +40%",
            Index: 1
          },
          {
            PropertyString: "+100% 對惡魔的傷害",
            Index: 3
          },
          {
            PropertyString: "+75-100% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "14 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "89-102",
          EquipmentType: 0,
          Name: "陰森盾牌 (Grim Shield)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 48,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Haunted Asylum",
        SetPropertiesString: [],
        Name: "靈異之智 (Haunted Wisdom)",
        Index: "Haunted Wisdom",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 65,
        Code: "uhl",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 2
          },
          {
            PropertyString: "+30% 施法速度",
            Index: 3
          },
          {
            PropertyString: "+75-100% 防禦強化",
            Index: 1
          },
          {
            PropertyString: "+1.75 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "法力恢復 75%",
            Index: 4
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +20-50%",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "194-222",
          EquipmentType: 0,
          Name: "巨螺盔 (Giant Conch)",
          RequiredStrength: 142,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 54,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Haunted Asylum",
        SetPropertiesString: [],
        Name: "復生者之爪 (Revenant's Claw)",
        Index: "Revenant's Claw",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 72,
        Code: "utg",
        Properties: [
          {
            PropertyString: "+1-3 戰鬥技能 （只限野蠻人）",
            Index: 1
          },
          {
            PropertyString: "擊中竊取 5% 生命",
            Index: 3
          },
          {
            PropertyString: "+180-220% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+30-50 生命",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "168-192",
          EquipmentType: 0,
          Name: "聖教軍護手 (Crusader Gauntlets)",
          RequiredStrength: 151,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 76,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+1 所有技能",
        Index: 2
      },
      {
        PropertyString: "增加 1-300 電擊傷害",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "獲得的經驗值 +25%",
        Index: 0
      },
      {
        PropertyString: "怪物金幣掉落量提高 +5% （依角色等級而定）",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +2.5% （依角色等級而定）",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Alyssa's Archery",
    Name: "阿麗莎的箭術 (Alyssa's Archery)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Alyssa's Archery",
        SetPropertiesString: [],
        Name: "阿麗莎的精髓 (Alyssa's Essence)",
        Index: "Alyssa's Essence",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 47,
        Code: "xpl",
        Properties: [
          {
            PropertyString: "擊中竊取 4-8% 法力",
            Index: 2
          },
          {
            PropertyString: "擊中竊取 8% 生命",
            Index: 3
          },
          {
            PropertyString: "擊退",
            Index: 1
          },
          {
            PropertyString: "+135-180% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "531-632",
          EquipmentType: 0,
          Name: "赤褐戰甲 (Russet Armor)",
          RequiredStrength: 97,
          RequiredDexterity: 0,
          Durability: 90,
          ItemLevel: 49,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Bow",
        "Set": "Alyssa's Archery",
        SetPropertiesString: [
          "+50 最小傷害 （3 件）",
          "+2 最大傷害 （依角色等級而定） （2 件）"
        ],
        Name: "阿麗莎的枯葉術 (Alyssa's Leafblighter)",
        Index: "Alyssa's Leafblighter",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 44,
        Code: "8l8",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+180-220% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "鑲孔 (3)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(28-32) to (117-134)"
            }
          ],
          EquipmentType: 1,
          Name: "攻城長弓 (Large Siege Bow)",
          RequiredStrength: 80,
          RequiredDexterity: 95,
          Durability: 0,
          ItemLevel: 46,
          Type: {
            Name: "Bow",
            Index: "Bow",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Alyssa's Archery",
        SetPropertiesString: [
          "+30% 跑步 / 行走速度 （3 件）"
        ],
        Name: "阿麗莎的涼鞋 (Alyssa's Sandals)",
        Index: "Alyssa's Sandals",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 60,
        Code: "ulb",
        Properties: [
          {
            PropertyString: "+20-30% 傷害強化",
            Index: 2
          },
          {
            PropertyString: "增加 5-10 傷害",
            Index: 1
          },
          {
            PropertyString: "+160-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+15 力量",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "65 to 100",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "143-165",
          EquipmentType: 0,
          Name: "龍皮靴 (Wyrmhide Boots)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 60,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 2
      },
      {
        PropertyString: "+30% 穿透攻擊",
        Index: 3
      },
      {
        PropertyString: "增加 25-50 傷害",
        Index: 1
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +300%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Forbidden Lore",
    Name: "禁忌傳説 (Forbidden Lore)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Forbidden Lore",
        SetPropertiesString: [],
        Name: "邪惡誓言 (Unholy Vows)",
        Index: "Unholy Vows",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 46,
        Code: "xlt",
        Properties: [
          {
            PropertyString: "+150-190% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+75-100 生命",
            Index: 1
          },
          {
            PropertyString: "生命回復 +20-30",
            Index: 2
          },
          {
            PropertyString: "法力恢復 100%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "632-733",
          EquipmentType: 0,
          Name: "聖堂騎士戰甲 (Templar Coat)",
          RequiredStrength: 118,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 52,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Knife",
        "Set": "Forbidden Lore",
        SetPropertiesString: [],
        Name: "吸血鬼骸骨匕首 (Vampirebone Dagger)",
        Index: "Vampirebone Dagger",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 63,
        Code: "7dg",
        Properties: [
          {
            PropertyString: "+1-2 死靈法師技能等級",
            Index: 5
          },
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+220-250% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+20% 施法速度",
            Index: 4
          },
          {
            PropertyString: "+10-20% 毒素技能傷害",
            Index: 2
          },
          {
            PropertyString: "敵人毒素抗性 -10-20%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(73-80) to (156-171)"
            }
          ],
          EquipmentType: 1,
          Name: "骸骨小刀 (Bone Knife)",
          RequiredStrength: 38,
          RequiredDexterity: 75,
          Durability: 250,
          ItemLevel: 58,
          Type: {
            Name: "Knife",
            Index: "Knife",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Forbidden Lore",
        SetPropertiesString: [
          "格擋機率提高 +22% （2 件）",
          "+15 敏捷 （3 件）",
          "尋獲魔法物品機率提高 +25% （4 件）"
        ],
        Name: "莫迪烏斯之墻 (Wall of Modius)",
        Index: "Wall of Modius",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 12,
        RequiredLevel: 16,
        Code: "bsh",
        Properties: [
          {
            PropertyString: "裝備時賦予等級 7-10 荊棘靈氣",
            Index: 0
          },
          {
            PropertyString: "+15% 受到的傷害轉為法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "3 to 6",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "10",
          EquipmentType: 0,
          Name: "骨盾 (Bone Shield)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 19,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Forbidden Lore",
        SetPropertiesString: [],
        Name: "死亡之門 (Death's Door)",
        Index: "Death's Door",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 32,
        Code: "zvb",
        Properties: [
          {
            PropertyString: "+120-130% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+55-75 法力",
            Index: 1
          },
          {
            PropertyString: "+2-4 擊殺法力恢復",
            Index: 2
          },
          {
            PropertyString: "獲得的經驗值 +1-2%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "73-83",
          EquipmentType: 0,
          Name: "鯊皮腰帶 (Sharkskin Belt)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 39,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+15 能量",
        Index: 0
      },
      {
        PropertyString: "+15 體能",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "擊中時有 20% 機率施展等級 3 屍爆",
        Index: 1
      },
      {
        PropertyString: "+3 所有技能",
        Index: 0
      },
      {
        PropertyString: "+30% 施法速度",
        Index: 3
      },
      {
        PropertyString: "+25% 準確率加成",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Hannibal's Demise",
    Name: "漢尼拔的消亡 (Hannibal's Demise)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Hannibal's Demise",
        SetPropertiesString: [],
        Name: "漢尼拔的破碎板甲 (Hannibal's Shattered Plate)",
        Index: "Hannibal's Shattered Plate",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 48,
        Code: "xld",
        Properties: [
          {
            PropertyString: "+50% 穿透攻擊",
            Index: 4
          },
          {
            PropertyString: "+35-50% 機率造成開放傷口",
            Index: 3
          },
          {
            PropertyString: "+130-160% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+3 防禦 （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "物理傷害降低 +15%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "558-631",
          EquipmentType: 0,
          Name: "鯊齒戰甲 (Sharktooth Armor)",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 48,
          ItemLevel: 55,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Throwing Knife",
        "Set": "Hannibal's Demise",
        SetPropertiesString: [
          "增加 25-75 傷害 （3 件）",
          "堆疊數量提高 100 （2 件）"
        ],
        Name: "漢尼拔的告別飛行 (Hannibal's Final Flight)",
        Index: "Hannibal's Final Flight",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 62,
        Code: "7bk",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+200-300% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "-20-30% 目標防禦",
            Index: 3
          },
          {
            PropertyString: "使目標減慢 75%",
            Index: 2
          },
          {
            PropertyString: "無法冰凍",
            Index: 4
          },
          {
            PropertyString: "回復數量",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(81-108) to (105-140)"
            },
            {
              Type: 2,
              DamageString: "(69-92) to (117-156)"
            }
          ],
          EquipmentType: 1,
          Name: "刃翼飛刀 (Winged Knife)",
          RequiredStrength: 45,
          RequiredDexterity: 142,
          Durability: 250,
          ItemLevel: 77,
          Type: {
            Name: "Throwing Knife",
            Index: "Throwing Knife",
            Class: ""
          },
          RequiredClass: "Knife"
        }
      },
      {
        Type: "Helm",
        "Set": "Hannibal's Demise",
        SetPropertiesString: [
          "電擊抗性 +30% （3 件）"
        ],
        Name: "漢尼拔的模糊視綫 (Hannibal's Blurred Vision)",
        Index: "Hannibal's Blurred Vision",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 38,
        Code: "xhl",
        Properties: [
          {
            PropertyString: "+170-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "火焰抗性 +25-35%",
            Index: 3
          },
          {
            PropertyString: "+10-20 所有屬性",
            Index: 1
          },
          {
            PropertyString: "獲得的經驗值 +1-2%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "205-228",
          EquipmentType: 0,
          Name: "輕盔 (Basinet)",
          RequiredStrength: 82,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 45,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Hannibal's Demise",
        SetPropertiesString: [
          "+20% 跑步 / 行走速度 （2 件）",
          "+100 準確率 （3 件）"
        ],
        Name: "漢尼拔的屈膝 (Hannibal's Bending Knee)",
        Index: "Hannibal's Bending Knee",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 45,
        Code: "xtb",
        Properties: [
          {
            PropertyString: "+100-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+15 敏捷",
            Index: 1
          },
          {
            PropertyString: "怪物金幣掉落量提高 +300%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "37 to 64",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "90-100",
          EquipmentType: 0,
          Name: "戰鬥靴 (Battle Boots)",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 49,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+1 所有技能",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+100 生命",
        Index: 1
      },
      {
        PropertyString: "+50 法力",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +150%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Wrath of Vengeance",
    Name: "復仇怒火 (Wrath of Vengeance)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Wrath of Vengeance",
        SetPropertiesString: [
          "生命回復 +8 （5 件）"
        ],
        Name: "憤怒之壽衣 (Shroud of Anger)",
        Index: "Shroud of Anger",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 50,
        Code: "xth",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+180-220% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+55 生命",
            Index: 3
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "792-905",
          EquipmentType: 0,
          Name: "雕紋戰甲 (Embossed Plate)",
          RequiredStrength: 125,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 58,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Javelin",
        "Set": "Wrath of Vengeance",
        SetPropertiesString: [
          "擊中時有 37% 機率施展等級 10 連鎖閃電 （2 件）",
          "+6 聚能強擊（3 件）"
        ],
        Name: "神聖之狂怒 (Holy Fury)",
        Index: "Holy Fury",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 64,
        Code: "7s7",
        Properties: [
          {
            PropertyString: "+150-180% 傷害強化",
            Index: 2
          },
          {
            PropertyString: "增加 50-200 傷害",
            Index: 0
          },
          {
            PropertyString: "堆疊數量提高 200",
            Index: 1
          },
          {
            PropertyString: "回復數量",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(132-142) to (357-376)"
            },
            {
              Type: 2,
              DamageString: "(150-162) to (355-373)"
            }
          ],
          EquipmentType: 1,
          Name: "炎魔長矛 (Balrog Spear)",
          RequiredStrength: 127,
          RequiredDexterity: 95,
          Durability: 250,
          ItemLevel: 71,
          Type: {
            Name: "Javelin",
            Index: "Javelin",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Wrath of Vengeance",
        SetPropertiesString: [],
        Name: "殘酷之收穫 (Harvest of Cruelty)",
        Index: "Harvest of Cruelty",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 67,
        Code: "uvb",
        Properties: [
          {
            PropertyString: "被擊中時有 5% 機率施展等級 1 傳送術",
            Index: 4
          },
          {
            PropertyString: "+25% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "+130-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+15-25 擊殺生命恢復",
            Index: 3
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +15-25%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "60 to 110",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "131-142",
          EquipmentType: 0,
          Name: "聖甲蟲殼皮靴 (Scarabshell Boots)",
          RequiredStrength: 91,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 66,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Wrath of Vengeance",
        SetPropertiesString: [
          "+1 冰霜新星（2 件）",
          "+1 暴風雪（3 件）",
          "+1 冰封球（4 件）"
        ],
        Name: "受引之力量 (Guiding Force)",
        Index: "Guiding Force",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 71,
        Code: "umg",
        Properties: [
          {
            PropertyString: "+20% 施法速度",
            Index: 0
          },
          {
            PropertyString: "+1 法力 （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "法力恢復 25%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "59",
          EquipmentType: 0,
          Name: "護臂 (Vambraces)",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 69,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Wrath of Vengeance",
        SetPropertiesString: [
          "+1 所有技能 （3 件）"
        ],
        Name: "環抱之仇恨 (Embracing Hatred)",
        Index: "Embracing Hatred",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 39,
        Code: "ztb",
        Properties: [
          {
            PropertyString: "擊中竊取 6-8% 法力",
            Index: 3
          },
          {
            PropertyString: "+15% 寒冰技能傷害",
            Index: 0
          },
          {
            PropertyString: "+75-120% 防禦強化",
            Index: 2
          },
          {
            PropertyString: "寒冰吸引 +15-20",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "66-83",
          EquipmentType: 0,
          Name: "戰鬥腰帶 (Battle Belt)",
          RequiredStrength: 88,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 49,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "獲得的經驗值 +2%",
        Index: 2
      },
      {
        PropertyString: "+1 所有技能",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "所有抗性 +50%",
        Index: 0
      },
      {
        PropertyString: "所有抗性上限 +10",
        Index: 2
      },
      {
        PropertyString: "物理傷害降低 +50%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Servitude or Rebellion",
    Name: "奴役與抗爭 (Servitude or Rebellion)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Servitude or Rebellion",
        SetPropertiesString: [],
        Name: "混亂之奴隸 (Slave to Anarchy)",
        Index: "Slave to Anarchy",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 51,
        Code: "xul",
        Properties: [
          {
            PropertyString: "擊中使目標目盲 +3",
            Index: 2
          },
          {
            PropertyString: "+3 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "+300-400 防禦",
            Index: 1
          },
          {
            PropertyString: "所有抗性 +20%",
            Index: 4
          },
          {
            PropertyString: "魔法傷害降低 15",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "615-715",
          EquipmentType: 0,
          Name: "混沌戰甲 (Chaos Armor)",
          RequiredStrength: 140,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 61,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Spear",
        "Set": "Servitude or Rebellion",
        SetPropertiesString: [],
        Name: "榮譽之束縛 (Bound by Honor)",
        Index: "Bound by Honor",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "7tr",
        Properties: [
          {
            PropertyString: "+5-9 to Melee Mastery",
            Index: 3
          },
          {
            PropertyString: "攻擊速度 +30%",
            Index: 2
          },
          {
            PropertyString: "+240-270% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "增加 50-200 傷害",
            Index: 1
          },
          {
            PropertyString: "擊中竊取 8% 生命",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(148-157) to (689-732)"
            }
          ],
          EquipmentType: 1,
          Name: "冥河戰矛 (Stygian Pike)",
          RequiredStrength: 168,
          RequiredDexterity: 97,
          Durability: 250,
          ItemLevel: 66,
          Type: {
            Name: "Spear",
            Index: "Spear",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Servitude or Rebellion",
        SetPropertiesString: [
          "生命回復 +3-5 （2 件）"
        ],
        Name: "平衡 (Equilibrium)",
        Index: "Equilibrium",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 43,
        Code: "zmb",
        Properties: [
          {
            PropertyString: "+1.5 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "+15-20 體能",
            Index: 2
          },
          {
            PropertyString: "+15-20 能量",
            Index: 3
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +20-25%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "35",
          EquipmentType: 0,
          Name: "鐵網腰帶 (Mesh Belt)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 43,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+5 旋風斬",
        Index: 3
      },
      {
        PropertyString: "+350 準確率",
        Index: 1
      },
      {
        PropertyString: "使目標減慢 15%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Kaldorn's Majesty",
    Name: "卡爾多恩的威嚴 (Kaldorn's Majesty)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Kaldorn's Majesty",
        SetPropertiesString: [
          "所有抗性 +50% （4 件）"
        ],
        Name: "法爾凱姆的飾金甲 (Firecam Gilded Plate)",
        Index: "Firecam Gilded Plate",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 63,
        Code: "xar",
        Properties: [
          {
            PropertyString: "+20% 打擊恢復",
            Index: 2
          },
          {
            PropertyString: "+150-180% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +30-50%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1045-1170",
          EquipmentType: 0,
          Name: "華麗戰甲 (Ornate Plate)",
          RequiredStrength: 170,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 64,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Polearm",
        "Set": "Kaldorn's Majesty",
        SetPropertiesString: [],
        Name: "阿爾沃林之斧 (Axe of Arvoreen)",
        Index: "Axe of Arvoreen",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "7o7",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 2
          },
          {
            PropertyString: "+220-270% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+200-300 最大傷害",
            Index: 1
          },
          {
            PropertyString: "鑲孔 (1-3)",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(89-103) to (664-836)"
            }
          ],
          EquipmentType: 1,
          Name: "巨魔斧 (Ogre Axe)",
          RequiredStrength: 195,
          RequiredDexterity: 75,
          Durability: 250,
          ItemLevel: 60,
          Type: {
            Name: "Polearm",
            Index: "Polearm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Kaldorn's Majesty",
        SetPropertiesString: [],
        Name: "溫德斯巴的面罩 (Windspar Mask)",
        Index: "Windspar Mask",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "uhm",
        Properties: [
          {
            PropertyString: "+155-185% 防禦強化",
            Index: 1
          },
          {
            PropertyString: "+40-50 生命",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 +15-25%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "293-327",
          EquipmentType: 0,
          Name: "巨角頭盔 (Spired Helm)",
          RequiredStrength: 192,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 79,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Kaldorn's Majesty",
        SetPropertiesString: [],
        Name: "烏特維爾之爪 (Waterwyrd's Talon)",
        Index: "Waterwyrd's Talon",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 55,
        Code: "xhg",
        Properties: [
          {
            PropertyString: "攻擊速度 +40%",
            Index: 0
          },
          {
            PropertyString: "+175-200% 防禦強化",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "121-132",
          EquipmentType: 0,
          Name: "征戰護手 (War Gauntlets)",
          RequiredStrength: 110,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 54,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Kaldorn's Majesty",
        SetPropertiesString: [],
        Name: "德司達的裹腰 (Daystar Wrap)",
        Index: "Daystar Wrap",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 58,
        Code: "zhb",
        Properties: [
          {
            PropertyString: "+175-200 生命",
            Index: 0
          },
          {
            PropertyString: "+75-100 法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "41",
          EquipmentType: 0,
          Name: "征戰腰帶 (War Belt)",
          RequiredStrength: 110,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 54,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+1 所有技能",
        Index: 2
      },
      {
        PropertyString: "+1 所有技能",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+5 所有技能",
        Index: 0
      },
      {
        PropertyString: "+25 所有屬性",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +4%",
        Index: 2
      },
      {
        PropertyString: "怪物金幣掉落量提高 +125%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +125%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Warlock's Exploration",
    Name: "術士的探索 (Warlock's Exploration)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Warlock's Exploration",
        SetPropertiesString: [],
        Name: "深紅精靈板甲 (Incarnadine Elven Plate)",
        Index: "Incarnadine Elven Plate",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 59,
        Code: "xtp",
        Properties: [
          {
            PropertyString: "+3-4 所有技能",
            Index: 0
          },
          {
            PropertyString: "+300-500 防禦",
            Index: 2
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "525-725",
          EquipmentType: 0,
          Name: "法師鎧甲 (Mage Plate)",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 60,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Staff",
        "Set": "Warlock's Exploration",
        SetPropertiesString: [
          "+20% 施法速度 （3 件）",
          "獲得的經驗值 +2% （4 件）"
        ],
        Name: "元素掌控法杖 (Staff of Elemental Mastery)",
        Index: "Staff of Elemental Mastery",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "8ss",
        Properties: [
          {
            PropertyString: "+2 所有技能",
            Index: 0
          },
          {
            PropertyString: "法力上限 +35%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "6 to 21"
            }
          ],
          EquipmentType: 1,
          Name: "棍杖 (Jo Staff)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 30,
          Type: {
            Name: "Staff",
            Index: "Staff",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Warlock's Exploration",
        SetPropertiesString: [
          "+150 防禦 （5 件）",
          "生命上限 +40% （4 件）",
          "+2 所有屬性 （3 件）",
          "尋獲魔法物品機率提高 +50% （2 件）"
        ],
        Name: "小黃帽 (Lilarcor Cap)",
        Index: "Lilarcor Cap",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 38,
        Code: "xap",
        Properties: [
          {
            PropertyString: "+2 所有技能",
            Index: 0
          },
          {
            PropertyString: "+75-100% 防禦強化",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "80-92",
          EquipmentType: 0,
          Name: "戰帽 (War Hat)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 34,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Warlock's Exploration",
        SetPropertiesString: [],
        Name: "終焉手套 (Teleomortis' Gloves)",
        Index: "Teleomortis' Gloves",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 71,
        Code: "ulg",
        Properties: [
          {
            PropertyString: "+2 所有技能",
            Index: 0
          },
          {
            PropertyString: "+150-200 防禦",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "54",
          EquipmentType: 0,
          Name: "荊棘手套 (Bramble Mitts)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 57,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Warlock's Exploration",
        SetPropertiesString: [],
        Name: "堡壘腰带 (Citadel Belt)",
        Index: "Citadel Belt",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 66,
        Code: "ulc",
        Properties: [
          {
            PropertyString: "+2 所有技能",
            Index: 0
          },
          {
            PropertyString: "+125-175 防禦",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "180-230",
          EquipmentType: 0,
          Name: "蛛網束帶 (Spiderweb Sash)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 61,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "所有抗性 +25%",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 2
      },
      {
        PropertyString: "物理傷害降低 +25%",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+4 所有技能",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +50%",
        Index: 2
      },
      {
        PropertyString: "+20 擊殺生命恢復",
        Index: 3
      },
      {
        PropertyString: "+5 擊殺法力恢復",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +75%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Amaunator's Peace",
    Name: "阿曼納塔的和平 (Amaunator's Peace)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Amaunator's Peace",
        SetPropertiesString: [],
        Name: "阿曼納塔的聖潔壽衣 (Holy Shroud of Amaunator)",
        Index: "Holy Shroud of Amaunator",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "uui",
        Properties: [
          {
            PropertyString: "+4-6 to Melee Mastery",
            Index: 1
          },
          {
            PropertyString: "防止怪物自療",
            Index: 3
          },
          {
            PropertyString: "+160-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +25-30%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361",
          EquipmentType: 0,
          Name: "灰暮罩衣 (Dusk Shroud)",
          RequiredStrength: 77,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 65,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Axe",
        "Set": "Amaunator's Peace",
        SetPropertiesString: [
          "增加 40-80 傷害 （5 件）"
        ],
        Name: "阿曼納塔的聖潔之劍 (Holy Cleaver of Amaunator)",
        Index: "Holy Cleaver of Amaunator",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 47,
        Code: "9ax",
        Properties: [
          {
            PropertyString: "+280-320% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "增加 25-100 寒冰傷害",
            Index: 2
          },
          {
            PropertyString: "敵人冰寒抗性 -10-15%",
            Index: 3
          },
          {
            PropertyString: "擊退",
            Index: 1
          },
          {
            PropertyString: "冰寒抗性 +40-50%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(38-42) to (125-138)"
            }
          ],
          EquipmentType: 1,
          Name: "斬斧 (Cleaver)",
          RequiredStrength: 68,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 34,
          Type: {
            Name: "Axe",
            Index: "Axe",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Amaunator's Peace",
        SetPropertiesString: [],
        Name: "阿曼納塔的聖潔之盾 (Holy Buckler of Amaunator)",
        Index: "Holy Buckler of Amaunator",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 65,
        Code: "uml",
        Properties: [
          {
            PropertyString: "+40% 格擋速度",
            Index: 1
          },
          {
            PropertyString: "+120-160% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "魔法吸引 +10-15%",
            Index: 4
          },
          {
            PropertyString: "物理傷害降低 +10-15%",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 15",
            Index: 3
          },
          {
            PropertyString: "+8-12 擊殺生命恢復",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "17 to 29",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "239-283",
          EquipmentType: 0,
          Name: "圓月盾 (Luna)",
          RequiredStrength: 100,
          RequiredDexterity: 0,
          Durability: 84,
          ItemLevel: 61,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Amaunator's Peace",
        SetPropertiesString: [],
        Name: "阿曼納塔的聖潔之戒 (Holy Ring of Amaunator)",
        Index: "Holy Ring of Amaunator",
        Enabled: true,
        Rarity: 5,
        ItemLevel: 30,
        RequiredLevel: 33,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+125-200 準確率",
            Index: 3
          },
          {
            PropertyString: "+15-20 力量",
            Index: 2
          },
          {
            PropertyString: "+25-30 敏捷",
            Index: 1
          },
          {
            PropertyString: "+35-50 生命",
            Index: 0
          },
          {
            PropertyString: "+1 Attacker Takes Damage of （依角色等級而定）",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Amaunator's Peace",
        SetPropertiesString: [
          "+20 最大傷害 （6 件）",
          "+8-15% 閃電技能傷害 （5 件）",
          "+10-15 敏捷 （2 件）",
          "電擊抗性 +30% （3 件）",
          "尋獲魔法物品機率提高 +33% （4 件）"
        ],
        Name: "阿曼納塔的聖潔之靴 (Holy Boots of Amaunator)",
        Index: "Holy Boots of Amaunator",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 15,
        RequiredLevel: 22,
        Code: "hbt",
        Properties: [
          {
            PropertyString: "+20% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "+1 防禦 （依角色等級而定）",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "10 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "12",
          EquipmentType: 0,
          Name: "護脛",
          RequiredStrength: 70,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 27,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Amaunator's Peace",
        SetPropertiesString: [
          "法力恢復 33% （5 件）",
          "尋獲魔法物品機率提高 +33% （4 件）"
        ],
        Name: "阿曼納塔的聖潔腰帶 (Holy Sash of Amaunator)",
        Index: "Holy Sash of Amaunator",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 30,
        Code: "zlb",
        Properties: [
          {
            PropertyString: "+190-230% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+15-20 體能",
            Index: 1
          },
          {
            PropertyString: "魔法傷害降低 10",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "54-63",
          EquipmentType: 0,
          Name: "魔皮束帶 (Demonhide Sash)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 36,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 4
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3 所有技能",
        Index: 0
      },
      {
        PropertyString: "+50% 傷害強化",
        Index: 3
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 2
      },
      {
        PropertyString: "怪物金幣掉落量提高 +100%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Tika's Request",
    Name: "蒂卡的請求 (Tika's Request)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Tika's Request",
        SetPropertiesString: [],
        Name: "冰霜巨龍之隱 (Frostwyrm Hide)",
        Index: "Frostwyrm Hide",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 60,
        Code: "uea",
        Properties: [
          {
            PropertyString: "攻擊速度 +25%",
            Index: 2
          },
          {
            PropertyString: "+30% 施法速度",
            Index: 0
          },
          {
            PropertyString: "+20% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+0.5 敏捷 （依角色等級而定）",
            Index: 4
          },
          {
            PropertyString: "+40-60 生命",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "730-821",
          EquipmentType: 0,
          Name: "龍皮甲 (Wyrmhide)",
          RequiredStrength: 84,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 67,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Axe",
        "Set": "Tika's Request",
        SetPropertiesString: [
          "+2.5 最大傷害 （依角色等級而定） （4 件）"
        ],
        Name: "神聖救世主 (Hallowed Redeemer)",
        Index: "Hallowed Redeemer",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 72,
        Code: "7ba",
        Properties: [
          {
            PropertyString: "攻擊速度 +30%",
            Index: 1
          },
          {
            PropertyString: "+290-350% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "擊中竊取 12-15% 生命",
            Index: 2
          },
          {
            PropertyString: "+3-7 擊殺法力恢復",
            Index: 3
          },
          {
            PropertyString: "鑲孔 (2)",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(241-279) to (429-495)"
            }
          ],
          EquipmentType: 1,
          Name: "銀刃斧 (Silver-edged Axe)",
          RequiredStrength: 166,
          RequiredDexterity: 65,
          Durability: 250,
          ItemLevel: 65,
          Type: {
            Name: "Axe",
            Index: "Axe",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Tika's Request",
        SetPropertiesString: [
          "尋獲魔法物品機率提高 +25% （3 件）"
        ],
        Name: "龍人面具 (Draconian Mask)",
        Index: "Draconian Mask",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "xlm",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 4
          },
          {
            PropertyString: "擊中竊取 +5% 法力",
            Index: 2
          },
          {
            PropertyString: "+120-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+1 防禦 （依角色等級而定）",
            Index: 1
          },
          {
            PropertyString: "獲得的經驗值 +1-2%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "140-160",
          EquipmentType: 0,
          Name: "兜盔",
          RequiredStrength: 59,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 42,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Tika's Request",
        SetPropertiesString: [],
        Name: "基特西斯腰帶 (Girdle of Kitthix)",
        Index: "Girdle of Kitthix",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "uhc",
        Properties: [
          {
            PropertyString: "+3-5 to Melee Mastery",
            Index: 0
          },
          {
            PropertyString: "+25-35% 傷害強化",
            Index: 1
          },
          {
            PropertyString: "+35 力量",
            Index: 3
          },
          {
            PropertyString: "物理傷害降低 +10-20%",
            Index: 2
          },
          {
            PropertyString: "需求 -20%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "139-155",
          EquipmentType: 0,
          Name: "巨神腰帶 (Colossus Girdle)",
          RequiredStrength: 185,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 85,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Tika's Request",
        SetPropertiesString: [
          "+45 生命 （4 件）"
        ],
        Name: "寂滅護手 (Gauntlets of Quietus)",
        Index: "Gauntlets of Quietus",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 48,
        Code: "xtg",
        Properties: [
          {
            PropertyString: "擊中時有 12% 機率施展等級 3 冰川之槍",
            Index: 2
          },
          {
            PropertyString: "+1-3 to Melee Mastery",
            Index: 1
          },
          {
            PropertyString: "攻擊速度 +15%",
            Index: 3
          },
          {
            PropertyString: "+250% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+10-15 敏捷",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "140",
          EquipmentType: 0,
          Name: "戰鬥護手 (Battle Gauntlets)",
          RequiredStrength: 88,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 49,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "所有抗性 +10%",
        Index: 0
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +40%",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "電擊吸引 +20%",
        Index: 4
      },
      {
        PropertyString: "攻擊者受到 +100 點電擊傷害",
        Index: 3
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +50%",
        Index: 1
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +1.5% （依角色等級而定）",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Corthala Family Heirlooms",
    Name: "科薩拉家族的傳家寶 (Corthala Family Heirlooms)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Corthala Family Heirlooms",
        SetPropertiesString: [],
        Name: "泰蘭爵士的森林之甲 (Sir Tylan's Sylvan Mail)",
        Index: "Sir Tylan's Sylvan Mail",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "ung",
        Properties: [
          {
            PropertyString: "增加 25-50 傷害",
            Index: 2
          },
          {
            PropertyString: "+230-300% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+15-30 力量",
            Index: 3
          },
          {
            PropertyString: "所有抗性 +10-20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1267-1536",
          EquipmentType: 0,
          Name: "鑽石鎖甲 (Diamond Mail)",
          RequiredStrength: 131,
          RequiredDexterity: 0,
          Durability: 26,
          ItemLevel: 72,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Crossbow",
        "Set": "Corthala Family Heirlooms",
        SetPropertiesString: [
          "+10 魔法箭（3 件）",
          "+6 導引箭（4 件）",
          "增加 20-100 傷害 （5 件）"
        ],
        Name: "卡恩德王子的憎惡 (Prince Karnd's Abomination)",
        Index: "Prince Karnd's Abomination",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 79,
        Code: "6rx",
        Properties: [
          {
            PropertyString: "攻擊速度 +60%",
            Index: 2
          },
          {
            PropertyString: "+200-240% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+40% 穿透攻擊",
            Index: 3
          },
          {
            PropertyString: "增加 30-60 傷害",
            Index: 1
          },
          {
            PropertyString: "擊退",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(108-118) to (180-196)"
            }
          ],
          EquipmentType: 1,
          Name: "惡魔弩 (Demon Crossbow)",
          RequiredStrength: 141,
          RequiredDexterity: 98,
          Durability: 0,
          ItemLevel: 84,
          Type: {
            Name: "Crossbow",
            Index: "Crossbow",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Corthala Family Heirlooms",
        SetPropertiesString: [],
        Name: "雅文的地獄面容 (Yavin's Infernal Visage)",
        Index: "Yavin's Infernal Visage",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 81,
        Code: "uh9",
        Properties: [
          {
            PropertyString: "增加 15-30 傷害",
            Index: 2
          },
          {
            PropertyString: "+200-300 防禦",
            Index: 0
          },
          {
            PropertyString: "+15-30 敏捷",
            Index: 3
          },
          {
            PropertyString: "所有抗性 +10-20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "252-303",
          EquipmentType: 0,
          Name: "骸骨面罩 (Bone Visage)",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 84,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Corthala Family Heirlooms",
        SetPropertiesString: [
          "攻擊速度 +20% （3 件）"
        ],
        Name: "格瓦王子的護腕 (Prince Gwar's Bracers)",
        Index: "Prince Gwar's Bracers",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 44,
        Code: "xmg",
        Properties: [
          {
            PropertyString: "+15-20 最小傷害",
            Index: 2
          },
          {
            PropertyString: "+30-40 最大傷害",
            Index: 3
          },
          {
            PropertyString: "+2 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "冰寒抗性 +20-30%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "37",
          EquipmentType: 0,
          Name: "重型護腕 (Heavy Bracers)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 43,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Corthala Family Heirlooms",
        SetPropertiesString: [
          "+30% 跑步 / 行走速度 （4 件）"
        ],
        Name: "達安夫人的慶典脛甲（Lady Daan's Celeritous Jambeau)",
        Index: "Lady Daan's Celeritous Jambeau",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 56,
        Code: "xmb",
        Properties: [
          {
            PropertyString: "攻擊速度 +10%",
            Index: 3
          },
          {
            PropertyString: "+20-30 最大傷害",
            Index: 2
          },
          {
            PropertyString: "+1.75 防禦 （依角色等級而定）",
            Index: 0
          },
          {
            PropertyString: "火焰抗性 +20-30%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "23 to 52",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "37",
          EquipmentType: 0,
          Name: "鐵網靴 (Mesh Boots)",
          RequiredStrength: 65,
          RequiredDexterity: 0,
          Durability: 66,
          ItemLevel: 43,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+15% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+25% 打擊恢復",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+8 閃躲",
        Index: 2
      },
      {
        PropertyString: "攻擊速度 +20%",
        Index: 3
      },
      {
        PropertyString: "+0.75% 致命打擊 （依角色等級而定）",
        Index: 4
      },
      {
        PropertyString: "所有抗性 +40%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Knight's Gallantry",
    Name: "騎士的英勇 (Knight's Gallantry)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Knight's Gallantry",
        SetPropertiesString: [],
        Name: "無畏之甲 (Mail of Courageousness)",
        Index: "Mail of Courageousness",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "uhn",
        Properties: [
          {
            PropertyString: "被擊中時有 17% 機率施展等級 22 火球術",
            Index: 3
          },
          {
            PropertyString: "+20% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+150-190% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "生命回復 +3-5",
            Index: 2
          },
          {
            PropertyString: "火焰抗性 +35-45%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1100-1400",
          EquipmentType: 0,
          Name: "骸骨網甲 (Boneweave)",
          RequiredStrength: 158,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 62,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Club",
        "Set": "Knight's Gallantry",
        SetPropertiesString: [],
        Name: "膽氣之棍 (Baton of Intrepidity)",
        Index: "Baton of Intrepidity",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 68,
        Code: "7cl",
        Properties: [
          {
            PropertyString: "+1-3 狂暴之擊",
            Index: 3
          },
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+230-280% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "擊退",
            Index: 2
          },
          {
            PropertyString: "冰寒抗性 +35-45%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(115-133) to (141-163)"
            }
          ],
          EquipmentType: 1,
          Name: "打擊棍 (Truncheon)",
          RequiredStrength: 88,
          RequiredDexterity: 43,
          Durability: 250,
          ItemLevel: 52,
          Type: {
            Name: "Club",
            Index: "Club",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Knight's Gallantry",
        SetPropertiesString: [],
        Name: "勇氣之墻 (Wall of Bravery)",
        Index: "Wall of Bravery",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 51,
        Code: "xow",
        Properties: [
          {
            PropertyString: "+25% 格擋速度",
            Index: 3
          },
          {
            PropertyString: "格擋機率提高 +20-30%",
            Index: 1
          },
          {
            PropertyString: "+100-130% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +25-35%",
            Index: 4
          },
          {
            PropertyString: "等級 13 傷害加深（100 次）",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "10 to 17",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "189-207",
          EquipmentType: 0,
          Name: "大盾 (Pavise)",
          RequiredStrength: 133,
          RequiredDexterity: 0,
          Durability: 72,
          ItemLevel: 50,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Knight's Gallantry",
        SetPropertiesString: [],
        Name: "俠義之盔 (Helm of Chivalry)",
        Index: "Helm of Chivalry",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 60,
        Code: "ukp",
        Properties: [
          {
            PropertyString: "殺死敵人時有 100% 機率施展等級 4 攻擊反噬",
            Index: 3
          },
          {
            PropertyString: "+120-140% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+10-15 力量",
            Index: 2
          },
          {
            PropertyString: "+10-15 敏捷",
            Index: 1
          },
          {
            PropertyString: "電擊抗性 +35-45%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "224-244",
          EquipmentType: 0,
          Name: "多頭蛇顱盔 (Hydraskull)",
          RequiredStrength: 84,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 63,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Knight's Gallantry",
        SetPropertiesString: [
          "增加 1-100 電擊傷害 （4 件）",
          "+30 生命 （2 件）",
          "+30 法力 （3 件）"
        ],
        Name: "蠻勇之帶 (Belt of Temerity)",
        Index: "Belt of Temerity",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 20,
        RequiredLevel: 30,
        Code: "hbl",
        Properties: [
          {
            PropertyString: "+100-120% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "毒素抗性 +35-45%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "18-19",
          EquipmentType: 0,
          Name: "鎧甲腰帶 (Plated Belt)",
          RequiredStrength: 60,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 27,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20% 致命打擊",
        Index: 0
      },
      {
        PropertyString: "+20% 概率造成粉碎打擊",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+3 生命 （依角色等級而定）",
        Index: 1
      },
      {
        PropertyString: "+1.5 法力 （依角色等級而定）",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +60%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Lord Sith's Province",
    Name: "西斯王的行省 (Lord Sith's Province)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Lord Sith's Province",
        SetPropertiesString: [],
        Name: "邪惡之烏木板甲 (Ebony Plate of Evil)",
        Index: "Ebony Plate of Evil",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 76,
        Code: "urs",
        Properties: [
          {
            PropertyString: "+1-3 毒素與骸骨技能 （只限死靈法師）",
            Index: 2
          },
          {
            PropertyString: "+30% 打擊恢復",
            Index: 3
          },
          {
            PropertyString: "+600-800 防禦",
            Index: 0
          },
          {
            PropertyString: "等級 30 偷取生命（12 次）",
            Index: 4
          },
          {
            PropertyString: "需求 -35%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "995-1195",
          EquipmentType: 0,
          Name: "鱗鎧胸甲 (Great Hauberk)",
          RequiredStrength: 118,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 75,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Lord Sith's Province",
        SetPropertiesString: [],
        Name: "光明之偏轉護盾 (Deflector of Light)",
        Index: "Deflector of Light",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 49,
        Code: "xts",
        Properties: [
          {
            PropertyString: "擊中竊取 4-6% 生命",
            Index: 3
          },
          {
            PropertyString: "凍結目標 +4",
            Index: 4
          },
          {
            PropertyString: "+120-140% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "物理傷害降低 +15%",
            Index: 1
          },
          {
            PropertyString: "冰凍時間減半",
            Index: 5
          },
          {
            PropertyString: "需求 -50%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "12 to 16",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "178-194",
          EquipmentType: 0,
          Name: "上古盾 (Ancient Shield)",
          RequiredStrength: 110,
          RequiredDexterity: 0,
          Durability: 80,
          ItemLevel: 56,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Lord Sith's Province",
        SetPropertiesString: [],
        Name: "黑暗之災變冠冕 (Dark Cataclysm)",
        Index: "Dark Cataclysm",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "urn",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 3
          },
          {
            PropertyString: "+2 閃避",
            Index: 4
          },
          {
            PropertyString: "+135-175% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+35 法力",
            Index: 2
          },
          {
            PropertyString: "需求 -60%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "263-308",
          EquipmentType: 0,
          Name: "日冕之冠 (Corona)",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 85,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Wand",
        "Set": "Lord Sith's Province",
        SetPropertiesString: [
          "增加 80-180 傷害 （4 件）"
        ],
        Name: "惡毒之短杖 (Malignant Rod)",
        Index: "Malignant Rod",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "9bw",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "+20% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+0.75 法力 （依角色等級而定）",
            Index: 2
          },
          {
            PropertyString: "法力恢復 45%",
            Index: 3
          },
          {
            PropertyString: "獲得的經驗值 +1%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "10 to 22"
            }
          ],
          EquipmentType: 1,
          Name: "古墓魔杖 (Tomb Wand)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 43,
          Type: {
            Name: "Wand",
            Index: "Wand",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 所有技能",
        Index: 0
      },
      {
        PropertyString: "+50 生命",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "被擊中時有 100% 機率施展等級 9 電能彈",
        Index: 5
      },
      {
        PropertyString: "+1 所有技能",
        Index: 4
      },
      {
        PropertyString: "+30% 打擊恢復",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +30%",
        Index: 1
      },
      {
        PropertyString: "+5 擊殺法力恢復",
        Index: 3
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +75%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Kai Lord's Valiance",
    Name: "君主凱的英勇 (Kai Lord's Valiance)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Kai Lord's Valiance",
        SetPropertiesString: [],
        Name: "赫爾沙扎 (Helshazag)",
        Index: "Helshazag",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "upl",
        Properties: [
          {
            PropertyString: "+160-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "生命上限 +25%",
            Index: 3
          },
          {
            PropertyString: "魔法傷害降低 20",
            Index: 4
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +1.25% （依角色等級而定）",
            Index: 2
          },
          {
            PropertyString: "等級 12 尋找物品（200 次）",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1068-1233",
          EquipmentType: 0,
          Name: "炎魔皮板甲 (Balrog Skin)",
          RequiredStrength: 165,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 76,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Kai Lord's Valiance",
        SetPropertiesString: [
          "增加 256-500 魔法傷害 （5 件）"
        ],
        Name: "夏日之刃 (Summerswerd)",
        Index: "Summerswerd",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 83,
        Code: "7cr",
        Properties: [
          {
            PropertyString: "增加 50-150 傷害",
            Index: 0
          },
          {
            PropertyString: "+175% 對惡魔的傷害",
            Index: 4
          },
          {
            PropertyString: "+350% 對不死怪物的傷害",
            Index: 3
          },
          {
            PropertyString: "擊中竊取 12-15% 法力",
            Index: 1
          },
          {
            PropertyString: "擊中竊取 15-18% 生命",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "81 to 185"
            }
          ],
          EquipmentType: 1,
          Name: "幻化之刃 (Phase Blade)",
          RequiredStrength: 25,
          RequiredDexterity: 136,
          Durability: 0,
          ItemLevel: 73,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Kai Lord's Valiance",
        SetPropertiesString: [],
        Name: "赫爾加斯特腰帶 (Helghast Waistband)",
        Index: "Helghast Waistband",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "utc",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 3
          },
          {
            PropertyString: "攻擊速度 +20%",
            Index: 4
          },
          {
            PropertyString: "+110-130% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +10-15%",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 +10-15%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "126-138",
          EquipmentType: 0,
          Name: "食人妖腰帶 (Troll Belt)",
          RequiredStrength: 151,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 82,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Kai Lord's Valiance",
        SetPropertiesString: [
          "+30% 跑步 / 行走速度 （3 件）"
        ],
        Name: "神聖護脛 (Hallowed Greaves)",
        Index: "Hallowed Greaves",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 58,
        Code: "xtb",
        Properties: [
          {
            PropertyString: "+1 聖騎士技能等級",
            Index: 4
          },
          {
            PropertyString: "+30% 打擊恢復",
            Index: 3
          },
          {
            PropertyString: "+25-35 最小傷害",
            Index: 1
          },
          {
            PropertyString: "+125-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "怪物金幣掉落量提高 +75%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "37 to 64",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "90-100",
          EquipmentType: 0,
          Name: "戰鬥靴 (Battle Boots)",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 49,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Kai Lord's Valiance",
        SetPropertiesString: [
          "裝備時賦予等級 6 神聖電擊靈氣 （2 件）",
          "尋獲魔法物品機率提高 +65% （3 件）"
        ],
        Name: "光之矛的偏轉護盾 (Sunspear Deflector)",
        Index: "Sunspear Deflector",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 63,
        Code: "xow",
        Properties: [
          {
            PropertyString: "+15% 格擋速度",
            Index: 2
          },
          {
            PropertyString: "格擋機率提高 +100%",
            Index: 1
          },
          {
            PropertyString: "+175-200% 防禦強化",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "10 to 17",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "189-207",
          EquipmentType: 0,
          Name: "大盾 (Pavise)",
          RequiredStrength: 133,
          RequiredDexterity: 0,
          Durability: 72,
          ItemLevel: 50,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "攻擊速度 +10%",
        Index: 0
      },
      {
        PropertyString: "攻擊速度 +10%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "寒冰吸引 +25%",
        Index: 2
      },
      {
        PropertyString: "電擊吸引 +25%",
        Index: 3
      },
      {
        PropertyString: "火焰吸引 +25%",
        Index: 1
      },
      {
        PropertyString: "中毒的時效縮短 70%",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Path of Bravery",
    Name: "無畏之路 (Path of Bravery)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Path of Bravery",
        SetPropertiesString: [
          "敵人火焰抗性 -20% （2 件）",
          "敵人火焰抗性 -20% （3 件）",
          "敵人火焰抗性 -20% （4 件）",
          "敵人火焰抗性 -20% （5 件）"
        ],
        Name: "帝國重甲 (Imperial Plate)",
        Index: "Imperial Plate",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "ult",
        Properties: [
          {
            PropertyString: "+200% 對惡魔的傷害",
            Index: 0
          },
          {
            PropertyString: "敵人火焰抗性 -20%",
            Index: 2
          },
          {
            PropertyString: "+100-125% 防禦強化",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "844-949",
          EquipmentType: 0,
          Name: "地獄鍛甲 (Hellforge Plate)",
          RequiredStrength: 196,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 78,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Path of Bravery",
        SetPropertiesString: [
          "敵人冰寒抗性 -20% （2 件）",
          "敵人冰寒抗性 -20% （3 件）",
          "敵人冰寒抗性 -20% （4 件）",
          "敵人冰寒抗性 -20% （5 件）"
        ],
        Name: "帝國头盔 (Imperial Helm)",
        Index: "Imperial Helm",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "xkp",
        Properties: [
          {
            PropertyString: "敵人冰寒抗性 -20%",
            Index: 2
          },
          {
            PropertyString: "+125-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "物理傷害降低 +15%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "119-132",
          EquipmentType: 0,
          Name: "便盔 (Sallet)",
          RequiredStrength: 43,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 37,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Path of Bravery",
        SetPropertiesString: [
          "敵人電擊抗性 -20% （2 件）",
          "敵人電擊抗性 -20% （3 件）",
          "敵人電擊抗性 -20% （4 件）",
          "敵人電擊抗性 -20% （5 件）"
        ],
        Name: "帝國腰帶 (Imperial Girdle)",
        Index: "Imperial Girdle",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "uhc",
        Properties: [
          {
            PropertyString: "敵人電擊抗性 -20%",
            Index: 2
          },
          {
            PropertyString: "+125-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +35-40%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "139-155",
          EquipmentType: 0,
          Name: "巨神腰帶 (Colossus Girdle)",
          RequiredStrength: 185,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 85,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Path of Bravery",
        SetPropertiesString: [
          "敵人毒素抗性 -20% （2 件）",
          "敵人毒素抗性 -20% （3 件）",
          "敵人毒素抗性 -20% （4 件）",
          "敵人毒素抗性 -20% （5 件）"
        ],
        Name: "帝國護脛 (Imperial Greaves)",
        Index: "Imperial Greaves",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "uhb",
        Properties: [
          {
            PropertyString: "敵人毒素抗性 -20%",
            Index: 2
          },
          {
            PropertyString: "+120-140% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "魔法抗性 +20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "83 to 149",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "138-151",
          EquipmentType: 0,
          Name: "勇士護脛 (Myrmidon Greaves)",
          RequiredStrength: 208,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 85,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Gloves",
        "Set": "Path of Bravery",
        SetPropertiesString: [
          "攻擊速度 +20% （3 件）"
        ],
        Name: "帝國臂鎧 (Imperial Gauntlets)",
        Index: "Imperial Gauntlets",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 76,
        Code: "uhg",
        Properties: [
          {
            PropertyString: "+30% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+120-150% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "法力恢復 60%",
            Index: 3
          },
          {
            PropertyString: "需求 -50%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "138-157",
          EquipmentType: 0,
          Name: "巨魔護手 (Ogre Gauntlets)",
          RequiredStrength: 185,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 85,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Scepter",
        "Set": "Path of Bravery",
        SetPropertiesString: [
          "增加 50-100 傷害 （4 件）",
          "敵人火焰抗性 -20% （2 件）",
          "敵人冰寒抗性 -20% （3 件）",
          "敵人電擊抗性 -20% （4 件）",
          "敵人毒素抗性 -20% （5 件）"
        ],
        Name: "帝國權杖 (Imperial Scepter)",
        Index: "Imperial Scepter",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 50,
        Code: "9ws",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+200-220% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "擊中竊取 6-8% 生命",
            Index: 3
          },
          {
            PropertyString: "照亮範圍 +5",
            Index: 4
          },
          {
            PropertyString: "鑲孔 (2-3)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(48-51) to (114-121)"
            }
          ],
          EquipmentType: 1,
          Name: "聖恩權杖 (Divine Scepter)",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 45,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20% 打擊恢復",
        Index: 0
      },
      {
        PropertyString: "+20% 打擊恢復",
        Index: 2
      },
      {
        PropertyString: "+30% 格擋速度",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+30% 跑步 / 行走速度",
        Index: 3
      },
      {
        PropertyString: "格擋機率提高 +15%",
        Index: 1
      },
      {
        PropertyString: "獲得的經驗值 +2%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Terror of the Deep",
    Name: "深海之恐怖 (Terror of the Deep)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Terror of the Deep",
        SetPropertiesString: [],
        Name: "慘白恐怖 (Great White Terror)",
        Index: "Great White Terror",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "uld",
        Properties: [
          {
            PropertyString: "+20% 跑步 / 行走速度",
            Index: 4
          },
          {
            PropertyString: "電擊抗性 -50%",
            Index: 2
          },
          {
            PropertyString: "火焰抗性 +75%",
            Index: 3
          },
          {
            PropertyString: "物理傷害降低 +25%",
            Index: 0
          },
          {
            PropertyString: "物理傷害降低 35",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "417",
          EquipmentType: 0,
          Name: "海怪之殼 (Kraken Shell)",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 48,
          ItemLevel: 81,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Polearm",
        "Set": "Terror of the Deep",
        SetPropertiesString: [
          "攻擊速度 +45% （4 件）",
          "增加 50-250 傷害 （3 件）"
        ],
        Name: "飼育狂怒 (Feeding Frenzy)",
        Index: "Feeding Frenzy",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "7wc",
        Properties: [
          {
            PropertyString: "+3 野蠻人技能等級",
            Index: 4
          },
          {
            PropertyString: "+220-290% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "擊中竊取 +6% 法力",
            Index: 3
          },
          {
            PropertyString: "擊中竊取 6% 生命",
            Index: 2
          },
          {
            PropertyString: "需求 -25%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(128-156) to (364-444)"
            }
          ],
          EquipmentType: 1,
          Name: "巨型斬鐮 (Giant Thresher)",
          RequiredStrength: 188,
          RequiredDexterity: 140,
          Durability: 250,
          ItemLevel: 85,
          Type: {
            Name: "Polearm",
            Index: "Polearm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Terror of the Deep",
        SetPropertiesString: [],
        Name: "真子的迅捷 (Mako's Quickness)",
        Index: "Mako's Quickness",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 39,
        Code: "zvb",
        Properties: [
          {
            PropertyString: "+4-8 閃身",
            Index: 4
          },
          {
            PropertyString: "+15% 跑步 / 行走速度",
            Index: 1
          },
          {
            PropertyString: "+15% 打擊恢復",
            Index: 2
          },
          {
            PropertyString: "+130-160% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+25 敏捷",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "73-83",
          EquipmentType: 0,
          Name: "鯊皮腰帶 (Sharkskin Belt)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 39,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Terror of the Deep",
        SetPropertiesString: [],
        Name: "錘头的堅持 (Hammerhead's Persistence)",
        Index: "Hammerhead's Persistence",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 44,
        Code: "xvb",
        Properties: [
          {
            PropertyString: "+15-25% 概率造成粉碎打擊",
            Index: 3
          },
          {
            PropertyString: "+100% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+60-90 生命",
            Index: 4
          },
          {
            PropertyString: "物理傷害降低 +10%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "28 to 50",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "68",
          EquipmentType: 0,
          Name: "鯊皮靴 (Sharkskin Boots)",
          RequiredStrength: 47,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 39,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "冰凍時間減半",
        Index: 0
      },
      {
        PropertyString: "+25% 致命打擊",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "擊中時有 15% 機率施展等級 18 震波衝擊",
        Index: 4
      },
      {
        PropertyString: "+2 所有技能",
        Index: 0
      },
      {
        PropertyString: "+150% 傷害強化",
        Index: 2
      },
      {
        PropertyString: "增加 25-50 傷害",
        Index: 3
      },
      {
        PropertyString: "+66% 概率造成粉碎打擊",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Celestial Hierarchy",
    Name: "天堂體系 (Celestial Hierarchy)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Celestial Hierarchy",
        SetPropertiesString: [],
        Name: "天使 (Angels)",
        Index: "Angels",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 81,
        Code: "uth",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 5
          },
          {
            PropertyString: "+20% 施法速度",
            Index: 0
          },
          {
            PropertyString: "+20% 打擊恢復",
            Index: 2
          },
          {
            PropertyString: "+20-25% Faster Block Rate",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +1.12% （依角色等級而定）",
            Index: 3
          },
          {
            PropertyString: "鑲孔 (1-2)",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "433",
          EquipmentType: 0,
          Name: "漆護鎧甲 (Lacquered Plate)",
          RequiredStrength: 208,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 82,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Sword",
        "Set": "Celestial Hierarchy",
        SetPropertiesString: [
          "+250 最大傷害 （6 件）",
          "增加 100-200 魔法傷害 （2 件）",
          "增加 100-200 火焰傷害 （4 件）",
          "增加 64-200 電擊傷害 （5 件）",
          "增加 100-200 寒冰傷害 （3 件）"
        ],
        Name: "權天使 (Principality)",
        Index: "Principality",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 45,
        Code: "9b9",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 4
          },
          {
            PropertyString: "+260-300% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "+15% 概率造成粉碎打擊",
            Index: 2
          },
          {
            PropertyString: "+15% 致命打擊",
            Index: 1
          },
          {
            PropertyString: "-1 to 吸取生命 -5",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 0,
              DamageString: "(50-56) to (144-160)"
            },
            {
              Type: 1,
              DamageString: "(140-156) to (216-240)"
            }
          ],
          EquipmentType: 1,
          Name: "哥德劍 (Gothic Sword)",
          RequiredStrength: 113,
          RequiredDexterity: 20,
          Durability: 250,
          ItemLevel: 48,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Celestial Hierarchy",
        SetPropertiesString: [
          "法力恢復 50% （3 件）",
          "所有抗性 +10% （4 件）",
          "尋獲魔法物品機率提高 +35% （5 件）"
        ],
        Name: "德天使 (Virtue)",
        Index: "Virtue",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "zlb",
        Properties: [
          {
            PropertyString: "+80-110% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+35-50 生命",
            Index: 1
          },
          {
            PropertyString: "生命回復 +6",
            Index: 3
          },
          {
            PropertyString: "+7 擊殺法力恢復",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "54-63",
          EquipmentType: 0,
          Name: "魔皮束帶 (Demonhide Sash)",
          RequiredStrength: 20,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 36,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "Celestial Hierarchy",
        SetPropertiesString: [
          "+35 力量 （5 件）"
        ],
        Name: "主天使 (Dominion)",
        Index: "Dominion",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "utb",
        Properties: [
          {
            PropertyString: "+50% 跑步 / 行走速度",
            Index: 2
          },
          {
            PropertyString: "-20% Faster Hit Recovery",
            Index: 4
          },
          {
            PropertyString: "+180-210% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "-20 敏捷",
            Index: 3
          },
          {
            PropertyString: "需求 -20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "50 to 145",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "168-186",
          EquipmentType: 0,
          Name: "幻鏡戰靴 (Mirrored Boots)",
          RequiredStrength: 163,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 81,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Celestial Hierarchy",
        SetPropertiesString: [],
        Name: "智天使 (Cherubim)",
        Index: "Cherubim",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 61,
        Code: "ulm",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "+150-200 防禦",
            Index: 1
          },
          {
            PropertyString: "+0.5 能量 （依角色等級而定）",
            Index: 4
          },
          {
            PropertyString: "+30 法力",
            Index: 2
          },
          {
            PropertyString: "毒素抗性 +25%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "255-305",
          EquipmentType: 0,
          Name: "覆頰盔 (Armet)",
          RequiredStrength: 109,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 68,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Celestial Hierarchy",
        SetPropertiesString: [],
        Name: "六翼天使 (Seraphim)",
        Index: "Seraphim",
        Enabled: true,
        Rarity: 5,
        ItemLevel: 49,
        RequiredLevel: 49,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "+25% 傷害強化",
            Index: 1
          },
          {
            PropertyString: "+10 擊殺生命恢復",
            Index: 2
          },
          {
            PropertyString: "獲得的經驗值 +1-2%",
            Index: 3
          },
          {
            PropertyString: "所有商人的價格降低 5%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "尋獲魔法物品機率提高 +20%",
        Index: 0
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +25%",
        Index: 2
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +45%",
        Index: 4
      },
      {
        PropertyString: "+2 所有技能",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "殺死的怪物就此安息",
        Index: 2
      },
      {
        PropertyString: "生命回復 +20",
        Index: 1
      },
      {
        PropertyString: "所有抗性 +40%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Lords of Hell",
    Name: "地獄之主 (Lords of Hell)",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Lords of Hell",
        SetPropertiesString: [],
        Name: "墨菲斯托的迷霧光環 (Mephisto's Misty Aura)",
        Index: "Mephisto's Misty Aura",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "uul",
        Properties: [
          {
            PropertyString: "被擊中時有 20% 機率施展等級 8 魔影斗蓬",
            Index: 0
          },
          {
            PropertyString: "裝備時賦予等級 1 淨化靈氣",
            Index: 3
          },
          {
            PropertyString: "+140-160% 防禦強化",
            Index: 2
          },
          {
            PropertyString: "照亮範圍 -4",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1072-1162",
          EquipmentType: 0,
          Name: "暗影鎧甲 (Shadow Plate)",
          RequiredStrength: 230,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 83,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Lords of Hell",
        SetPropertiesString: [
          "尋獲魔法物品機率提高 +50% （4 件）"
        ],
        Name: "迪亞波羅的灵魂石之戒 (Diablo's Soulstone Ring)",
        Index: "Diablo's Soulstone Ring",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 77,
        RequiredLevel: 77,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "+50 生命",
            Index: 1
          },
          {
            PropertyString: "+50 法力",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 +10%",
            Index: 3
          },
          {
            PropertyString: "魔法傷害降低 20",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Lords of Hell",
        SetPropertiesString: [],
        Name: "巴爾的神秘護身符 (Baal's Cryptic Amulet)",
        Index: "Baal's Cryptic Amulet",
        Enabled: true,
        Rarity: 3,
        ItemLevel: 74,
        RequiredLevel: 74,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+2 所有技能",
            Index: 0
          },
          {
            PropertyString: "生命回復 +25",
            Index: 2
          },
          {
            PropertyString: "法力恢復 50%",
            Index: 3
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +35-50%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Javelin",
        "Set": "Lords of Hell",
        SetPropertiesString: [
          "+8 閃電烈怒（3 件）",
          "攻擊速度 +25% （2 件）"
        ],
        Name: "天堂之槍 (Heaven's Lances)",
        Index: "Heaven's Lances",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 51,
        Code: "9ts",
        Properties: [
          {
            PropertyString: "+190-240% 傷害強化",
            Index: 0
          },
          {
            PropertyString: "擊退",
            Index: 3
          },
          {
            PropertyString: "堆疊數量提高 75",
            Index: 1
          },
          {
            PropertyString: "回復數量",
            Index: 2
          },
          {
            PropertyString: "回復數量",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(37-44) to (101-119)"
            },
            {
              Type: 2,
              DamageString: "(52-61) to (156-183)"
            }
          ],
          EquipmentType: 1,
          Name: "魚叉 (Harpoon)",
          RequiredStrength: 25,
          RequiredDexterity: 118,
          Durability: 250,
          ItemLevel: 51,
          Type: {
            Name: "Javelin",
            Index: "Javelin",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+2 所有技能",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "被擊中時有 13% 機率施展等級 31 電能彈",
        Index: 1
      },
      {
        PropertyString: "+75% 穿透攻擊",
        Index: 0
      },
      {
        PropertyString: "+55% 機率造成開放傷口",
        Index: 5
      },
      {
        PropertyString: "防止怪物自療",
        Index: 4
      },
      {
        PropertyString: "使目標減慢 20%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +40%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Corruption Coils",
    Name: "腐化纏繞 (Corruption Coils)",
    SetItems: [
      {
        Type: "Ring",
        "Set": "Corruption Coils",
        SetPropertiesString: [
          "+40% 火焰技能傷害 （3 件）",
          "尋獲魔法物品機率提高 +50% （2 件）"
        ],
        Name: "惡魔的嗤笑 (Demonic Chuckle)",
        Index: "Demonic Chuckle",
        Enabled: true,
        Rarity: 1,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+35-50 生命",
            Index: 0
          },
          {
            PropertyString: "+25 法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Corruption Coils",
        SetPropertiesString: [
          "+40% 閃電技能傷害 （3 件）",
          "怪物金幣掉落量提高 +100% （2 件）"
        ],
        Name: "邪惡的幽默 (Evil Humor)",
        Index: "Evil Humor",
        Enabled: true,
        Rarity: 1,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+35-50 生命",
            Index: 0
          },
          {
            PropertyString: "+25 法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "戒指",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Ring",
            Index: "Ring",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Corruption Coils",
        SetPropertiesString: [
          "被擊中時有 10% 機率施展等級 20 嘲諷 （2 件）",
          "+40% 寒冰技能傷害 （3 件）"
        ],
        Name: "誘惑的死亡 (Temptation's Death)",
        Index: "Temptation's Death",
        Enabled: true,
        Rarity: 1,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+50-75 生命",
            Index: 0
          },
          {
            PropertyString: "+40 法力",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          EquipmentType: 2,
          Name: "護身符",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 0,
          Type: {
            Name: "Amulet",
            Index: "Amulet",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "吸取生命 -50",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+5 所有技能",
        Index: 4
      },
      {
        PropertyString: "+40% 毒素技能傷害",
        Index: 2
      },
      {
        PropertyString: "All Resistances -50%",
        Index: 0
      },
      {
        PropertyString: "獲得的經驗值 -40%",
        Index: 1
      },
      {
        PropertyString: "尋獲魔法物品機率提高 +100%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Maadi's Paradox",
    Name: "馬迪的悖論 (Maadi's Paradox)",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "Maadi's Paradox",
        SetPropertiesString: [
          "+5 骨矛（只限死靈法師） （3 件）",
          "+30 能量 （2 件）"
        ],
        Name: "馬迪的沉默 (Maadi's Silence)",
        Index: "Maadi's Silence",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 47,
        RequiredLevel: 47,
        Code: "uvg",
        Properties: [
          {
            PropertyString: "+50-100 防禦",
            Index: 3
          },
          {
            PropertyString: "+50 生命",
            Index: 2
          },
          {
            PropertyString: "物理傷害降低 10",
            Index: 1
          },
          {
            PropertyString: "魔法傷害降低 10",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "106-156",
          EquipmentType: 0,
          Name: "吸血鬼骸骨手套 (Vampirebone Gloves)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 63,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Helm",
        "Set": "Maadi's Paradox",
        SetPropertiesString: [
          "+15-20% 跑步 / 行走速度 （2 件）",
          "+15% 施法速度 （3 件）"
        ],
        Name: "馬迪的願景 (Maadi's Vision)",
        Index: "Maadi's Vision",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 63,
        RequiredLevel: 63,
        Code: "uh9",
        Properties: [
          {
            PropertyString: "+20-30% 打擊恢復",
            Index: 2
          },
          {
            PropertyString: "+150-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+25 體能",
            Index: 1
          },
          {
            PropertyString: "所有抗性 +10%",
            Index: 3
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +30-50%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "252-303",
          EquipmentType: 0,
          Name: "骸骨面罩 (Bone Visage)",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 84,
          Type: {
            Name: "Helm",
            Index: "Helm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Maadi's Paradox",
        SetPropertiesString: [
          "+50 體能 （2 件）",
          "+50 能量 （3 件）",
          "魔法吸引 +10% （4 件）",
          "魔法傷害降低 10 （5 件）"
        ],
        Name: "馬迪的精神 (Maadi's Spirit)",
        Index: "Maadi's Spirit",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 47,
        RequiredLevel: 47,
        Code: "uhn",
        Properties: [
          {
            PropertyString: "+150-200% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "+100-200 防禦",
            Index: 4
          },
          {
            PropertyString: "+25 體能",
            Index: 1
          },
          {
            PropertyString: "+25 能量",
            Index: 2
          },
          {
            PropertyString: "法力上限 +10-15%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1100-1400",
          EquipmentType: 0,
          Name: "骸骨網甲 (Boneweave)",
          RequiredStrength: 158,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 62,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Wand",
        "Set": "Maadi's Paradox",
        SetPropertiesString: [
          "+25% 施法速度 （2 件）",
          "所有抗性 +20% （3 件）"
        ],
        Name: "馬迪的火炬 (Maadi's Torch)",
        Index: "Maadi's Torch",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 64,
        RequiredLevel: 64,
        Code: "7gw",
        Properties: [
          {
            PropertyString: "+1 Additional Bone Spear Projectiles",
            Index: 1
          },
          {
            PropertyString: "+1-2 所有技能",
            Index: 0
          },
          {
            PropertyString: "+30% 施法速度",
            Index: 2
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +10-30%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "22 to 28"
            }
          ],
          EquipmentType: 1,
          Name: "埋骨魔杖 (Unearthed Wand)",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 86,
          Type: {
            Name: "Wand",
            Index: "Wand",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Voodoo Heads",
        "Set": "Maadi's Paradox",
        SetPropertiesString: [
          "+1 Additional Bone Spear Projectiles （5 件）"
        ],
        Name: "马迪的灵魂 (Maadi's Soul)",
        Index: "Maadi's Soul",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 49,
        RequiredLevel: 49,
        Code: "ned",
        Properties: [
          {
            PropertyString: "+1-2 所有技能",
            Index: 0
          },
          {
            PropertyString: "+20-30% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+20-35% Faster Block Rate",
            Index: 4
          },
          {
            PropertyString: "格擋機率提高 +20-35%",
            Index: 3
          },
          {
            PropertyString: "+150-200% 防禦強化",
            Index: 5
          },
          {
            PropertyString: "所有抗性 +20%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "247-297",
          EquipmentType: 0,
          Name: "督軍顱骨 (Overseer Skull)",
          RequiredStrength: 91,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 66,
          Type: {
            Name: "Voodoo Heads",
            Index: "Voodoo Heads",
            Class: "nec"
          },
          RequiredClass: "Necromancer"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "所有抗性 +50%",
        Index: 0
      },
      {
        PropertyString: "+5 骨矛（只限死靈法師）",
        Index: 2
      },
      {
        PropertyString: "+200 生命",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+5 所有技能",
        Index: 0
      },
      {
        PropertyString: "+10 能量 Shield",
        Index: 2
      },
      {
        PropertyString: "魔法抗性 +15%",
        Index: 3
      },
      {
        PropertyString: "無法冰凍",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "The Raven's Nest",
    Name: "烏鴉的巢穴 (The Raven's Nest)",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "The Raven's Nest",
        SetPropertiesString: [
          "+15% 施法速度 （4 件）",
          "冰寒抗性 +30% （2 件）"
        ],
        Name: "烏鴉的利爪 (The Raven's Talons)",
        Index: "The Raven's Talons",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 5,
        RequiredLevel: 10,
        Code: "lgl",
        Properties: [
          {
            PropertyString: "+5-10% 施法速度",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +5-10%",
            Index: 1
          },
          {
            PropertyString: "+5-10 所有屬性",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "2",
          EquipmentType: 0,
          Name: "皮革手套 (Leather Gloves)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 3,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Boots",
        "Set": "The Raven's Nest",
        SetPropertiesString: [
          "+30% 跑步 / 行走速度 （2 件）",
          "所有抗性 +20% （3 件）"
        ],
        Name: "烏鴉之足 (The Raven's Feet)",
        Index: "The Raven's Feet",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 5,
        RequiredLevel: 10,
        Code: "mbt",
        Properties: [
          {
            PropertyString: "+10% 跑步 / 行走速度",
            Index: 2
          },
          {
            PropertyString: "+100 防禦",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +10%",
            Index: 1
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +10-25%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "6 to 12",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "108",
          EquipmentType: 0,
          Name: "鎖鍊靴 (Chain Boots)",
          RequiredStrength: 30,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 12,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "The Raven's Nest",
        SetPropertiesString: [
          "+2 所有技能 （3 件）",
          "冰寒抗性上限 +2 （4 件）",
          "寒冰吸引 +15 （2 件）"
        ],
        Name: "烏鴉之翼 (The Raven's Wing)",
        Index: "The Raven's Wing",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 45,
        Code: "xpk",
        Properties: [
          {
            PropertyString: "+20% 跑步 / 行走速度",
            Index: 4
          },
          {
            PropertyString: "+20-30% 施法速度",
            Index: 3
          },
          {
            PropertyString: "+20-30% Faster Block Rate",
            Index: 2
          },
          {
            PropertyString: "格擋機率提高 +20-30%",
            Index: 1
          },
          {
            PropertyString: "+100% 防禦強化",
            Index: 0
          },
          {
            PropertyString: "所有抗性 +20-30%",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "18 to 35",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "118",
          EquipmentType: 0,
          Name: "倒刺盾 (Barbed Shield)",
          RequiredStrength: 65,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 42,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Knife",
        "Set": "The Raven's Nest",
        SetPropertiesString: [
          "+2 to Raven Hits （4 件）",
          "+10% 施法速度 （2 件）"
        ],
        Name: "烏鴉的喙 (The Raven's Beak)",
        Index: "The Raven's Beak",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 35,
        RequiredLevel: 45,
        Code: "9bl",
        Properties: [
          {
            PropertyString: "+1-2 to Raven Hits",
            Index: 7
          },
          {
            PropertyString: "+1 所有技能",
            Index: 0
          },
          {
            PropertyString: "攻擊速度 +15-30%",
            Index: 3
          },
          {
            PropertyString: "+20-30% 施法速度",
            Index: 1
          },
          {
            PropertyString: "+15-30% 打擊恢復",
            Index: 2
          },
          {
            PropertyString: "無視目標防禦",
            Index: 4
          },
          {
            PropertyString: "擊中使目標目盲 +1",
            Index: 5
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "19 to 36"
            }
          ],
          EquipmentType: 1,
          Name: "窄刃匕首 (Stiletto)",
          RequiredStrength: 47,
          RequiredDexterity: 97,
          Durability: 250,
          ItemLevel: 46,
          Type: {
            Name: "Knife",
            Index: "Knife",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "The Raven's Nest",
        SetPropertiesString: [
          "冰寒抗性上限 +3 （4 件）",
          "寒冰吸引 +10% （2 件）",
          "無法冰凍 （3 件）"
        ],
        Name: "烏鴉的羽毛 (The Raven's Feathers)",
        Index: "The Raven's Feathers",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 60,
        RequiredLevel: 60,
        Code: "uea",
        Properties: [
          {
            PropertyString: "+2-5 暖流",
            Index: 4
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
            PropertyString: "+300-500 對遠程防禦",
            Index: 1
          },
          {
            PropertyString: "冰寒抗性 +30%",
            Index: 3
          },
          {
            PropertyString: "物理傷害降低 10",
            Index: 5
          },
          {
            PropertyString: "魔法傷害降低 10",
            Index: 6
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "730-821",
          EquipmentType: 0,
          Name: "龍皮甲 (Wyrmhide)",
          RequiredStrength: 84,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 67,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+5 掠鴉（只限德魯伊）",
        Index: 0
      },
      {
        PropertyString: "+ Max Ravens, - Max Wolves",
        Index: 1
      },
      {
        PropertyString: "所有抗性 +40%",
        Index: 2
      },
      {
        PropertyString: "+ Max Ravens, - Max Wolves",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+50% to Raven Damage",
        Index: 0
      },
      {
        PropertyString: "+1 傷害加深",
        Index: 1
      },
      {
        PropertyString: "+30% 施法速度",
        Index: 4
      },
      {
        PropertyString: "魔法吸引 +10%",
        Index: 3
      },
      {
        PropertyString: "物理傷害降低 +20%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Tools of Vindication",
    Name: "復仇的工具 (Tools of Vindication)",
    SetItems: [
      {
        Type: "Hammer",
        "Set": "Tools of Vindication",
        SetPropertiesString: [
          "攻擊速度 +40% （2 件）"
        ],
        Name: "復仇者之手 (Hand of the Vindicator)",
        Index: "Hand of the Vindicator",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 12,
        RequiredLevel: 20,
        Code: "whm",
        Properties: [
          {
            PropertyString: "攻擊速度 +20%",
            Index: 1
          },
          {
            PropertyString: "+ to Minimum Damage",
            Index: 0
          },
          {
            PropertyString: "+3 復仇打擊（只限聖騎士）",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "19 to 29"
            }
          ],
          EquipmentType: 1,
          Name: "戰鎚 (War Hammer)",
          RequiredStrength: 53,
          RequiredDexterity: 0,
          Durability: 250,
          ItemLevel: 25,
          Type: {
            Name: "Hammer",
            Index: "Hammer",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Auric Shields",
        "Set": "Tools of Vindication",
        SetPropertiesString: [
          "+ to Minimum Damage （3 件）",
          "冰寒抗性 +30% （2 件）",
          "物理傷害降低 +15% （3 件）"
        ],
        Name: "復仇者堡壘 (Bulwark of the Vindicator)",
        Index: "Bulwark of the Vindicator",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 59,
        RequiredLevel: 60,
        Code: "pa9",
        Properties: [
          {
            PropertyString: "裝備時賦予等級 12 神聖冰凍靈氣",
            Index: 3
          },
          {
            PropertyString: "+40% 打擊恢復",
            Index: 1
          },
          {
            PropertyString: "+55% 格擋速度",
            Index: 2
          },
          {
            PropertyString: "所有抗性 +35%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "20 to 28",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "144",
          EquipmentType: 0,
          Name: "金紋盾 (Gilded Shield)",
          RequiredStrength: 89,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 51,
          Type: {
            Name: "Auric Shields",
            Index: "Auric Shields",
            Class: "pal"
          },
          RequiredClass: "Paladin"
        }
      },
      {
        Type: "Belt",
        "Set": "Tools of Vindication",
        SetPropertiesString: [
          "+ to Minimum Damage （2 件）",
          "電擊抗性 +30% （3 件）",
          "火焰抗性 +30% （2 件）"
        ],
        Name: "復仇者腰帶 (Belt of the Vindicator)",
        Index: "Belt of the Vindicator",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 40,
        RequiredLevel: 40,
        Code: "zmb",
        Properties: [
          {
            PropertyString: "冰寒抗性 +20%",
            Index: 2
          },
          {
            PropertyString: "電擊抗性 +20%",
            Index: 1
          },
          {
            PropertyString: "火焰抗性 +20%",
            Index: 0
          },
          {
            PropertyString: "尋獲魔法物品機率提高 +30%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "35",
          EquipmentType: 0,
          Name: "鐵網腰帶 (Mesh Belt)",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 43,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+3 復仇打擊（只限聖騎士）",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "所有抗性 +30%",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Panda's Polar Adventure",
    Name: "熊貓的極地冒險 (Panda's Polar Adventure)",
    SetItems: [
      {
        Type: "Pelt",
        "Set": "Panda's Polar Adventure",
        SetPropertiesString: [],
        Name: "熊貓的皮帽 (Panda's Pelt)",
        Index: "Panda's Pelt",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 30,
        RequiredLevel: 55,
        Code: "dr6",
        Properties: [
          {
            PropertyString: "+2-3 所有技能",
            Index: 4
          },
          {
            PropertyString: "+2-4 to Polar Bear",
            Index: 1
          },
          {
            PropertyString: "+30% 跑步 / 行走速度",
            Index: 2
          },
          {
            PropertyString: "+30% 打擊恢復",
            Index: 3
          },
          {
            PropertyString: "無法冰凍",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "52",
          EquipmentType: 0,
          Name: "猛狼頭盔 (Alpha Helm)",
          RequiredStrength: 44,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 35,
          Type: {
            Name: "Pelt",
            Index: "Pelt",
            Class: "dru"
          },
          RequiredClass: "Druid"
        }
      },
      {
        Type: "Gloves",
        "Set": "Panda's Polar Adventure",
        SetPropertiesString: [],
        Name: "熊貓的手套 (Panda's Mittens)",
        Index: "Panda's Mitts",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 25,
        RequiredLevel: 45,
        Code: "ulg",
        Properties: [
          {
            PropertyString: "+2-5 to Polar Claws",
            Index: 0
          },
          {
            PropertyString: "攻擊速度 +30%",
            Index: 2
          },
          {
            PropertyString: "擊中竊取 5% 生命",
            Index: 1
          },
          {
            PropertyString: "凍結目標 +1",
            Index: 4
          },
          {
            PropertyString: "火焰抗性 +15%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "54",
          EquipmentType: 0,
          Name: "荊棘手套 (Bramble Mitts)",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 57,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Panda's Polar Adventure",
        SetPropertiesString: [],
        Name: "熊貓的外袍 (Panda's Jacket)",
        Index: "Panda's Coat",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 70,
        RequiredLevel: 80,
        Code: "uui",
        Properties: [
          {
            PropertyString: "+2-3 所有技能",
            Index: 3
          },
          {
            PropertyString: "+1 暖流",
            Index: 0
          },
          {
            PropertyString: "+15% 施法速度",
            Index: 1
          },
          {
            PropertyString: "冰寒抗性上限 +10",
            Index: 2
          },
          {
            PropertyString: "冰寒抗性 +50%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361",
          EquipmentType: 0,
          Name: "灰暮罩衣 (Dusk Shroud)",
          RequiredStrength: 77,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 65,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Panda's Polar Adventure",
        SetPropertiesString: [],
        Name: "熊貓的腰帶 (Panda's Sash)",
        Index: "Panda's Sash",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 6,
        RequiredLevel: 12,
        Code: "lbl",
        Properties: [
          {
            PropertyString: "被擊中時有 20% 機率施展等級 20 龍捲風",
            Index: 3
          },
          {
            PropertyString: "+10 體能",
            Index: 1
          },
          {
            PropertyString: "+100 生命",
            Index: 2
          },
          {
            PropertyString: "所有抗性 +10%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "2",
          EquipmentType: 0,
          Name: "束帶 (Sash)",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 3,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Panda's Polar Adventure",
        SetPropertiesString: [],
        Name: "熊貓的雪橇 (Panda's Sled)",
        Index: "Panda's Sled",
        Enabled: true,
        Rarity: 7,
        ItemLevel: 50,
        RequiredLevel: 60,
        Code: "uow",
        Properties: [
          {
            PropertyString: "+5-8 召喚幽靈狼",
            Index: 2
          },
          {
            PropertyString: "格擋機率提高 +15%",
            Index: 3
          },
          {
            PropertyString: "所有抗性 +25%",
            Index: 1
          },
          {
            PropertyString: "需求 -30%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "18 to 28",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "145",
          EquipmentType: 0,
          Name: "禦塔盾 (Aegis)",
          RequiredStrength: 219,
          RequiredDexterity: 0,
          Durability: 92,
          ItemLevel: 79,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "敵人冰寒抗性 -10%",
        Index: 0
      },
      {
        PropertyString: "+10% 寒冰技能傷害",
        Index: 1
      },
      {
        PropertyString: "+10 to Polar Bear",
        Index: 2
      },
      {
        PropertyString: "+10 to Polar Claws",
        Index: 3
      },
      {
        PropertyString: "敵人冰寒抗性 -10%",
        Index: 4
      },
      {
        PropertyString: "+10% 寒冰技能傷害",
        Index: 5
      }
    ],
    FullProperties: [
      {
        PropertyString: "+10 to Polar Bear",
        Index: 1
      },
      {
        PropertyString: "+10 to Polar Claws",
        Index: 3
      },
      {
        PropertyString: "+20% 寒冰技能傷害",
        Index: 0
      },
      {
        PropertyString: "敵人冰寒抗性 -20%",
        Index: 2
      },
      {
        PropertyString: "所有抗性 +25%",
        Index: 4
      }
    ],
    Level: 1
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
var _class_dec, _handleSearchChanged_dec, _search_dec, _Sets_decorators, _init;
_Sets_decorators = [customElement(__au2ViewDef)], _search_dec = [bindable], _handleSearchChanged_dec = [watch("search")], _class_dec = [bindable];
class Sets {
  constructor() {
    __runInitializers(_init, 5, this);
    __publicField(this, "sets", json);
    __publicField(this, "search", __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this);
    __publicField(this, "_debouncedSearchItem");
    __publicField(this, "class", __runInitializers(_init, 12, this)), __runInitializers(_init, 15, this);
    __publicField(this, "classes", [
      { value: null, label: "-" },
      { value: "亞馬遜", label: "亞馬遜" },
      { value: "刺客", label: "刺客" },
      { value: "野蠻人", label: "野蠻人" },
      { value: "德魯伊", label: "德魯伊" },
      { value: "死靈法師", label: "死靈法師" },
      { value: "聖騎士", label: "聖騎士" },
      { value: "魔法使", label: "魔法使" }
    ]);
  }
  attached() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");
    if (searchParam) {
      this.search = searchParam;
    }
    const classParam = urlParams.get("class");
    if (classParam) {
      this.class = classParam;
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
    if (this.class) {
      url.searchParams.set("class", this.class);
    } else {
      url.searchParams.delete("class");
    }
    window.history.pushState({}, "", url.toString());
  }
  handleSearchChanged() {
    if (!this.search) {
      this.sets = json;
      this.updateUrl();
      return;
    }
    if (this._debouncedSearchItem) {
      this._debouncedSearchItem();
    }
    this.updateUrl();
  }
  classChanged() {
    this.sets = json;
    this.updateList();
    this.updateUrl();
  }
  updateList() {
    if (!this.search && !this.class) {
      return;
    }
    try {
      const foundSets = [];
      loop1:
        for (const set of json) {
          set.AllProperties = [...set?.FullProperties, ...set?.PartialProperties];
          if (this.search && set.Name?.toLowerCase().includes(this.search?.toLowerCase())) {
            foundSets.push(set);
            continue;
          }
          for (const property of set?.AllProperties) {
            if (this.class) {
              if (property?.PropertyString?.toLowerCase()?.includes(this.class?.toLowerCase())) {
                foundSets.push(set);
                continue loop1;
              }
            } else {
              if (property?.PropertyString?.toLowerCase()?.includes(this.search?.toLowerCase())) {
                foundSets.push(set);
                continue loop1;
              }
            }
          }
          for (const setItem of set?.SetItems) {
            if (this.class) {
              if (setItem.Name.toLowerCase().includes(this.class?.toLowerCase())) {
                foundSets.push(set);
                continue loop1;
              }
            } else {
              if (setItem.Name.toLowerCase().includes(this.search?.toLowerCase())) {
                foundSets.push(set);
                continue loop1;
              }
            }
            for (const property of setItem?.Properties) {
              if (this.class) {
                if (property?.PropertyString?.toLowerCase()?.includes(this.class?.toLowerCase())) {
                  foundSets.push(set);
                  continue loop1;
                }
              } else {
                if (property?.PropertyString?.toLowerCase()?.includes(this.search?.toLowerCase())) {
                  foundSets.push(set);
                  continue loop1;
                }
              }
            }
            if (this.class) {
              if (setItem.Equipment.Name.toLowerCase().includes(this.class?.toLowerCase())) {
                foundSets.push(set);
                continue loop1;
              }
            } else {
              if (setItem.Equipment.Name.toLowerCase().includes(this.search?.toLowerCase())) {
                foundSets.push(set);
                continue loop1;
              }
            }
          }
        }
      this.sets = foundSets;
    } catch (e) {
      console.error(e);
    }
  }
  getDamageTypeString(type) {
    switch (type) {
      case 3:
        return "傷害: ";
      case 2:
        return "投擲傷害: ";
      case 1:
        return "雙手傷害: ";
      default:
        return "傷害: ";
    }
  }
}
_init = __decoratorStart();
__decorateElement(_init, 1, "handleSearchChanged", _handleSearchChanged_dec, Sets);
__decorateElement(_init, 5, "search", _search_dec, Sets);
__decorateElement(_init, 5, "class", _class_dec, Sets);
Sets = __decorateElement(_init, 0, "Sets", _Sets_decorators, Sets);
__runInitializers(_init, 1, Sets);
export {
  Sets
};
