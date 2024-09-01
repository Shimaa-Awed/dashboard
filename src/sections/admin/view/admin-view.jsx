import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';  
import FormControl from '@mui/material/FormControl';  
import InputLabel from '@mui/material/InputLabel';  
import Select from '@mui/material/Select';  
import MenuItem from '@mui/material/MenuItem';  
import { useEffect, useState } from 'react';
import Scrollbar from 'src/components/scrollbar';
import TableNoData from '../table-no-data';
import UserTableRow from '../admin-table-row';
import UserTableHead from '../admin-table-head';
import TableEmptyRows from '../table-empty-row';
import UserTableToolbar from '../admin-table-toolbar';
import { emptyRows, applyFilter, getComparator } from './utils';

// ----------------------------------------------------------------------

export default function AdminPage() {
  const { t, i18n } = useTranslation();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);  
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    phone: '',
    status: '',
    role: 'admin'
  });
  const [errors, setErrors] = useState({});  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://backend.sakanijo.com/admin/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
<<<<<<< HEAD
        console.error('Error fetching users:', error);
=======
        console.error('خطأ في جلب المستخدمين:', error);
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
      }
    };

    fetchUsers();
  }, []);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleAddAdminToggle = () => {
    setIsAddingAdmin(!isAddingAdmin);
    if (isAddingAdmin) {
<<<<<<< HEAD
      // Reset form and errors when closing
=======
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
      setNewAdmin({
        name: '',
        phone: '',
        status: '',
        role: 'admin'
      });
      setErrors({});
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAdmin({
      ...newAdmin,
      [name]: value,
    });
  };

  const handleRoleChange = (event) => {
    setNewAdmin({
      ...newAdmin,
      role: event.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newAdmin.name) newErrors.name = t('error_name_required');
    if (!newAdmin.phone) newErrors.phone = t('error_phone_required');
    if (newAdmin.phone.length < 10) newErrors.phone = t('error_phone_length');
    if (!newAdmin.status) newErrors.status = t('error_status_required');
    return newErrors;
  };

  const handleAddAdmin = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setUsers([...users, { id: Date.now(), ...newAdmin }]); 
    setNewAdmin({
      name: '',
      phone: '',
      status: '',
      role: 'admin'
    });
    setIsAddingAdmin(false);
    setErrors({});
  };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
<<<<<<< HEAD
        {i18n.language === 'ar' ? t('admins') : 'Admin'}
=======
        {i18n.language === 'ar' ? t('admins') : 'المسؤولين'}
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
        <Button
          variant="contained"
          onClick={handleAddAdminToggle}
          sx={{ ml: 2 }}
        >
<<<<<<< HEAD
          {isAddingAdmin ? t('cancel') : t('add_admin')}
=======
          {isAddingAdmin ? t('cancel') : 'إضافة مسؤول'}
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
        </Button>
      </Typography>

      {isAddingAdmin && (
        <Card sx={{ p: 2, mb: 2 }}>
          <TextField
<<<<<<< HEAD
            label={t('admin_name')}
=======
            label="اسم المسؤول"
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
            name="name"
            value={newAdmin.name}
            onChange={handleInputChange}
            error={!!errors.name}
            helperText={errors.name}
            sx={{ m: 2 }}
          />
          <TextField
<<<<<<< HEAD
            label={t('admin_phone')}
=======
            label="هاتف المسؤول"
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
            name="phone"
            value={newAdmin.phone}
            onChange={handleInputChange}
            error={!!errors.phone}
            helperText={errors.phone}
            sx={{ m: 2 }}
          />
          <TextField
<<<<<<< HEAD
            label={t('admin_status')}
=======
            label="حالة المسؤول"
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
            name="status"
            value={newAdmin.status}
            onChange={handleInputChange}
            error={!!errors.status}
            helperText={errors.status}
            sx={{ m: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
<<<<<<< HEAD
            <InputLabel>{t('role')}</InputLabel>
=======
            <InputLabel>الدور</InputLabel>
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
            <Select
              value={newAdmin.role}
              onChange={handleRoleChange}
              name="role"
            >
<<<<<<< HEAD
              <MenuItem value="admin">{t('admin')}</MenuItem>
              <MenuItem value="manager">{t('manager')}</MenuItem>
=======
              <MenuItem value="admin">مسؤول</MenuItem>
              <MenuItem value="manager">مدير</MenuItem>
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={handleAddAdmin}
          >
<<<<<<< HEAD
            {t('add')}
=======
            إضافة
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
          </Button>
        </Card>
      )}

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />
        <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }}>
          <Table sx={{ minWidth: 800 }}>
            <UserTableHead
              order={order}
              orderBy={orderBy}
              rowCount={users.length}
              numSelected={selected.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              headLabel={[
<<<<<<< HEAD
                { id: 'name', label: t('name_t') },
                { id: 'phone', label: t('phone_t') },
                { id: 'status', label: t('status_t') },
                { id: 'role', label: t('role_t') }
=======
                { id: 'name', label: 'الاسم' },
                { id: 'phone', label: 'الهاتف' },
                { id: 'status', label: 'الحالة' },
                { id: 'role', label: 'الدور' }
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
              ]}
            />
            <TableBody>
              {dataFiltered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <UserTableRow
                    key={row.id}
                    id={row.id}
                    name={row.name}
                    status={row.status}
                    phone={row.phone}
                    avatarUrl={row.avatarUrl}
                    role={row.role}
                    selected={selected.indexOf(row.name) !== -1}
                    handleClick={(event) => handleClick(event, row.name)}
                  />
                ))}

              <TableEmptyRows
                height={77}
                emptyRows={emptyRows(page, rowsPerPage, users.length)}
              />

              {notFound && <TableNoData query={filterName} />}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <TablePagination
        page={page}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
<<<<<<< HEAD
        labelRowsPerPage={t('rows_per_page_t')}
=======
        labelRowsPerPage="الصفوف لكل صفحة"
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
      />
    </Card>
  </Container>
);
}