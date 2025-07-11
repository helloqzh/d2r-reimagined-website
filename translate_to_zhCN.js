//
// ***** 使用方法 *****
// 1. 先将最新的 item-names.json 和 item-runes.json 放置到 d2rr-strings 目录下
// 2. 执行 npm install --legacy-peer-deps
// 3. 执行 node translate_to_zhCN.js 进行翻译
// 4. 执行 npm run start 启动服务，然后进入 http://localhost:9500/d2r-reimagined-website/ 检查是否正常工作
// 5. 确实无误之后，执行 npm run build 编译
// 

import { execSync } from 'child_process';
import fs from 'fs';

async function checkAndInstallJsoncParser() {
  try {
    // 尝试动态导入
    await import('jsonc-parser');
    console.log('jsonc-parser is already installed.');
  } catch (e) {
    if (e.code === 'ERR_MODULE_NOT_FOUND') {
      console.log('Installing jsonc-parser...');
      execSync('npm install jsonc-parser --save-dev --legacy-peer-deps', { stdio: 'inherit' });
      
      // 安装后再次尝试导入
      try {
        await import('jsonc-parser');
        console.log('jsonc-parser installed successfully.');
      } catch (installError) {
        console.error('Failed to install jsonc-parser:', installError);
        process.exit(1);
      }
    } else {
      console.error('Unexpected error:', e);
      process.exit(1);
    }
  }
}
await checkAndInstallJsoncParser();

const jsoncParser = await import('jsonc-parser');

const jsonFolder = 'src/pages/item-jsons';

