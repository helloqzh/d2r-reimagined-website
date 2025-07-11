import { bindable, watch } from 'aurelia';

import { debounce, DebouncedFunction } from '../../utilities/debounce';
import json from '../item-jsons/runewords.json';

export class Runewords {
    runewords = json;

    @bindable search: string;
    @bindable searchRunes: string;
    @bindable exclusiveType: boolean;

    private _debouncedSearchItem!: DebouncedFunction;

    filteredRunewords = [];

    // The order of the value entries matters, going from specific to generic.
    // When checking the exclusive box, only the first value element is selected.
    types: { label: string, value: string[] }[] = [
        // Parent types
        { label: '-', value: [] },
        { label: '任意盔甲', value: [ 'Armor', 'Any Armor'] },
        { label: '任意頭盔', value: [ 'Helm' ] },
        { label: '任意武器', value: [ 'Weapon' ] },
        { label: '任意近戰武器', value: [ 'Melee Weapon', 'Weapon' ] },
        { label: '任意遠程武器', value: [ 'Missile Weapon', 'Weapon' ] },
        { label: '任意盾牌', value: ['Any Shield'] },
        // Specific weapon types
        { label: '斧頭', value: [ 'Axe', 'Melee Weapon', 'Weapon' ] },
        { label: '棍棒', value: [ 'Club', 'Melee Weapon', 'Weapon'] },
        { label: '釘錘', value: [ 'Hammer', 'Melee Weapon', 'Weapon' ] },
        { label: '拳刃', value: [ 'Hand to Hand', 'Melee Weapon', 'Weapon' ] },
        { label: '连枷', value: [ 'Mace', 'Melee Weapon', 'Weapon' ] },
        { label: '法珠', value: ['Orb'] },
        { label: '長柄武器', value: [ 'Polearm', 'Melee Weapon', 'Weapon' ] },
        { label: '權杖', value: ['Scepter', 'Melee Weapon', 'Weapon' ] },
        { label: '法杖', value: [ 'Staff', 'Melee Weapon', 'Weapon' ] },
        { label: '長矛', value: [ 'Spear', 'Melee Weapon', 'Weapon' ] },
        { label: '刀劍', value: [ 'Sword', 'Melee Weapon', 'Weapon' ] },
        { label: '魔杖', value: [ 'Wand', 'Melee Weapon', 'Weapon' ] },
        // Specific armor types
        { label: '頭環', value: [ 'Circlet', 'Helm' ] },
        // Class specific types
        { label: '亞馬遜弓', value: [ 'Amazon Bow', 'Missile Weapon', 'Weapon' ] },
        { label: '亞馬遜長矛', value: [ 'Amazon Spear', 'Spear', 'Melee Weapon', 'Weapon' ] },
        { label: '死靈法師盾牌', value: [ 'Necromancer Item', 'Any Shield' ] },
        { label: '野蠻人頭盔', value: [ 'Barbarian Item' ] },
        { label: '聖騎士盾牌', value: [ 'Paladin Item' ] },
        { label: '德魯伊頭盔', value: [ 'Druid Item' ] },
    ]

    selectedType: string[];

    amounts = [
        { value: undefined, label: 'Any' },
        { value: 2, label: '2 Sockets' },
        { value: 3, label: '3 Sockets' },
        { value: 4, label: '4 Sockets' },
        { value: 5, label: '5 Sockets' },
        { value: 6, label: '6 Sockets' }
    ];

    selectedAmount: number;

