import ArchiveIcon from '@mui/icons-material/Archive';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import React from 'react';

const BottomNav = () => {
	const [value, setValue] = React.useState(0);

	const router = useRouter();

	React.useEffect(() => {
		switch (value) {
			case 0: {
				router.replace('/');
				break;
			}

			case 1: {
				router.replace('/list-pelatihan');
				break;
			}

			default: {
				break;
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	return (
		<Paper
			sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
			elevation={3}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}>
				<BottomNavigationAction label="Home" icon={<HomeIcon />} />
				<BottomNavigationAction label="Pelatihan" icon={<LibraryBooksIcon />} />
				<BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
			</BottomNavigation>
		</Paper>
	);
};

export default BottomNav;
