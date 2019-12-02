interface Callback<R> {

    /**
     * http请求发起前。做UI交互。
     */
    pre(): any;

    /**
     * http请求处理中。请求数据处理。
     */
    deal(data: R): void;

    /**
     * 请求错误回调。错误处理。
     */
    error(): void;

    /**
     * 请求完成后回调。
     */
    finally(): void;

}

class Apis {

    // @ts-ignore
    private callback: Callback;

    // @ts-ignore
    handle(callback: Callback): Apis {
        this.callback = callback;
        return this;
    }

    get<T>(url: string): void {
        if (this.callback === undefined || this.callback === null) {
            throw Error;
        }

        this.callback.pre();
        this.callback.deal("请求路径：" + url);
        this.callback.error();
        this.callback.finally();
    }

}

function testCallback() {
    let apis = new Apis();
    apis.handle(new
    // @ts-ignore
    class implements Callback {
        deal(data: any): void {
            alert(">>>>>>" + data);

        }

        error(): void {
        }

        finally(): void {
        }

        pre(): void {
        }
    }).get('>>abc');

    /*apis.handle(
        {
            deal(data: any): void {
                alert(">>>>>>" + data);
            }, error(): void {

            }, finally(): void {

            }, pre(): any {

            }

        }
    ).get('====dsfsdf');*/
}
