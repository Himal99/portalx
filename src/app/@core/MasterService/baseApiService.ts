export abstract class BaseApiService<T>{
private obj: T | undefined;

protected abstract getApi(): string;

}