// 技能中英对照
// 引自：https://d2r.world/zh-TW/info/misc/translates/skill
const skillMap = {
    "Cold Arrow": "冷霜箭",
    "Exploding Arrow": "爆裂箭",
    "Fire Arrow": "火焰箭",
    "Freezing Arrow": "冰凍箭",
    "Guided Arrow": "導引箭",
    "Ice Arrow": "寒冰箭",
    "Immolation Arrow": "熾炎箭",
    "Magic Arrow": "魔法箭",
    "Multiple Shot": "多重箭",
    "Strafe": "掃射",
    "Charged Strike": "聚能強擊",
    "Fend": "疾刺",
    "Impale": "穿刺",
    "Jab": "戳刺",
    "Lightning Bolt": "閃電槍",
    "Lightning Fury": "閃電烈怒",
    "Lightning Strike": "閃電強擊",
    "Plague Javelin": "瘟疫標槍",
    "Poison Javelin": "劇毒標槍",
    "Power Strike": "充能強擊",
    "Avoid": "閃身",
    "Critical Strike": "致命攻勢",
    "Decoy": "替身",
    "Dodge": "閃躲",
    "Evade": "閃避",
    "Inner Sight": "心靈視野",
    "Penetrate": "精準攻勢",
    "Pierce": "貫穿攻勢",
    "Slow Missiles": "緩箭術",
    "Valkyrie": "女武神",
    "Blades of Ice": "寒冰刃",
    "Claws of Thunder": "雷電爪",
    "Cobra Strike": "靈蛇擊",
    "Dragon Claw": "雙龍爪",
    "Dragon Flight": "翔龍腳",
    "Dragon Tail": "龍擺尾",
    "Dragon Talon": "龍爪踢",
    "Fists of Fire": "烈火拳",
    "Phoenix Strike": "鳳凰擊",
    "Tiger Strike": "猛虎擊",
    "Burst of Speed": "速度爆發",
    "Claw Mastery": "利爪專精",
    "Cloak of Shadows": "魔影斗蓬",
    "Fade": "影散",
    "Mind Blast": "心靈震爆",
    "Psychic Hammer": "心靈之鎚",
    "Shadow Master": "暗影宗師",
    "Shadow Warrior": "暗影戰士",
    "Venom": "淬毒",
    "Weapon Block": "武器格擋",
    "Blade Fury": "狂怒旋刃",
    "Blade Sentinel": "戒衛旋刃",
    "Blade Shield": "利刃之盾",
    "Charged Bolt Sentry": "電能衛哨",
    "Death Sentry": "死亡衛哨",
    "Fire Blast": "火焰轟擊",
    "Lightning Sentry": "雷光衛哨",
    "Shock Web": "雷電網",
    "Wake of Fire": "焰痕衛哨",
    "Wake of Fire Sentry": "焰痕衛哨",
    "Wake of Inferno": "獄火衛哨",
    "Inferno Sentry ": "獄火衛哨",
    "Axe Mastery": "斧術專精",
    "Blade Mastery": "利刃專精",
    "Increased Speed": "提高速度",
    "Increased Stamina": "提高精力",
    "Iron Skin": "鋼鐵之膚",
    "Mace Mastery": "釘鎚專精",
    "Natural Resistance": "自然抵抗",
    "Polearm Mastery": "長武專精",
    "Spear Mastery": "長矛專精",
    "Throwing Mastery": "投擲專精",
    "Bash": "猛擊",
    "Berserk": "狂暴之擊",
    "Concentrate": "專注打擊",
    "Double Swing": "雙手揮擊",
    "Double Throw": "雙手投擲",
    "Frenzy": "狂亂連擊",
    "Leap": "跳躍",
    "Leap Attack": "躍擊",
    "Stun": "擊昏",
    "Whirlwind": "旋風斬",
    "Battle Command": "戰鬥指揮",
    "Battle Cry": "戰鬥怒吼",
    "Battle Orders": "戰鬥命令",
    "Find Item": "尋找物品",
    "Find Potion": "尋找藥水",
    "Grim Ward": "恐怖圖騰",
    "Howl": "狂嗥",
    "Shout": "大吼",
    "Taunt": "嘲諷",
    "War Cry": "戰爭狂嘯",
    "Arctic Blast": "極地寒風",
    "Armageddon": "毀天滅地",
    "Cyclone Armor": "氣旋護甲",
    "Firestorm": "火焰風暴",
    "Fissure": "裂地之火",
    "Hurricane": "颶風術",
    "Molten Boulder": "熔火巨石",
    "Tornado": "龍捲風",
    "Twister": "旋風術",
    "Volcano": "火山噴發",
    "Feral Rage": "野性狂暴",
    "Fire Claws": "烈焰爪擊",
    "Fury": "狂怒連擊",
    "Hunger": "飢餓噬咬",
    "Lycanthropy": "變形術",
    "Maul": "槌擊",
    "Rabies": "狂犬撕咬",
    "Shock Wave": "震波衝擊",
    "Werebear": "熊人變化",
    "Werewolf": "狼人變化",
    "Carrion Vine": "食屍藤蔓",
    "Heart of Wolverine": "狼獾之心",
    "Oak Sage": "橡木智者",
    "Poison Creeper": "劇毒藤蔓",
    "Raven": "掠鴉",
    "Solar Creeper": "太陽藤蔓",
    "Spirit of Barbs": "荊棘之靈",
    "Summon Dire Wolf": "召喚恐狼",
    "Summon Grizzly": "召喚灰熊",
    "Summon Spirit Wolf": "召喚幽靈狼",
    "Amplify Damage": "傷害加深",
    "Attract": "致命吸引",
    "Confuse": "混亂",
    "Decrepify": "衰老",
    "Dim Vision": "昏暗視野",
    "Iron Maiden": "攻擊反噬",
    "Life Tap": "偷取生命",
    "Lower Resist": "降低抗性",
    "Terror": "恐懼",
    "Weaken": "削弱",
    "Bone Armor": "骸骨護甲",
    "Bone Prison": "骨牢",
    "Bone Spear": "骨矛",
    "Bone Spirit": "骸骨之魂",
    "Bone Wall": "骨牆",
    "Corpse Explosion": "屍爆",
    "Poison Dagger": "淬毒匕首",
    "Poison Explosion": "毒爆",
    "Poison Nova": "劇毒新星",
    "Teeth": "剔骨之牙",
    "Blood Golem": "鮮血魔像",
    "Clay Golem": "黏土魔像",
    "Fire Golem": "火焰魔像",
    "Golem Mastery": "魔像專精",
    "Iron Golem": "鋼鐵魔像",
    "Raise Skeletal Mage": "復生骷髏法師",
    "Raise Skeleton": "復生骷髏",
    "Revive": "重生",
    "Skeleton Mastery": "骷髏專精",
    "Summon Resist": "召喚物抗性",
    "Blessed Hammer": "祝福之鎚",
    "Charge": "衝鋒打擊",
    "Conversion": "招降打擊",
    "Fist of the Heavens": "天堂之拳",
    "Holy Bolt": "聖光彈",
    "Holy Shield": "神聖之盾",
    "Sacrifice": "犧牲打擊",
    "Smite": "盾牌重擊",
    "Vengeance": "復仇打擊",
    "Zeal": "熱忱打擊",
    "Cleansing": "淨化",
    "Defiance": "反抗",
    "Meditation": "冥想",
    "Prayer": "祈禱",
    "Redemption": "救贖",
    "Resist Cold": "抗寒",
    "Resist Fire": "抗火",
    "Resist Lightning": "抗電",
    "Salvation": "聖護",
    "Vigor": "活力",
    "Blessed Aim": "精準祝福",
    "Concentration": "專注",
    "Conviction": "信念",
    "Fanaticism": "狂熱",
    "Holy Fire": "神聖火焰",
    "Holy Freeze": "神聖冰凍",
    "Holy Shock": "神聖電擊",
    "Might": "力量",
    "Sanctuary": "庇護",
    "Thorns": "荊棘",
    "Blizzard": "暴風雪",
    "Chilling Armor": "寒冰甲",
    "Cold Mastery": "冰寒專精",
    "Frost Nova": "冰霜新星",
    "Frozen Armor": "冰封甲",
    "Frozen Orb": "冰封球",
    "Glacial Spike": "冰川之槍",
    "Ice Blast": "寒冰球",
    "Ice Bolt": "寒冰彈",
    "Shiver Armor": "碎冰甲",
    "Blaze": "熾烈之徑",
    "Enchant": "附魔",
    "Fire Ball": "火球術",
    "Fire Bolt": "火焰彈",
    "Fire Mastery": "火焰專精",
    "Fire Wall": "火牆術",
    "Hydra": "多頭蛇",
    "Inferno": "煉獄之火",
    "Meteor": "隕石術",
    "Warmth": "暖流",
    "Chain Lightning": "連鎖閃電",
    "Charged Bolt": "電能彈",
    "Energy Shield": "能量護盾",
    "Lightning": "閃電箭",
    "Lightning Mastery": "閃電專精",
    "Nova": "閃電新星",
    "Static Field": "靜電力場",
    "Telekinesis": "心靈傳動",
    "Teleport": "傳送術",
    "Thunder Storm": "雷電風暴",
    // 以下為非角色技能
    "Mark Of The Bear": "熊人印記",
    "Mark Of The Wolf": "狼人印記",
    "Eruption": "裂地之火",
    "Poison Volley": "毒爆",
    "Delerium Change": "精神錯亂",
    // 以下為 MOD 追加技能 
    "Carnage": "大屠殺",
    "Tectonic Slam": "地震猛擊",
    "Warp": "傳送術（Warp）"
};