    attached() {
        // Read search query parameters from URL when component is initialized
        const urlParams = new URLSearchParams(window.location.search);

        const searchParam = urlParams.get('search');
        if (searchParam) {
            this.search = searchParam;
        }

        const runesParam = urlParams.get('runes');
        if (runesParam) {
            this.searchRunes = runesParam;
        }

        const typeParam = urlParams.get('type');
        if (typeParam) {
            this.selectedType = typeParam.split(',');
        }

        const socketsParam = urlParams.get('sockets');
        if (socketsParam) {
            this.selectedAmount = parseInt(socketsParam, 10);
        }

        const exactParam = urlParams.get('exact');
        if (exactParam) {
            this.exclusiveType = exactParam === 'true';
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

        // Update runes parameter
        if (this.searchRunes && this.searchRunes.trim() !== '') {
            url.searchParams.set('runes', this.searchRunes);
        } else {
            url.searchParams.delete('runes');
        }

        // Update type parameter
        if (this.selectedType && this.selectedType.length > 0) {
            url.searchParams.set('type', this.selectedType.join(','));
        } else {
            url.searchParams.delete('type');
        }

        // Update sockets parameter
        if (this.selectedAmount) {
            url.searchParams.set('sockets', this.selectedAmount.toString());
        } else {
            url.searchParams.delete('sockets');
        }

        // Update exact parameter
        if (this.exclusiveType) {
            url.searchParams.set('exact', 'true');
        } else {
            url.searchParams.delete('exact');
        }

        // Update the URL without reloading the page
        window.history.pushState({}, '', url.toString());
    }

    @watch('searchRunes')
    handleSearchRunesChanged() {
        if (this._debouncedSearchItem) {
            this._debouncedSearchItem();
        }
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
    selectedTypeChanged() {
        if (this._debouncedSearchItem) {
            this._debouncedSearchItem();
        }
        this.updateUrl();
    }

    @watch('selectedAmount')
    selectedAmountChanged() {
        if (this._debouncedSearchItem) {
            this._debouncedSearchItem();
        }
        this.updateUrl();
    }

    @watch('exclusiveType')
    handleExclusiveTypeChanged() {
        if (this._debouncedSearchItem) {
            this._debouncedSearchItem();
        }
        this.updateUrl();
    }

    normalizeRuneName(name: string): string {
        // Remove " Rune" suffix and trim any extra spaces
        return name.replace(/ rune$/i, '').trim().toLowerCase();
    }

    updateList() {
        let filteringRunewords = this.runewords;

        // Type filtering
        if (this.selectedType?.length > 0) {
            const selectedType = this.exclusiveType ? [this.selectedType[0]] : this.selectedType;
            filteringRunewords = filteringRunewords.filter((x) => {
                for (const type of x.Types) {
                    if (selectedType.includes(type.Index) || (type.Index === 'Merc Equip' && selectedType.includes('Helm'))) {
                        return true;
                    }
                }
                return false;
            });
        }

        // Amount filtering
        if (this.selectedAmount) {
            filteringRunewords = filteringRunewords.filter((x) => x.Runes.length === this.selectedAmount);
        }

        // Initialize found to apply both search filters together
        let found = filteringRunewords;

        // Regular search filter (by name, properties, types)
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

        // Rune search filter
        if (this.searchRunes) {
            const inputRuneList = this.searchRunes.split(' ')
                .map((rune) => rune.trim().toLowerCase())
                .filter((rune) => rune.length > 0);

            found = found.filter((runeword) => {
                const runewordRuneNames = runeword.Runes.map((rune) => this.normalizeRuneName(rune.Name));
                return inputRuneList.every((inputRune) =>
                    runewordRuneNames.includes(inputRune)
                );
            });
        }

        // Set the filtered runewords at the end
        this.filteredRunewords = found;
    }

    transformTypeName(name) {
        const rwBaseMap = {
            'Armor':'盔甲',
            'Any Armor':'盔甲',
            'Helm':'頭盔',
            'Weapon':'武器',
            'Melee Weapon':'近戰武器',
            'Missile Weapon':'遠程武器',
            'Any Shield':'盾牌',
            'Axe':'斧頭',
            'Club':'棍棒',
            'Hammer':'釘錘',
            'Hand to Hand':'拳刃',
            'Mace':'连枷',
            'Orb':'法珠',
            'Polearm':'長柄武器',
            'Scepter':'權杖',
            'Staff':'法杖',
            'Spear':'長矛',
            'Sword':'刀劍',
            'Wand':'魔杖',
            'Circlet':'頭環',
            'Amazon Bow':'亞馬遜弓',
            'Amazon Spear':'亞馬遜長矛',
            'Necromancer Item':'死靈法師盾牌',
            'Barbarian Item':'野蠻人頭盔',
            'Paladin Item':'聖騎士盾牌',
            'Druid Item': '德魯伊頭盔',
        };
        if (rwBaseMap[name] !== undefined) {
            return rwBaseMap[name];
        }
        switch (name) {
            case 'Merc Equip':
                return 'Helm'
            default:
                return name;
        }
    }

    actualLevelRequirement(runeword) {
        for (const property of runeword.Properties) {
            if (property.PropertyString && property.PropertyString.includes('To Required Level')) {
                const value = property.PropertyString.substring(1, 3);
                if(!runeword.RequiredLevel) {
                    return parseInt(value.trim());
                }
                return runeword.RequiredLevel + parseInt(value.trim());
            }
        }
        return runeword.RequiredLevel
    }
}
