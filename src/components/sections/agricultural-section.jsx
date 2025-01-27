import {Box, Button, Divider, Grid2 as Grid, Typography} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import {useState} from "react";
import Empty from "../shared/empty.jsx";
import empty from "../../assets/images/empty.png";
import AddLivestockOrFisheriesDialog from "../dialogs/add-livestock-fisheries-dialog.jsx";
import AddCropDialog from "../dialogs/add-crop-dialog.jsx";
import Livestock from "../shared/livestocks.jsx";
import Crops from "../shared/crops.jsx";
import AgricultureActivitiesForm from "../forms/agriculture-activities-form.jsx";
import {useDispatch, useSelector} from "react-redux";
import {HOUSEHOLD_ACTIONS, selectHousehold} from "../../redux/features/households/household-slice.js";
import {ChevronLeftOutlined, ChevronRightOutlined} from "@mui/icons-material";

const AgricultureSection = () => {
    const dispatch = useDispatch();
    const {agriculture, step, totalSteps} = useSelector(selectHousehold);
    const [crops, setCrops] = useState([...agriculture.crops]);
    const [livestockOrFisheries, setLivestockOrFisheries] = useState([...agriculture.livestock_or_fisheries]);

    const [addCropDialogOpen, setAddCropDialogOpen] = useState(false);
    const [addLivestockDialogOpen, setAddLivestockDialogOpen] = useState(false);

    const [isValidated, setIsValidated] = useState(false);
    const [values, setValues] = useState({});
    const [isSaved, setIsSaved] = useState(false);

    const handleCropAdd = crop => {
        setCrops((prevCrops) => [...prevCrops, {id: crops.length + 1, ...crop}]);
    }
    const handleCropRemove = crop => {
        setCrops(crops.filter(c => c.id !== crop.id));
    }

    const handleFisheriesAdd = livestockOrFish => {
        setLivestockOrFisheries((prevFishOrLivestock) => [...prevFishOrLivestock, {id: crops.length + 1, ...livestockOrFish}]);
    }
    const handleFisheriesRemove = livestockOrFish => {
        setLivestockOrFisheries(crops.filter(c => c.id !== livestockOrFish.id));
    }

    const handleSaveAgriculture = () => {
        if (isValidated) {
            dispatch(HOUSEHOLD_ACTIONS.saveAgriculture({
                ...values,
                crops,
                livestock_or_fisheries: livestockOrFisheries
            }));
            dispatch(HOUSEHOLD_ACTIONS.next());
        }else{
            console.log('not validated', isValidated)
        }
    }

    const saveFormValues = values => {
        setIsSaved(true);
        setValues(values);
    }

    return (
        <Box>
            <SectionHeader title="Agricultural Activity"/>
            <Box sx={{mb: 4}}>
                <Typography variant="body2" sx={{color: "text.secondary"}}>
                    Does any member of your household cultivate crops or tree plant, rear livestock or breed fish for
                    sale or family gain?
                </Typography>
            </Box>

            <Box>
                <AgricultureActivitiesForm
                    isSaved={isSaved}
                    setIsValidated={setIsValidated}
                    saveFormValues={saveFormValues}
                />
            </Box>

            <Box sx={{mb: 4}}>
                <Box>
                    {crops.length === 0 && (
                        <Empty
                            title="No crops"
                            description="Click on the button to add crops to this household"
                            image={empty}
                            action={
                                <Button
                                    onClick={() => setAddCropDialogOpen(true)}
                                    fullWidth={true}
                                    disableElevation={true}
                                    size="large"
                                    variant="contained"
                                    type="submit"
                                    sx={{textTransform: "none"}}>
                                    Add Crop
                                </Button>
                            }
                        />
                    )}
                </Box>
                {crops.length > 0 && (
                    <Box>
                        <Grid sx={{mb: 2}} container={true} spacing={2} justifyContent="space-between">
                            <Grid size={{xs: 12, md: "auto"}}>
                                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                                    Crops ({crops.length})
                                </Typography>
                            </Grid>
                            <Grid size={{xs: 12, md: "auto"}}>
                                <Button
                                    onClick={() => setAddCropDialogOpen(true)}
                                    fullWidth={true}
                                    disableElevation={true}
                                    size="large"
                                    variant="contained"
                                    type="submit"
                                    sx={{textTransform: "none"}}>
                                    Add Crop
                                </Button>
                            </Grid>
                        </Grid>

                        <Divider variant="fullWidth" sx={{my: 2}}/>

                        <Crops crops={crops} handleCropRemove={handleCropRemove}/>
                    </Box>
                )}
            </Box>

            <Box>
                {livestockOrFisheries.length === 0 && (
                    <Empty
                        title="No livestock or Fisheries"
                        description="Click on the button to add livestock or fisheries"
                        image={empty}
                        action={
                            <Button
                                onClick={() => setAddLivestockDialogOpen(true)}
                                fullWidth={true}
                                disableElevation={true}
                                size="large"
                                variant="contained"
                                type="submit"
                                sx={{textTransform: "none"}}>
                                Add Livestock or Fisheries
                            </Button>
                        }
                    />
                )}
            </Box>

            {livestockOrFisheries.length > 0 && (
                <Box>
                    <Grid sx={{mb: 2}} container={true} spacing={2} justifyContent="space-between">
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                                Livestock or Fisheries ({livestockOrFisheries.length})
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Button
                                onClick={() => setAddLivestockDialogOpen(true)}
                                fullWidth={true}
                                disableElevation={true}
                                size="large"
                                variant="contained"
                                type="submit"
                                sx={{textTransform: "none"}}>
                                Add Livestock or Fisheries
                            </Button>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 2}}/>

                    <Livestock livestock={livestockOrFisheries} handleLivestockRemove={handleFisheriesRemove}/>
                </Box>
            )}

            <Box>
                <Divider variant="fullWidth" sx={{my: 2}}/>

                <Box>
                    <Grid container={true} justifyContent="space-between" spacing={2}>
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Button
                                startIcon={<ChevronLeftOutlined/>}
                                fullWidth={true}
                                disabled={step === 0}
                                variant="outlined"
                                color="secondary"
                                onClick={() => dispatch(HOUSEHOLD_ACTIONS.previous())}>
                                Previous
                            </Button>
                        </Grid>
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Button
                                onClick={handleSaveAgriculture}
                                endIcon={<ChevronRightOutlined/>}
                                disabled={step === totalSteps || !isSaved}
                                variant="contained"
                                color="primary"
                                disableElevation={true}
                                fullWidth={true}>
                                {!isSaved ? 'Save Values': 'Next'}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>


            {addCropDialogOpen && (
                <AddCropDialog
                    open={addCropDialogOpen}
                    onClose={() => setAddCropDialogOpen(false)}
                    handleCropAdd={handleCropAdd}
                />
            )}


            {addLivestockDialogOpen && (
                <AddLivestockOrFisheriesDialog
                    open={addLivestockDialogOpen}
                    onClose={() => setAddLivestockDialogOpen(false)}
                    handleFisheriesAdd={handleFisheriesAdd}
                />
            )}
        </Box>
    )
}

export default AgricultureSection;