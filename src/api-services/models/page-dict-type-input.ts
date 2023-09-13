/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 515096995@qq.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface PageDictTypeInput
 */
export interface PageDictTypeInput {
    /**
     * 当前页码
     * @type {number}
     * @memberof PageDictTypeInput
     */
    page?: number;
    /**
     * 页码容量
     * @type {number}
     * @memberof PageDictTypeInput
     */
    pageSize?: number;
    /**
     * 排序字段
     * @type {string}
     * @memberof PageDictTypeInput
     */
    field?: string | null;
    /**
     * 排序方向
     * @type {string}
     * @memberof PageDictTypeInput
     */
    order?: string | null;
    /**
     * 降序排序
     * @type {string}
     * @memberof PageDictTypeInput
     */
    descStr?: string | null;
    /**
     * 名称
     * @type {string}
     * @memberof PageDictTypeInput
     */
    name?: string | null;
    /**
     * 编码
     * @type {string}
     * @memberof PageDictTypeInput
     */
    code?: string | null;
}