function translateSkill(skill) {
    if (skillMap[skill]) return skillMap[skill];
    // json 文件里有些技能名称不规则，存在大小写问题
    // 如：
    for (const [key, value] of Object.entries(skillMap)) {
        if (key.toLocaleLowerCase() === skill.toLocaleLowerCase()) {
            return value;
        }
    }
    return '???';
}

/**
 * 写入带有 BOM 的 utf8 文件
 * @param {string} path 文件路径
 * @param {string} content 文件内容
 */
function writeFileWithBOM(path, content) {
  const bom = '\uFEFF';
  fs.writeFileSync(path, bom + content, { encoding: 'utf8' });
}

/**
 * 读取 json 文件
 * @param {string} path json 文件路径
 * @returns 返回 json 对象
 */
function readJsonFile(path) {
    return jsoncParser.parse(fs.readFileSync(path, 'utf-8'));
}

/**
 * 去除装备名称里的颜色标记以及普通/扩展/精华标记
 * @param {string} name 装备名称
 * @returns 去除杂质之后的装备名称
 */
function pureName(name) {
    name = name.replace(/ÿ../g, '').trim();

    if (name.endsWith(' [N]')
            || name.endsWith(' [X]')
            || name.endsWith(' [E]')) {
        return name.slice(0, -4);
    }
    return name;
}


