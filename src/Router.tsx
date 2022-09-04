import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/checkout" />
        {/* TODO ... outras rotas */}
      </Route>
    </Routes>
  );
}
