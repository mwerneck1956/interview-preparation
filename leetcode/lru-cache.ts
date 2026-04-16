class LRUCache {
    capacity: number;
    length: number;
    items: Map<number, number>
    itemsFrequency: Map<number, number>


    constructor(capacity: number) {
        this.capacity = capacity;
        this.length = 0;
        this.items = new Map()
        this.itemsFrequency = new Map();
    }

    get(key: number): number | undefined {

        if (this.items.has(key)) {
            this.itemsFrequency.set(key, this.itemsFrequency.get(key) + 1);
            return this.items.get(key)
        }

    }

    put(key: number, value: number): void {
        if (!this.items.has(key) && this.length === this.capacity)
            this.removeLeastUsed();

        this.items.set(key, value)
        this.itemsFrequency.set(key, 0);
        this.length++;
    }

    private removeLeastUsed() {
        //pass
    }


}



var obj = new LRUCache(2)
obj.put(1, 20);
obj.put(2, 30);

var param_1 = obj.get(1)
obj.get(1)
obj.get(1);

obj.put(3, 30);

console.log(param_1)