function setNameOrIndexTranslation(srcMap, destMap) {
    const name = srcMap['Name'].trim();
    const index = srcMap['Index'].trim();
    srcMap['Name'] = destMap[name] || destMap[index] || name;
    if (!/ \(/.test(srcMap['Name'])) {
        srcMap['Name'] = `${srcMap['Name']} (${name})`;
    }
}

/**
 * 暗金/套裝/符文之語的屬性翻譯
 * @param {string} prop 屬性
 * @returns 翻譯結果
 */
function translateProp(prop) {
    return prop
        // 括号补充说明
        .replace(/\(Armor\)/, '（只限盔甲）')
        .replace(/\(Weapon\)/, '（只限武器）')
        .replace(/\(Shield\)/, '（只限盾牌）')
        .replace(/\(Cannot Be Repaired\)/, '（無法修復）')
        .replace(/\(Per Character Level\)/, '（依角色等級而定）')
        .replace(/\(Amazon only\)/i, '（只限亞馬遜）')
        .replace(/\(Assassin only\)/i, '（只限刺客）')
        .replace(/\(Barbarian only\)/i, '（只限野蠻人）')
        .replace(/\(Druid only\)/i, '（只限德魯伊）')
        .replace(/\(Necromancer only\)/i, '（只限死靈法師）')
        .replace(/\(Paladin only\)/i, '（只限聖騎士）')
        .replace(/\(Sorceress only\)/i, '（只限魔法使）')
        .replace(/\((\d+) Charges\)/, '（$1 次）')
        .replace(/\((\d+) Items\)/, '（$1 件）')
        .replace(/\(Full Set\)/, '（完整套裝）')
        // 濺射咒符
        .replace(/\+(\d+) Charm Weight/, '咒符負載 +$1')
        .replace(/Splash (\d+)% of Melee Damage/, '近戰傷害的 $1% 造成濺射傷害')
        .replace(/-(\d+)% Player Damage/, '角色傷害 -$1%')
        .replace(/-(\d+)% Min \/ -(\d+)% Max Player Damage/, '-$1% 最小 / -$2% 最大 角色傷害')
        // 防禦
        .replace(/(\+\d+(?:-\d+)?)% Increased Chance of Blocking/, '格擋機率提高 $1%')
        .replace(/([+-]\d+(?:-\d+)?)% Increased Attack Speed/, '攻擊速度 $1%')
        .replace(/(\+\d+(?:-\d+)?) Defense vs\. Melee/, '$1 對近戰防禦')
        .replace(/(\+\d+(?:-\d+)?) Defense vs\. Missile/, '$1 對遠程防禦')
        .replace(/([+-]\d+(?:-\d+)?)% Faster Hit Recovery/, '$1% 打擊恢復')
        .replace(/Poison Length Reduced by (\d+)%/, '中毒的時效縮短 $1%')
        .replace(/(\+\d+(?:-\d+)?)% Faster Cast Rate/, '$1% 施法速度')
        .replace(/(\+\d+(?:-\d+)?)% Enhanced Defense/, '$1% 防禦強化')
        .replace(/(-\d+(?:-\d+)?)% Target Defense/, '$1% 目標防禦')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+) Defense/, '$1 防禦')
        .replace(/\+(\d+)% Faster Block Rate/, '+$1% 格擋速度')
        // 傷害
        .replace(/(\+\d+(?:-\d+)?(?:\.\d+)?)% Chance of Crushing Blow/, '$1% 概率造成粉碎打擊')
        .replace(/(\+\d+(?:-\d+)?)% Chance of Open Wounds/, '$1% 機率造成開放傷口')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+)% Deadly Strike/, '$1% 致命打擊')
        .replace(/(\+\d+(?:-\d+)?)% Piercing Attack/, '$1% 穿透攻擊')
        .replace(/(\+\d*\.?\d+(?:-\d+)?)% Enhanced Maximum Damage/, '$1% 最大傷害')
        .replace(/-(\d+) to Monster Defense Per Hit/, '每次攻擊降低敵人防禦 $1')
        .replace(/(\+\d*\.?\d+(?:-\d+)?) to Maximum Damage/, '$1 最大傷害')
        .replace(/(\+\d+(?:-\d+)?) to Minimum Damage/, '$1 最小傷害')
        .replace(/\+(\d+) Poison Damage Over (\d+) Seconds/, '+$1 毒素傷害，時效 $2 秒')
        .replace(/(?:Adds\s*)?(?:\+)?(\d+(?:-\d+)?) (?:to )?(?:Minimum |Maximum )?Lightning Damage/i, '增加 $1 電擊傷害')
        .replace(/(?:Adds\s*)?(?:\+)?(\d+(?:-\d+)?) (?:to )?(?:Minimum |Maximum )?Poison Damage/i, '增加 $1 毒素傷害')
        .replace(/(?:Adds\s*)?(?:\+)?(\d+(?:-\d+)?) (?:to )?(?:Minimum |Maximum )?Fire Damage/i, '增加 $1 火焰傷害')
        .replace(/(?:Adds\s*)?(?:\+)?(\d+(?:-\d+)?) (?:to )?(?:Minimum |Maximum )?Cold Damage/i, '增加 $1 寒冰傷害')
        .replace(/Adds (\d+)-(\d+) to Magic Damage/, '增加 $1-$2 魔法傷害')
        .replace(/(\+\d+(?:-\d+)?)% to Poison Skill Damage/, '$1% 毒素技能傷害')
        .replace(/(\+\d+(?:-\d+)?)% to Fire Skill Damage/, '$1% 火焰技能傷害')
        .replace(/(\+\d+(?:-\d+)?)% to Cold Skill Damage/, '$1% 寒冰技能傷害')
        .replace(/(\+\d+(?:-\d+)?)% to Lightning Skill Damage/, '$1% 閃電技能傷害')
        .replace(/(\+\d+(?:-\d+)?)% to All Elemental Skill Damage/, '$1% 所有元素技能傷害')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+) to Attack Rating against Undead/, '$1 對不死怪物的准确率')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+)% Damage to Undead/, '$1% 對不死怪物的傷害')
        .replace(/\+(\d+) to Attack Rating against Demons/, '+$1 對惡魔的准确率')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+)% Damage to Demons/, '$1% 對惡魔的傷害')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+)% bonus to Attack Rating/, '$1% 準確率加成')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+) to Attack Rating/, '$1 準確率')
        .replace(/(\+\d+(?:-\d+)?)% Enhanced Damage/, '$1% 傷害強化')
        .replace(/Adds ([+]?\d+(?:-\d+)?) to Damage/, '增加 $1 傷害')
        .replace(/(\+\d+(?:-\d+)?) Kick Damage/, '踢擊傷害 $1')
        // 雜
        .replace('+50% chance for finishing moves to not consume charges', '+50% 機率使終結技不消耗集氣的力量')
        .replace(/((\+|-)\d+(?:-\d+)?|\+\d+\.\d+)% better chance of getting magic item/, '尋獲魔法物品機率提高 $1%')
        .replace(/((?:\+)?\d+(?:-\d+)?)% Hit Causes Monster To Flee/, '$1% 機率擊中使怪物逃跑')
        .replace(/((\+|-)\d+(?:-\d+)?|\+\d+\.\d+)% extra gold from monsters/, '怪物金幣掉落量提高 $1%')
        .replace(/Repairs ((?:0\.)?\d+) durability per second/, '每 1 秒修復 $1 點耐久度')
        .replace(/Reduces all Vendor Prices (\d+(?:-\d+)?)%/, '所有商人的價格降低 $1%')
        .replace(/Attacker Takes Damage of (\+\d+(?:-\d+)?)/, '攻擊者反傷 $1')
        .replace(/(\+\d+(?:\.\d+)?) Attacker Takes Damage of/, '攻擊者反傷 $1')
        .replace(/([+-]\d+(?:-\d+)?)% to Experience Gained/, '獲得的經驗值 $1%')
        .replace(/(\+\d+(?:-\d+)?)% Faster Run\/Walk/, '$1% 跑步 / 行走速度')
        .replace(/\+(\d+) Increase Maximum Durability/, '耐久上限增加 $1')
        .replace(/Fires Explosive Arrows or Bolts/, '射出爆炸的弓矢或弩箭')
        .replace(/((\+|-)\d+(?:-\d+)?) to Light Radius/, '照亮範圍 $1')
        .replace(/Requirements Increased By \+(\d+)%/, '需求提高 $1%')
        .replace(/Slain Monsters Rest in Peace/, '殺死的怪物就此安息')
        .replace(/\+(\d+) Increased Stack Size/, '堆疊數量提高 $1')
        .replace(/Freezes target (\+\d+(?:-\d+)?)/, '凍結目標 $1')
        .replace(/Hit blinds target \+(\d+)/, '擊中使目標目盲 +$1')
        .replace(/\+(\d+) Fires Magic Arrows/, '射出魔法箭矢 +$1')
        .replace(/\+(\d+) To Required Level/, '+$1 需求等級')
        .replace(/Socketed \((\d+(?:-\d+)?)\)/, '鑲孔 ($1)')
        .replace(/Slows target by (\d+)%/, '使目標減慢 $1%')
        .replace(/Ignore Target's Defense/, '無視目標防禦')
        .replace(/Prevent Monster Heal/, '防止怪物自療')
        .replace(/Half Freeze Duration/, '冰凍時間減半')
        .replace(/Requirements -(\d+)%/, '需求 -$1%')
        .replace(/Replenishes quantity/, '回復數量')
        .replace(/Cannot Be Frozen/, '無法冰凍')
        .replace(/Indestructible/, '無法破壞')
        .replace(/Knockback/, '擊退')
        .replace(/Ethereal/, '無形')
        .replace(/(\d+%(?:-\d+%)?) Reanimate as: Afflicted/, '$1 機率將目標復生為：污染怪')
        .replace(/(\d+%(?:-\d+%)?) Reanimate as: Returned/, '$1 機率將目標復生為：返世亡靈')
        .replace(/(\d+%(?:-\d+%)?) Reanimate as: /, '$1 機率將目標復生為：')
        // 破除免疫
        .replace('+300 Nearby Enemies are Cold Sunders', '破除怪物的寒冰免疫')
        .replace('+300 Nearby Enemies are Fire Sundered', '破除怪物的火焰免疫')
        .replace('+300 Nearby Enemies are Lightning Sundered', '破除怪物的閃電免疫')
        .replace('+300 Nearby Enemies are Poison Sundered', '破除怪物的毒素免疫')
        .replace('+300 Nearby Enemies are Physical Sundered', '破除怪物的物理免疫')
        .replace('+300 Nearby Enemies are Magic Sundered', '破除怪物的魔法免疫')

        // 屬性點
        .replace(/([+-]\d+(?:-\d+)?) to All Attributes/, '$1 所有屬性')
        .replace(/([+-]\d+(?:-\d+)?|\+\d+\.\d+) to Energy/, '$1 能量')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+) to Vitality/, '$1 體能')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+) to Strength/, '$1 力量')
        .replace(/([+-]\d+(?:-\d+)?|\+\d+\.\d+) to Dexterity/, '$1 敏捷')

        // 生命相关
        .replace(/(\+\d+(?:-\d+)?) Life after each Kill/, '$1 擊殺生命恢復')
        .replace(/(\+\d+(?:-\d+)?) Life after each Demon Kill/, '$1 擊殺惡魔生命恢復')
        .replace(/(?:Adds )?[+-]?(\d+(?:-\d+)?)% Life stolen per hit/, '擊中竊取 $1% 生命')
        .replace(/(\+\d+(?:-\d+)?)% Increased Maximum Life/, '生命上限 $1%')
        .replace(/([+-]\d+(?:-\d+)?|[+-]\d+\.\d+) Drain Life/, '吸取生命 $1')
        .replace(/(\+\d+(?:-\d+)?) Replenish Life/, '生命回復 $1')
        .replace(/([+-]\d+(?:-\d+)?|[+-]\d+\.\d+) to Life/, '$1 生命')
        .replace(/(\+(?:0\.)?\d+) Heal Stamina Plus/, '精力恢復 $1')

        // 法力相关
        .replace(/(\+\d+(?:-\d+)?)% Damage Taken Goes To Mana/, '$1% 受到的傷害轉為法力')
        .replace(/(\+\d+(?:-\d+)?) to Mana after each Kill/, '$1 擊殺法力恢復')
        .replace(/(?:Adds\s+)?([+-]?\d+(?:-\d+)?)% Mana stolen per hit/, '擊中竊取 $1% 法力')
        .replace(/(\+\d+(?:-\d+)?)% Increased Maximum Mana/, '法力上限 $1%')
        .replace(/Regenerate Mana \+(\d+)%/, '法力恢復 $1%')
        .replace(/([+-]\d+(?:-\d+)?|[+-]\d+\.\d+) to Mana/, '$1 法力')

        // ＊＊＊＊＊ 抗性 ＊＊＊＊＊
        // 魔法
        .replace(/Magic Damage Reduced by (\d+)/, '魔法傷害降低 $1')
        .replace(/(\+\d+(?:-\d+)?%?) Magic Absorb/, '魔法吸引 $1')
        .replace(/Magic Resist ([+-]\d+(?:-\d+)?)%/, '魔法抗性 $1%')
        // 毒素
        .replace(/(-\d+(?:-\d+)?)% to Enemy Poison Resistance/, '敵人毒素抗性 $1%')
        .replace(/(\+\d+(?:-\d+)?) to Maximum Poison Resist/, '毒素抗性上限 +$1')
        .replace(/Poison Resist ([+-]\d+(?:-\d+)?)%/, '毒素抗性 $1%')
        // 火焰
        .replace(/(-\d+(?:-\d+)?)% to Enemy Fire Resistance/, '敵人火焰抗性 $1%')
        .replace(/\+(\d+) to Maximum Fire Resist/, '火焰抗性上限 +$1')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+)% Fire Resist/, '$1% 火焰抗性')
        .replace(/Fire Resist ([+-]\d+(?:-\d+)?)%/, '火焰抗性 $1%')
        .replace(/(\+\d+\.\d+) Absorbs Fire Damage/, '火焰傷害吸引 $1')
        .replace(/(\+\d+(?:-\d+)?%?) Fire Absorb/, '火焰吸引 $1')
        // 冰寒
        .replace(/(-\d+(?:-\d+)?)% to Enemy Cold Resistance/, '敵人冰寒抗性 $1%')
        .replace(/(\+\d+\.\d+) Absorbs Cold Damage/, '寒冰傷害吸引 $1')
        .replace(/(\+\d+(?:-\d+)?%?) Cold Absorb/, '寒冰吸引 $1')
        .replace(/\+(\d+) to Maximum Cold Resist/, '冰寒抗性上限 +$1')
        .replace(/Cold Resist ([+-]\d+(?:-\d+)?)%/, '冰寒抗性 $1%')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+)% Cold Resist/, '$1% 冰寒抗性')
        // 電擊 
        .replace(/(-\d+(?:-\d+)?)% to Enemy Lightning Resistance/, '敵人電擊抗性 $1%')
        .replace(/Attacker Takes Lightning Damage of (\+\d+(?:-\d+)?)/, '攻擊者受到 $1 點電擊傷害')
        .replace(/(\+\d+\.\d+) Absorbs Lightning Damage/, '電擊傷害吸引 $1')
        .replace(/(\+\d+(?:-\d+)?%?) Lightning Absorb/, '電擊吸引 $1')
        .replace(/(\+\d+(?:-\d+)?) to Maximum Lightning Resist/, '電擊抗性上限 $1')
        .replace(/Lightning Resist ([+-]\d+(?:-\d+)?)%/, '電擊抗性 $1%')
        .replace(/(\+\d+(?:-\d+)?|\+\d+\.\d+)% Lightning Resist/, '電擊抗性 $1%')
        // 物理
        .replace(/([+-]\d+(?:-\d+)?)% Physical Damage Reduction/, '物理傷害降低 $1%')
        .replace(/Damage Reduced by (\d+(?:-\d+)?)/, '物理傷害降低 $1')
        // 所有元素
        .replace(/(-\d+(?:-\d+)?)% to All Enemy Elemental Resistance/, '敵人所有元素抗性 $1%')
        .replace(/All Resistances (\+\d+(?:-\d+)?)%/, '所有抗性 $1%')
        .replace(/(\+\d+(?:-\d+)?) to All Maximum Resistances/, '所有抗性上限 $1')
        // ＊＊＊＊＊ 技能 ＊＊＊＊＊
        // 裝備時
        .replace(/Level (\d+(?:-\d+)?) ([\w\s]+) Aura When Equipped/i, (_match, level, skill) => `裝備時賦予等級 ${level} ${translateSkill(skill)}靈氣`)
        // 升級時
        .replace(/100% Chance to cast level (\d+) ([\w\s]+) when you Level-Up/i, (_match, level, skill) => `當你升級時有 100% 機率施展等級 ${level} ${translateSkill(skill)}`)
        // 死亡時
        .replace(/100% Chance to cast level (\d+) ([\w\s]+) when you Die/i, (_match, level, skill) => `當你死亡時有 100% 機率施展等級 ${level} ${translateSkill(skill)}`)
        // 被擊中時
        .replace(/(\d+)% Chance to cast level (\d+(?:-\d+)?) ([\w\s]+) when struck/i, (_match, chance, level, skill) => `被擊中時有 ${chance}% 機率施展等級 ${level} ${translateSkill(skill)}`)
        // 殺死敵人時
        .replace(/(\d+)% Chance to cast level (\d+) ([\w\s]+) when you Kill an Enemy/i, (_match, chance, level, skill) => `殺死敵人時有 ${chance}% 機率施展等級 ${level} ${translateSkill(skill)}`)
        // 擊中時
        .replace(/(\d+)% Chance to cast level (\d+(?:-\d+)?) ([\w\s]+) on striking/i, (_match, chance, level, skill) => `擊中時有 ${chance}% 機率施展等級 ${level} ${translateSkill(skill)}`)
        // 攻擊時
        .replace(/(\d+)% Chance to cast level (\d+(?:-\d+)?) ([\w\s]+) on attack/i, (_match, chance, level, skill) => `攻擊時有 ${chance}% 機率施展等級 ${level} ${translateSkill(skill)}`)
        // 聚氣
        .replace(/Level (\d+) ([\w\s]+) /i, (_match, level, skill) => `等級 ${level} ${translateSkill(skill)}`)
        
        // ＊＊＊＊＊ 常時技能 ＊＊＊＊＊
        .replace(/\+(\d+(?:-\d+)?) to Melee Mastery/, '+$1 近戰精通')
        .replace(/\+(\d+(?:-\d+)?) to Poison Skills/, '+$1 毒素技能')
        // 魔法使
        .replace(/\+(\d+(?:-\d+)?) to Fire Skills/, '+$1 火焰技能')
        .replace(/\+(\d+(?:-\d+)?) to Cold Skills/, '+$1 冰寒技能')
        .replace(/\+(\d+(?:-\d+)?) to Lightning Skills/, '+$1 閃電技能')
        // 聖騎士
        .replace(/\+(\d+(?:-\d+)?) to Combat Skills/, '+$1 戰鬥技能')
        .replace(/\+(\d+(?:-\d+)?) to Defensive Auras/, '+$1 攻擊靈氣')
        .replace(/\+(\d+(?:-\d+)?) to Offensive Auras/, '+$1 防禦靈氣')
        // 死靈法師
        .replace(/\+(\d+(?:-\d+)?) to Poison and Bone Skills/, '+$1 毒素與骸骨技能')
        .replace(/\+(\d+(?:-\d+)?) to Summoning Skills/, '+$1 召喚技能')
        .replace(/\+(\d+(?:-\d+)?) to Curses/, '+$1 詛咒')
        // 德魯伊
        .replace(/\+(\d+(?:-\d+)?) to Elemental Skills/, '+$1 元素技能')
        .replace(/\+(\d+(?:-\d+)?) to Shape Shifting Skills/, '+$1 變形技能')
        // 野蠻人
        .replace(/\+(\d+(?:-\d+)?) to Warcries/, '+$1 戰吼')
        .replace(/\+(\d+(?:-\d+)?) to Masteries and Throwing Skills/, '+$1 精通與投擲技能')
        // 亞馬遜
        .replace(/\+(\d+(?:-\d+)?) to Bow and Crossbow Skills/, '+$1 弓與弩技能')
        .replace(/\+(\d+(?:-\d+)?) to Javelin and Spear Skills/, '+$1 標槍與長矛技能')
        .replace(/\+(\d+(?:-\d+)?) to Passive and Magic Skills/, '+$1 被動與魔法技能')
        // 刺客
        .replace(/\+(\d+(?:-\d+)?) to Traps/, '+$1 陷阱')
        .replace(/\+(\d+(?:-\d+)?) to Martial Arts/, '+$1 武學技藝')
        .replace(/\+(\d+(?:-\d+)?) to Shadow Disciplines/, '+$1 暗影修行')

        .replace(/\+(\d+(?:-\d+)?) to All Skills/, '+$1 所有技能')
        // 單技能
        .replace(/\+(\d+(?:-\d+)?) to ([\w\s]+)/, (match, level, skill) => {
            const ret = translateSkill(skill.trim());
            if (ret === '???') return match;
            return `+${level} ${ret}`;
        })
        // 职业限定技能
        .replace(/\+(\d+(?:-\d+)?) to Barbarian Skill Levels/, '+$1 野蠻人技能等級')
        .replace(/\+(\d+(?:-\d+)?) to Sorceress Skill Levels/, '+$1 魔法使技能等級')
        .replace(/\+(\d+(?:-\d+)?) to Paladin Skill Levels/, '+$1 聖騎士技能等級')
        .replace(/\+(\d+(?:-\d+)?) to Necromancer Skill Levels/, '+$1 死靈法師技能等級')
        .replace(/\+(\d+(?:-\d+)?) to Amazon Skill Levels/, '+$1 亞馬遜技能等級')
        .replace(/\+(\d+(?:-\d+)?) to Assassin Skill Levels/, '+$1 刺客技能等級')
        .replace(/\+(\d+(?:-\d+)?) to Druid Skill Levels/, '+$1 德魯伊技能等級')
        .replace(/\+(\d+(?:-\d+)?) to \(Random Class\) Skill Levels/, '+$1 隨機職業技能等級')
        .replace(/\+(\d+(?:-\d+)?) to random Barbarian Skill/, '+$1 野蠻人隨機技能等級')
        .replace(/\+(\d+(?:-\d+)?) to random Sorceress Skill/, '+$1 魔法使隨機技能等級')
        .replace(/\+(\d+(?:-\d+)?) to random Paladin Skill/, '+$1 聖騎士隨機技能等級')
        .replace(/\+(\d+(?:-\d+)?) to random Necromancer Skill/, '+$1 死靈法師隨機技能等級')
        .replace(/\+(\d+(?:-\d+)?) to random Amazon Skill/, '+$1 亞馬遜隨機技能等級')
        .replace(/\+(\d+(?:-\d+)?) to random Assassin Skill/, '+$1 刺客隨機技能等級')
        .replace(/\+(\d+(?:-\d+)?) to random Druid Skill/, '+$1 德魯伊隨機技能等級')
        ;
}

