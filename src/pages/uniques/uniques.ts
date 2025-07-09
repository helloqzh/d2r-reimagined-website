import { bindable, watch } from 'aurelia';

import { debounce, DebouncedFunction } from '../../utilities/debounce';
import json from '../item-jsons/uniques.json';

export class Uniques {
    uniques = json;
    private typeMap = {
        "Amazon Bow": "亞馬遜弓",
        "Amazon Javelin": "亞馬遜標槍",
        "Amazon Spear": "亞馬遜長矛",
        "Amulet": "項鍊",
        "Armor": " 盔甲",
        "Auric Shields": "聖騎士盾牌",
        "Axe": "斧頭",
        "Belt": "腰帶",
        "Boots": "鞋子",
        "Bow": "弓",
        "Circlet": "頭環",
        "Club": "棍棒",
        "Crossbow": "弩",
        "Gloves": "手套",
        "Hammer": "釘錘",
        "Hand to Hand": "拳刃（無技能）",
        "Hand to Hand 2": "拳刃（有技能）",
        "Helm": "頭盔",
        "Javelin": "標槍",
        "Jewel": "珠寶",
        "Knife": "匕首",
        "Large Charm": "特大咒符",
        "Mace": "连枷",
        "Magic Bow Quiv": "魔法箭筒",
        "Magic XBow Quiv": "魔法弩盒",
        "Medium Charm": "大型咒符",
        "Orb": "法珠",
        "Pelt": "德鲁伊头盔",
        "Polearm": "长柄武器",
        "Primal Helm": "野蛮人头盔",
        "Ring": "戒指",
        "Scepter": "权杖",
        "Shield": "盾牌",
        "Small Charm": "小型咒符",
        "Spear": "长矛",
        "Staff": "法杖",
        "Sword": "刀剑",
        "Throwing Axe": "飞斧",
        "Throwing Knife": "飞刀",
        "Voodoo Heads": "死灵法师盾牌",
        "Wand": " 魔杖",
    };
    private types = [
        // The first element allows resetting the filter
        { label: '-', value: undefined },
        // Now follows a unique list of all possible types
        ...[ ...new Set<string>(json.map(unique => unique.Type)).values() ]
            // which is sorted alphabetically
            .sort((a, b) => a.localeCompare(b))
            // and converted into a selection list
            .map(type => { return { label: this.getTypeLabel(type), value: type } })
    ];

    @bindable search: string;
    @bindable class: string;
    @bindable selectedType: string;

    private _debouncedSearchItem!: DebouncedFunction;

    attached() {
        // Read search query parameters from URL when component is initialized
        const urlParams = new URLSearchParams(window.location.search);

        const searchParam = urlParams.get('search');
        if (searchParam) {
            this.search = searchParam;
        }

        const classParam = urlParams.get('class');
        if (classParam) {
            this.class = classParam;
        }

        const typeParam = urlParams.get('type');
        if (typeParam) {
            this.selectedType = typeParam;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        this._debouncedSearchItem = debounce(this.updateList.bind(this), 350);
        this.updateList();
    }

    // Helper method to update URL with current search parameters
    private updateUrl() {
        const url = new URL(window.location.href);

        // Update search parameter
        if (this.search && this.search.trim() !== '') {
            url.searchParams.set('search', this.search);
        } else {
            url.searchParams.delete('search');
        }

        // Update class parameter
        if (this.class) {
            url.searchParams.set('class', this.class);
        } else {
            url.searchParams.delete('class');
        }

        // Update type parameter
        if (this.selectedType) {
            url.searchParams.set('type', this.selectedType);
        } else {
            url.searchParams.delete('type');
        }

        // Update the URL without reloading the page
        window.history.pushState({}, '', url.toString());
    }
    @watch('class')
    handleClassChanged() {
        this.updateList();
        this.updateUrl();
    }

    @watch('search')
    handleSearchChanged() {
        if (this._debouncedSearchItem) {
            this._debouncedSearchItem();
        }
        this.updateUrl();
    }

    @watch('selectedType')
    handleTypeChanged() {
        if (this._debouncedSearchItem) {
            this._debouncedSearchItem();
        }
        this.updateUrl();
    }

    classes = [
        { value: null, label: '-' },
        { value: '亞馬遜', label: '亞馬遜' },
        { value: '刺客', label: '刺客' },
        { value: '野蠻人', label: '野蠻人' },
        { value: '德魯伊', label: '德魯伊' },
        { value: '死靈法師', label: '死靈法師' },
        { value: '聖騎士', label: '聖騎士' },
        { value: '魔法使', label: '魔法使' }
    ];



    updateList() {
        const isMatchingClass = (unique) => {
            return !this.class || unique.Equipment.RequiredClass?.toLowerCase().includes(this.class?.toLowerCase());
        }
        const isMatchingSearch = (unique) => {
            if (!this.search) return true;
            const search = this.search.toLowerCase();
            const uniqueName = unique.Name.toLowerCase();
            const properties = unique.Properties.map((property) => property.PropertyString.toLowerCase());
            const baseName = unique.Equipment.Name.toLowerCase();
            return uniqueName.includes(search) || properties.find(p => p.includes(search)) || baseName.includes(search);
        }
        const isMatchingType = (unique) => {
            return !this.selectedType || unique.Type === this.selectedType;
        }
        this.uniques = json.filter(unique =>
            !unique.Name.toLowerCase().includes('grabber') &&
            isMatchingSearch(unique) &&
            isMatchingClass(unique) &&
            isMatchingType(unique));
    }

    getDamageTypeString(type: number) {
        switch (type) {
            case 3:
                return '傷害: ';
            case 2:
                return '投擲傷害: ';
            case 1:
                return '雙手傷害: '
            default:
                return '傷害: ';
        }
    }
    private getTypeLabel(type: string) {
        if (this.typeMap[type]) {
            return `${type} - ${this.typeMap[type]}`;
        }
        return type;
    }
}
