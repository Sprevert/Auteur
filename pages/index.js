import Layout from '../components/Layout'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 300,
		height:500,
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
}));

export default function Home() {

	const classes = useStyles();
	const theme = useTheme();
	return (
		<Layout home>
			<Paper style={{ padding: 10 }}>
				<Card className={classes.root}>
					<CardMedia
						className={classes.cover}
						image="Consul.jpg"
						title="Les trois femmes du consul"
					/>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<Typography component="h5" variant="h5">
								Les trois femmes du consul
          </Typography>
							
						</CardContent>

						
					</div>

				</Card>
				<div>
					<Avatar alt="Jean Christophe Rufin" src="/rufin.jpg" />
				</div>
			</Paper>
		</Layout>
	)
}

// <Avatar alt="Remy Sharp" src="rufin.jpg" />