/**
 * 翻译装备的名称以及底材的名称
 * @returns 翻译结果
 */
function translateEquipmentName() {
    // 读取 mod 里的装备名称翻译
    const equipmentMap = {};
    const itemNames = readJsonFile('src/d2rr-strings/item-names.json');
    for(let i = 0; i < itemNames.length; i++) {
        const item = itemNames[i];
        const enUS = pureName(item['enUS']);
        const zhTW = pureName(item['zhTW']);
        equipmentMap[enUS] = zhTW;
        // 基础底材
        if (item['enUS'].endsWith(' [N]')
            || item['enUS'].endsWith(' [X]')
            || item['enUS'].endsWith(' [E]')) {
            equipmentMap[enUS] = `${zhTW} (${enUS})`;
        }
        if (item['enUS'] !== item['Key']) {
            equipmentMap[item['Key']] = zhTW;
        }
        // 额外的几件装备
        equipmentMap['Splash Charm'] = '近戰濺射咒符 (Splash Charm)';
        equipmentMap['Small Charm'] = '小型咒符 (Small Charm)';
        equipmentMap['Large Charm'] = '大型咒符 (Large Charm)';
        equipmentMap['Grand Charm'] = '特大咒符 (Grand Charm)';
        equipmentMap['Jewel'] = '珠寶 (Jewel)';
        equipmentMap['Barbed Arrows'] = '倒刺箭袋 (Barbed Arrows)'
        equipmentMap['Barbed Bolts'] = '倒刺弩盒 (Barbed Bolts)'
    }

    // 暗金底材翻譯
    const uniques = jsoncParser.parse(fs.readFileSync(`${jsonFolder}/uniques.json`, 'utf-8'));
    for(let i = 0; i < uniques.length; i++) {
        const uniquesItem = uniques[i];
        // 裝備名稱
        setNameOrIndexTranslation(uniquesItem, equipmentMap);

        // 底材名稱
        const baseName = uniquesItem['Equipment']['Name'].trim();
        if (equipmentMap[baseName]) {
            uniquesItem['Equipment']['Name'] = equipmentMap[baseName];
        }

        // 属性翻译
        const properties = uniquesItem['Properties'];
        for(let i = 0; i < properties.length; i++) {
            const prop = properties[i];

        }
    }
    writeFileWithBOM(`${jsonFolder}/uniques.json`, JSON.stringify(uniques, null, 4));

    // 綠色套裝底材翻譯
    const sets = jsoncParser.parse(fs.readFileSync(`${jsonFolder}/sets.json`, 'utf-8'));
    for(let i = 0; i < sets.length; i++) {
        const setItem = sets[i];

        // 套裝名稱
        setNameOrIndexTranslation(setItem, equipmentMap);

        for(let j = 0; j < setItem['SetItems'].length; j++) {
            const item = setItem['SetItems'][j];

            // 裝備名稱
            setNameOrIndexTranslation(item, equipmentMap);

            // 底材名稱
            const baseName = item['Equipment']['Name'].trim();
            if (equipmentMap[baseName]) {
                item['Equipment']['Name'] = equipmentMap[baseName];
            }
        }
    }
    writeFileWithBOM(`${jsonFolder}/sets.json`, JSON.stringify(sets, null, 4));

    // 符文之語名稱翻譯
    const rwMap = {};
    const rwNames = readJsonFile('src/d2rr-strings/item-runes.json');
    for(let i = 0; i < rwNames.length; i++) {
        const item = rwNames[i];
        const enUS = pureName(item['enUS']);
        const zhTW = pureName(item['zhTW']);
        rwMap[enUS] = zhTW;
    }
    rwMap['Fortitude (Helm Removed)'] = '剛毅（頭盔 已移除）| Fortitude (Helm Removed)';
    rwMap['Rain Reimagined'] = '重構之雨（已移除）| Rain Reimagined (Removed)';
    const runewords = jsoncParser.parse(fs.readFileSync(`${jsonFolder}/runewords.json`, 'utf-8'));
    for(let i = 0; i < runewords.length; i++) {
        const rw = runewords[i];
        // 符文之语名稱
        setNameOrIndexTranslation(rw, rwMap);
    }
    writeFileWithBOM(`${jsonFolder}/runewords.json`, JSON.stringify(runewords, null, 4));

    return true;
}

