import {Box, Button, Divider, Grid2 as Grid, Typography} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import {useState} from "react";
import Empty from "../shared/empty.jsx";
import empty from "../../assets/images/empty.png";
import AddLivestockOrFisheriesDialog from "../dialogs/add-livestock-fisheries-dialog.jsx";
import AddCropDialog from "../dialogs/add-crop-dialog.jsx";
import Livestock from "../shared/livestocks.jsx";
import Crops from "../shared/crops.jsx";
import AgricultureActivitiesForm from "../forms/agriculture-activities-form.jsx";

const AgricultureSection = () => {
    const [crops, setCrops] = useState([]);
    const [livestockOrFisheries, setLivestockOrFisheries] = useState([]);

    const [addCropDialogOpen, setAddCropDialogOpen] = useState(false);
    const [addLivestockDialogOpen, setAddLivestockDialogOpen] = useState(false);

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
                <AgricultureActivitiesForm />
            </Box>

            <Box>
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
            <SectionFooter/>


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