export class StorageUtil {
    public static storageSave<T>(key: string, value: T): void {
        sessionStorage.setItem(key, JSON.stringify(value))
    }
    
    // Gets user from browser session storage 
    public static storageRead<T>(key: string): T | undefined {
        const storedValue = sessionStorage.getItem(key);
        // if storedValue exist convert it to JSON else set it to null
        try {
            if (storedValue) {
                return JSON.parse(storedValue) as T;
            } 
            return undefined  
        }
        catch (e) {
            sessionStorage.removeItem(key);
            return undefined;
        }
    }

}
// saves the user in session storage