/**
 * 讀取暗金/套裝/符文之語的屬性並將翻譯結果回寫
 */
function translateProperties() {
    const propArr = [];
    // 暗金
    const uniques = jsoncParser.parse(fs.readFileSync(`${jsonFolder}/uniques.json`, 'utf-8'));
    uniques.forEach(item => propArr.push(...item['Properties']));

    // 綠色套裝
    const sets = jsoncParser.parse(fs.readFileSync(`${jsonFolder}/sets.json`, 'utf-8'));
    sets.forEach(item => item['SetItems'].forEach(innerItem => {
        propArr.push(...innerItem['Properties']);
        innerItem['SetPropertiesString'] = innerItem['SetPropertiesString'].map(tItem => translateProp(tItem));
    }));
    sets.forEach(item => propArr.push(...item['FullProperties']));
    sets.forEach(item => propArr.push(...item['PartialProperties']));

    // 符文之語
    const runewords = jsoncParser.parse(fs.readFileSync(`${jsonFolder}/runewords.json`, 'utf-8'));
    runewords.forEach(item => propArr.push(...item['Properties']));

    // 屬性翻譯
    for(let i = 0; i < propArr.length; i++) {
        const prop = propArr[i];
        const prop2 = translateProp(prop['PropertyString']);
        prop['PropertyString'] = prop2;
    }

    // 回寫文件
    writeFileWithBOM(`${jsonFolder}/uniques.json`, JSON.stringify(uniques, null, 4));
    writeFileWithBOM(`${jsonFolder}/sets.json`, JSON.stringify(sets, null, 4));
    writeFileWithBOM(`${jsonFolder}/runewords.json`, JSON.stringify(runewords, null, 4));

}

let ret = 0;
// 名稱翻譯
ret = translateEquipmentName();
if (!ret) process.exit(1);
// 屬性翻譯
ret = translateProperties();