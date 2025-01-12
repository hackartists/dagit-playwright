import { test, expect } from "@playwright/test";
import {
    image_path,
    latency,
    agit_name,
    collection_name,
    nft_name,
} from "./constants";
import path from "path";

test.describe("collection test", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await page.waitForTimeout(latency);
    });
    
    test("go to collection list", async ({ page }) => {
        await page.getByRole("link", { name: "Collection" }).click();
        await page.waitForTimeout(latency);
    });
    
    test("Collection offline shooting request", async ({ page }) => {
        await page
        .locator('xpath=//*[@id="main"]/div[1]/div[4]/header/div/div[2]/div')
        .click();
        await page.waitForTimeout(latency);
        await page.getByText("My Agit", { exact: true }).click();
        await page.waitForTimeout(latency);
        await page.getByText(agit_name, { exact: true }).click();
        await page.waitForTimeout(latency);
        await page.getByText(collection_name, { exact: true }).click();
        await page.waitForTimeout(latency);
        await page.getByText("콜렉션 오프라인 촬영 요청", { exact: true }).click();
        await page.waitForTimeout(latency);
        await page.getByPlaceholder("작품 이름을 입력해 주세요.").fill(nft_name);
        await page.waitForTimeout(latency);
        await page.getByPlaceholder("작품에 대한 상세한 설명을 입력해 주세요.").fill("test");
        await page.waitForTimeout(latency);
        await page.getByPlaceholder("작품 촬영 시 최종 형상의 분위기 등 촬영에서 지향하고자 하는 방향을 입력해 주세요.").fill("test");
        await page.waitForTimeout(latency);
        await page.getByPlaceholder("작품 호수를 입력해 주세요.").fill("test");
        await page.waitForTimeout(latency);
        let date = new Date();
        date.setDate(date.getDate() + 7);
        let year = date.getFullYear();
        year = String(year);
        let yy = year.substring();
        let month = new String(date.getMonth() + 1);
        let day = new String(date.getDate());
        if (month.length == 1) {
            month = "0" + month;
        }
        if (day.length == 1) {
            day = "0" + day;
        }
        let str = yy + "." + month + "." + day;
        await page
            .getByPlaceholder("2024.01.01", {
            exact: true,})
            .fill(str);
            await page.getByPlaceholder("담당자 전화번호를 입력해 주세요.").fill("000-0000-0000");
            await page.waitForTimeout(latency);
            await page.getByText("촬영 요청하기").click();
            await page.waitForTimeout(latency);
    });

    test("follow a collection", async ({ page }) => {
        await page
            .locator('xpath=//*[@id="main"]/div[1]/div[4]/header/div/div[2]/div')
            .click();
            await page.waitForTimeout(latency);
            await page.getByText('My Agit', { exact: true }).click();
            await page.waitForTimeout(latency);
            await page.getByText(agit_name, { exact: true }).click();
            await page.waitForTimeout(latency);
            await page.getByText(collection_name, { exact: true }).click();
            await page.waitForTimeout(latency);
            await page.getByRole("button", { name: "Follow" }).click();
            await page.waitForTimeout(latency);
        });
});