import React from "react";
import { create } from "react-test-renderer";
import FlickrImage from "./FlickrImage";

afterEach(() => {
    document.body.innerHTML = '';
});

describe("FlickrImage component", () => {
  it("loading json", async () => {
    const component = create(<FlickrImage time="5" search="animals" />);
    const instance = component.getInstance();
    await instance.componentDidMount();
    //
    expect(instance.state.photos.length).toBeGreaterThan(0);
  });
});
