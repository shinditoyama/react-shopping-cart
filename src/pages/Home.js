import { Box } from '@mui/material';
import AppContent from "../components/AppContent";
import ShoppingList from "../components/ShoppingList";
import StatisticList from "../components/StatisticList";

import { useDispatch, useSelector } from "react-redux";
import { toggleProduct } from "../store/slices/productSlice";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.list);
    const selectedProduct = useSelector((state) => state.product.list.filter((item) => item.checked));
    const selectedProductTotalPrice = useSelector((state) => state.product.list.filter((item) => item.checked).reduce((a, b) => a + b.price, 0));

    const handleToggle = (id) => {
        dispatch(toggleProduct(id));
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#cfe8fc',
            height: '100vh',
        }}>
            <AppContent
                left={
                    <ShoppingList
                        title="Produtos disponíveis"
                        data={products}
                        onToggle={handleToggle}
                    />
                }
                middle={
                    <ShoppingList
                        title="Lista de compras"
                        data={selectedProduct}
                        onToggle={handleToggle}
                    />
                }
                right={
                    <StatisticList
                        title="Estatísticas"
                        total={selectedProductTotalPrice}
                    />
                }
            />
        </Box>
    );
}

export default Home;