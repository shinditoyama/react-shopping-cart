import { Box, Divider, Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { clearList } from "../store/slices/productSlice";
import ProgressBar from './ProgressBar';

const StatisticList = ({ title, total }) => {
    const dispatch = useDispatch();
    const selectedProduct = useSelector((state) => state.product.list.filter((item) => item.checked));

    function extractPercentage(total, category) {
        return (category * 100) / total;
    }

    return (
        <Box>
            {title}:
            <Divider sx={{ mb: 2 }} />

            <ProgressBar
                title="Saudável"
                color="success"
                percentage={extractPercentage(
                    selectedProduct.length,
                    selectedProduct.filter((product) => product.tags.includes('healthy')).length
                )}
            />
            <ProgressBar
                title="Não tão saudavel"
                color="error"
                percentage={extractPercentage(
                    selectedProduct.length,
                    selectedProduct.filter((product) => product.tags.includes('junk')).length
                )}
            />
            <ProgressBar
                title="Limpeza & Higiênico"
                color="primary"
                percentage={extractPercentage(
                    selectedProduct.length,
                    selectedProduct.filter((product) => product.tags.includes('cleaning') || product.tags.includes('hygiene')).length
                )}
            />
            <ProgressBar
                title="Outros"
                color="secondary"
                percentage={extractPercentage(
                    selectedProduct.length,
                    selectedProduct.filter((product) => !product.tags.includes('healthy') && !product.tags.includes('junk') && !product.tags.includes('cleaning') && !product.tags.includes('hygiene')).length
                )}
            />

            <Box>
                Total:
                <p>
                    {total.toLocaleString('pt-br', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </p>
                {
                    selectedProduct.length > 0 && (
                        <Button variant="contained" color="error" fullWidth onClick={() => dispatch(clearList())}>Clear</Button>
                    )
                }
            </Box>

        </Box>
    );
}

export default StatisticList;