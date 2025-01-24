import Layout from "../../components/layout/layout.jsx";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    Grid2 as Grid,
    InputAdornment,
    InputLabel,
    LinearProgress, MenuItem,
    OutlinedInput, Select
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {selectUI, setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";
import {selectDwellings} from "../../redux/features/dwellings/dwellings-slice.js";
import {SearchOutlined} from "@mui/icons-material";
import Empty from "../../components/shared/empty.jsx";
import empty from "../../assets/images/empty.png";
import DwellingTableViewContainer from "../../components/shared/dwelling-tableview-container.jsx";
import DwellingCardViewContainer from "../../components/shared/dwelling-card-view-container.jsx";
import NewDwellingDialog from "../../components/dialogs/new-dwelling-dialog.jsx";

const DwellingsPage = () => {
    const {error, loading, dwellings} = useSelector(selectDwellings);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("Dwellings"));
        dispatch(setSubtitle("Learn about the dwellings in this locality"));
    }, [dispatch]);

    const {view} = useSelector(selectUI);

    const [typeOfDwelling, setTypeOfDwelling] = useState("");
    const [outerWallMaterial, setOuterWallMaterial] = useState("");
    const [roofMaterial, setRoofMaterial] = useState("");
    const [floorMaterial, setFloorMaterial] = useState("");
    const [geographicalArea, setGeographicalArea] = useState("");

    const [addDwellingDialogOpen, setAddDwellingDialogOpen] = useState(false);

    const [query, setQuery] = useState("");

    return (
        <Layout>
            <Box sx={{mb: 4}}>
                {loading && <LinearProgress variant="query" color="secondary"/>}
                <Container  sx={{pt: 4}}>
                    {error && (
                        <Alert sx={{mb: 4}} variant="standard" severity="error">
                            <AlertTitle>{error}</AlertTitle>
                        </Alert>
                    )}
                    <Box>
                        <Grid container={true} spacing={2} justifyContent="space-between">
                            <Grid size={{xs: 12, md: 4}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel htmlFor="search">Search</InputLabel>
                                    <OutlinedInput
                                        fullWidth={true}
                                        placeholder="Search"
                                        type="search"
                                        id="search"
                                        name="search"
                                        label="Search"
                                        onChange={event => setQuery(event.target.value)}
                                        value={query}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <SearchOutlined/>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 4}}>
                                <Button
                                    onClick={() => setAddDwellingDialogOpen(true)}
                                    fullWidth={true}
                                    disableElevation={true}
                                    size="large"
                                    variant="outlined"
                                    sx={{textTransform: "none", py: 1.7}}>
                                    Add Dwelling
                                </Button>
                            </Grid>
                        </Grid>

                        <Divider variant="fullWidth" sx={{my: 4}}/>

                        <Grid container={true} spacing={1} justifyContent="space-between">
                            <Grid size={{xs: 12, md: 6, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="type_of_dwelling">
                                        Type of Dwelling
                                    </InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        value={typeOfDwelling}
                                        label="In what type of dwelling does the household live?"
                                        name="dwelling_type"
                                        variant="outlined">
                                        <MenuItem
                                            onClick={() => {
                                                setTypeOfDwelling('Separate house');
                                                setTypeOfDwelling('01');
                                            }} value="Separate house">Separate house</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setTypeOfDwelling('Semi-detached house');
                                                setTypeOfDwelling('02');
                                            }} value="Semi-detached house">Semi-detached house</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setTypeOfDwelling('Flat/Apartment');
                                                setTypeOfDwelling('03');
                                            }} value="Flat/Apartment">Flat/Apartment</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setTypeOfDwelling('Compound house (rooms)');
                                                setTypeOfDwelling('04');
                                            }} value="Compound house (rooms)">Compound house (rooms)</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setTypeOfDwelling('Huts/Buildings (same compound)');
                                                setTypeOfDwelling('05');
                                            }} value="Huts/Buildings (same compound)">Huts/Buildings (same
                                            compound)</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setTypeOfDwelling('Huts/Buildings (different compounds)');
                                                setTypeOfDwelling('06');
                                            }} value="Huts/Buildings (different compounds)">Huts/Buildings (different
                                            compounds)</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setTypeOfDwelling('Tent');
                                                setTypeOfDwelling('07');
                                            }} value="Tent">Tent</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setTypeOfDwelling('Improvised home (kiosk, container)');
                                                setTypeOfDwelling('08');
                                            }} value="Improvised home (kiosk, container)">Improvised home (kiosk,
                                            container)</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setTypeOfDwelling('Living quarters attached to office/shop');
                                                setTypeOfDwelling('09');
                                            }} value="Living quarters attached to office/shop">Living quarters attached
                                            to
                                            office/shop</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setTypeOfDwelling('Uncompleted building');
                                                setTypeOfDwelling('10');
                                            }} value="Uncompleted building">Uncompleted building</MenuItem>
                                        <MenuItem
                                            onClick={() => {
                                                setTypeOfDwelling('Other (Specify)');
                                                setTypeOfDwelling('11');
                                            }} value="Other (Specify)">Other (Specify)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 6, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel htmlFor="outer_wall_material">Outer Wall Material</InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        value={outerWallMaterial}
                                        label="What is the main material of the outer walls of this dwelling?"
                                        name="outer_wall"
                                        variant="outlined">
                                        <MenuItem
                                            onClick={() => {
                                                setOuterWallMaterial('Mud bricks/earth');
                                                setOuterWallMaterial('01');
                                            }} value="Mud bricks/earth">Mud bricks/earth</MenuItem>
                                        <MenuItem
                                            onClick={() => {
                                                setOuterWallMaterial('Wood');
                                                setOuterWallMaterial('02');
                                            }} value="Wood">Wood</MenuItem>
                                        <MenuItem
                                            onClick={() => {
                                                setOuterWallMaterial('Metal sheet/slate/asbestos');
                                                setOuterWallMaterial('03');
                                            }} value="Metal sheet/slate/asbestos">Metal sheet/slate/asbestos</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setOuterWallMaterial('Stone');
                                                setOuterWallMaterial('04');
                                            }} value="Stone">Stone</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setOuterWallMaterial('Burnt bricks');
                                                setOuterWallMaterial('05');
                                            }} value="Burnt bricks">Burnt bricks</MenuItem>


                                        <MenuItem
                                            onClick={() => {
                                                setOuterWallMaterial('Stone');
                                                setOuterWallMaterial('04');
                                            }} value="Stone">Stone</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setOuterWallMaterial('Cement blocks/concrete');
                                                setOuterWallMaterial('05');
                                            }} value="Cement blocks/concrete">Cement blocks/concrete</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setOuterWallMaterial('Landcrete');
                                                setOuterWallMaterial('07');
                                            }} value="Landcrete">Landcrete</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setOuterWallMaterial('Bamboo');
                                                setOuterWallMaterial('08');
                                            }} value="Bamboo">Bamboo</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setOuterWallMaterial('Palm leaves/Thatch (grass)/Raffia');
                                                setOuterWallMaterial('09');
                                            }} value="Palm leaves/Thatch (grass)/Raffia">Palm leaves/Thatch
                                            (grass)/Raffia</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setOuterWallMaterial('Other (Specify)');
                                                setOuterWallMaterial('10');
                                            }} value="Other (Specify)">Other (Specify)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="roof_material">
                                        Roof Material
                                    </InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        value={roofMaterial}
                                        label="What is the main material of the outer walls of this dwelling?"
                                        name="roof"
                                        variant="outlined">
                                        <MenuItem
                                            onClick={() => {
                                                setRoofMaterial('Mud/Mud bricks/Earth');
                                                setRoofMaterial('1');
                                            }} value="Mud/Mud bricks/Earth">Mud/Mud bricks/Earth</MenuItem>
                                        <MenuItem
                                            onClick={() => {
                                                setRoofMaterial('Wood');
                                                setRoofMaterial('2');
                                            }} value="Wood">Wood</MenuItem>
                                        <MenuItem
                                            onClick={() => {
                                                setRoofMaterial('Metal sheet');
                                                setRoofMaterial('3');
                                            }} value="Metal sheet">Metal sheet</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setRoofMaterial('Slate/Asbestos');
                                                setRoofMaterial('4');
                                            }} value="Slate/Asbestos">Slate/Asbestos</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setRoofMaterial('Cement/Concrete');
                                                setRoofMaterial('5');
                                            }} value="Cement/Concrete">Cement/Concrete</MenuItem>


                                        <MenuItem
                                            onClick={() => {
                                                setRoofMaterial('Roofing Tiles');
                                                setRoofMaterial('6');
                                            }} value="Roofing Tiles">Roofing Tiles</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setRoofMaterial('Bamboo');
                                                setRoofMaterial('7');
                                            }} value="Bamboo">Bamboo</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setRoofMaterial('Thatch/Palm leaves or Raffia');
                                                setRoofMaterial('8');
                                            }} value="Thatch/Palm leaves or Raffia">Thatch/Palm leaves or
                                            Raffia</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setRoofMaterial('Bamboo');
                                                setRoofMaterial('9');
                                            }} value="Bamboo">Bamboo</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setRoofMaterial('Other (Specify)');
                                                setRoofMaterial('09');
                                            }} value="Other (Specify)a">Other (Specify)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="floor_material">
                                        Floor Material
                                    </InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        value={floorMaterial}
                                        label="In what type of dwelling does the household live?"
                                        name="floor"
                                        variant="outlined">
                                        <MenuItem
                                            onClick={() => {
                                                setFloorMaterial('Earth/Mud');
                                                setFloorMaterial('1');
                                            }} value="Earth/Mud">Earth/Mud</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setFloorMaterial('Cement/Concrete');
                                                setFloorMaterial('2');
                                            }} value="Cement/Concrete">Cement/Concrete</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setFloorMaterial('Stone');
                                                setFloorMaterial('3');
                                            }} value="Stone">Stone</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setFloorMaterial('Burnt bricks');
                                                setFloorMaterial('4');
                                            }} value="Burnt bricks">Burnt bricks</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setFloorMaterial('Wood');
                                                setFloorMaterial('5');
                                            }} value="Wood">Wood</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setFloorMaterial('Vinyl tiles');
                                                setFloorMaterial('6');
                                            }} value="Vinyl tiles">Vinyl tiles</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setFloorMaterial('Ceramic/Porcelain/Granite/Marble tiles');
                                                setFloorMaterial('7');
                                            }} value="Ceramic/Porcelain/Granite/Marble tiles">Ceramic/Porcelain/Granite/Marble
                                            tiles</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setFloorMaterial('Other (Specify)');
                                                setFloorMaterial('8');
                                            }} value="Other (Specify)">Other (Specify)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel htmlFor="geographical_area">Geographical Area</InputLabel>

                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider variant="fullWidth" sx={{my: 4}}/>
                        <Box>
                            {dwellings?.length === 0 && (
                                <Empty
                                    title="No Dwellings"
                                    description="Where do you people live?"
                                    image={empty}
                                    action={
                                        <Button
                                            onClick={() => setAddDwellingDialogOpen(true)}
                                            fullWidth={true}
                                            disableElevation={true}
                                            size="large"
                                            variant="contained"
                                            type="submit"
                                            sx={{textTransform: "none"}}>
                                            Add New Dwelling
                                        </Button>
                                    }
                                />
                            )}
                        </Box>

                        {dwellings?.length > 0 && (
                            <Box>
                                {view === 'grid' ? (
                                    <DwellingCardViewContainer dwellings={dwellings}/>
                                ) : (
                                    <DwellingTableViewContainer dwellings={dwellings}/>
                                )}
                            </Box>
                        )}
                    </Box>
                </Container>
                {addDwellingDialogOpen && (
                    <NewDwellingDialog
                        open={addDwellingDialogOpen}
                        onClose={() => setAddDwellingDialogOpen(false)}
                    />
                )}
            </Box>
        </Layout>
    )
}

export default DwellingsPage;