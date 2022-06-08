import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import BranchService from '../../services/branchService';

export default function BranchPage() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await BranchService.getList();
    setData(resp.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>BranchID</TableCell>
              <TableCell align="right">BranchName</TableCell>
              <TableCell align="right">BranchNbr</TableCell>
              <TableCell align="right">ScreenNo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={Math.random() * 10}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.BranchID}
                </TableCell>
                <TableCell align="right">{row.BranchName}</TableCell>
                <TableCell align="right">{row.BranchNbr}</TableCell>
                <TableCell align="right">{row.ScreenNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
