import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { HomePage } from "./components/home-page";
import { AboutPage } from "./components/about-page";
import { NewsPage } from "./components/news-page";
import { ConsultPage } from "./components/consult-page";
import { CommunityPage } from "./components/community-page";
import { PromisesPage } from "./components/promises-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "news", Component: NewsPage },
      { path: "consult", Component: ConsultPage },
      { path: "community", Component: CommunityPage },
      { path: "promises", Component: PromisesPage },
      {
        path: "*",
        Component: () => (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <h1 className="font-['Noto_Sans_KR',sans-serif] text-[48px]">404</h1>
              <p className="font-['Noto_Sans_KR',sans-serif] text-[#757575] text-[18px] mt-4">
                페이지를 찾을 수 없습니다.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
]);
