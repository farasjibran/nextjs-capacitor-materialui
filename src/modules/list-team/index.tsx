import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Box, CircularProgress, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import parse from 'html-react-parser';
import * as React from 'react';

import { useCourseList } from '@/services/api/course/course.hooks';

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function ListTeamModule() {
	const { courseList, isLoadingCourseData } = useCourseList();

	const [expandedArray, setExpandedArray] = React.useState(
		courseList.map(() => false)
	);

	const handleExpandClick = (index: number) => {
		const newExpandedArray = [...expandedArray];
		newExpandedArray[index] = !newExpandedArray[index];
		setExpandedArray(newExpandedArray);
	};

	return (
		<Box sx={{ py: 2, pb: 10 }}>
			{isLoadingCourseData && <CircularProgress />}
			<Grid container spacing={2}>
				{courseList.map((value, key) => (
					<Grid item lg={12} key={key}>
						<Card sx={{ maxWidth: 345, width: '100%' }}>
							<CardHeader
								avatar={
									<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
										R
									</Avatar>
								}
								action={
									<IconButton aria-label="settings">
										<MoreVertIcon />
									</IconButton>
								}
								title={value.penyelenggara}
								subheader="September 14, 2016"
							/>
							<CardMedia
								component="img"
								height="194"
								width={100}
								image={value.path_thumbnail}
								alt={value.judul_pelatihan}
							/>
							<CardContent>
								<Typography variant="h5">{value.judul_pelatihan}</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton aria-label="add to favorites">
									<FavoriteIcon />
								</IconButton>
								<IconButton aria-label="share">
									<ShareIcon />
								</IconButton>
								<ExpandMore
									expand={expandedArray[key]}
									onClick={() => handleExpandClick(key)}
									aria-expanded={expandedArray[key]}
									aria-label="show more">
									<ExpandMoreIcon />
								</ExpandMore>
							</CardActions>
							<Collapse in={expandedArray[key]} timeout="auto" unmountOnExit>
								<CardContent>{parse(value.informasi_umum ?? '')}</CardContent>
							</Collapse>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
