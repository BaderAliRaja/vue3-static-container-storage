import { reactive, watch } from "vue";

export class MagicContainer {
    
    private static bukket: {key: string, object: any}[] = [];

    public static put(key: string, object: any) {
        let reactiveObject = reactive(object);
        watch(reactiveObject, () => localStorage.setItem(key, JSON.stringify(reactiveObject))); // SAVE TO LOCALSTORAGE
        this.bukket.push({key, object: reactiveObject});
    }

    public static grab<T>(key: string): T {
        return this.bukket.find(item => item.key === key)!.object as T;
    }

}