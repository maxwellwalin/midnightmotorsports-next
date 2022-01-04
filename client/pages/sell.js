import AddProduct from "../components/AddProduct";
import { ALL_CATEGORIES_QUERY, ALL_MODELS_QUERY } from "../lib/queries";
import { useQuery } from "@apollo/client";

export default function sell() {
    const modelsResponse = useQuery(ALL_MODELS_QUERY);
    const { loading, data, error} = useQuery(ALL_CATEGORIES_QUERY);


    if (loading) {
        return <p>Loading...</p>;
      }
    return (
        <div>
        <h1>Sell</h1>
        <AddProduct categories={data.allCategories} models={modelsResponse.data.allModels} />
        </div>
    );
}