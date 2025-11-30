import AdminRoutes from "./routes/AdminRoutes";
import StorefrontRoutes from "./routes/StorefrontRoutes";

function App() {
  return (
    <>
      <StorefrontRoutes />
      <AdminRoutes />
    </>
  );
}
export default App;
