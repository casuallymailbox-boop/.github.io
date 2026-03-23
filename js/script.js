/**
 * Rent Tracker - Hurstville
 * GitHub Pages compatible with localStorage persistence
 */

// ===== PRE-LOADED DATA (Parsed from "Rent for Hurstville.xlsx") =====
const defaultData = [
    { id: "27-Jan-2026", date: "27-Jan-2026", totalRent: 750, iPaid: 750, roommatePaid: 0, netPaid: 750, roommatePaidOn: null, status: "paid", notes: "Bond/Deposit/Advance paid" },
    { id: "2-Feb-2026", date: "2-Feb-2026", totalRent: 750, iPaid: 750, roommatePaid: null, netPaid: 750, roommatePaidOn: null, status: "paid", notes: "Roommate Electricity $770" },
    { id: "9-Feb-2026", date: "9-Feb-2026", totalRent: 750, iPaid: 750, roommatePaid: 850, netPaid: -100, roommatePaidOn: "12-Feb-2026", status: "paid", notes: "Roommate overpaid" },
    { id: "16-Feb-2026", date: "16-Feb-2026", totalRent: 750, iPaid: 750, roommatePaid: 385, netPaid: 365, roommatePaidOn: "20-Feb-2026", status: "paid", notes: "" },
    { id: "23-Feb-2026", date: "23-Feb-2026", totalRent: 750, iPaid: 750, roommatePaid: 385, netPaid: 365, roommatePaidOn: "27-Feb-2026", status: "paid", notes: "" },
    { id: "2-Mar-2026", date: "2-Mar-2026", totalRent: 750, iPaid: 750, roommatePaid: 385, netPaid: 365, roommatePaidOn: "6-Mar-2026", status: "paid", notes: "" },
    { id: "9-Mar-2026", date: "9-Mar-2026", totalRent: 750, iPaid: 750, roommatePaid: 385, netPaid: 365, roommatePaidOn: "13-Mar-2026", status: "paid", notes: "" },
    { id: "16-Mar-2026", date: "16-Mar-2026", totalRent: 750, iPaid: 750, roommatePaid: 385, netPaid: 365, roommatePaidOn: "20-Mar-2026", status: "paid", notes: "" },
    { id: "23-Mar-2026", date: "23-Mar-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "27-Mar-2026", status: "pending", notes: "" },
    { id: "30-Mar-2026", date: "30-Mar-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "3-Apr-2026", status: "pending", notes: "" },
    { id: "6-Apr-2026", date: "6-Apr-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "10-Apr-2026", status: "pending", notes: "" },
    { id: "13-Apr-2026", date: "13-Apr-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "17-Apr-2026", status: "pending", notes: "" },
    { id: "20-Apr-2026", date: "20-Apr-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "24-Apr-2026", status: "pending", notes: "" },
    { id: "27-Apr-2026", date: "27-Apr-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "1-May-2026", status: "pending", notes: "" },
    { id: "4-May-2026", date: "4-May-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "8-May-2026", status: "pending", notes: "" },
    { id: "11-May-2026", date: "11-May-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "15-May-2026", status: "pending", notes: "" },
    { id: "18-May-2026", date: "18-May-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "22-May-2026", status: "pending", notes: "" },
    { id: "25-May-2026", date: "25-May-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "29-May-2026", status: "pending", notes: "" },
    { id: "1-Jun-2026", date: "1-Jun-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "5-Jun-2026", status: "pending", notes: "" },
    { id: "8-Jun-2026", date: "8-Jun-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "12-Jun-2026", status: "pending", notes: "" },
    { id: "15-Jun-2026", date: "15-Jun-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "19-Jun-2026", status: "pending", notes: "" },
    { id: "22-Jun-2026", date: "22-Jun-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "26-Jun-2026", status: "pending", notes: "" },
    { id: "29-Jun-2026", date: "29-Jun-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "3-Jul-2026", status: "pending", notes: "" },
    { id: "6-Jul-2026", date: "6-Jul-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "10-Jul-2026", status: "pending", notes: "" },
    { id: "13-Jul-2026", date: "13-Jul-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "17-Jul-2026", status: "pending", notes: "" },
    { id: "20-Jul-2026", date: "20-Jul-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "24-Jul-2026", status: "pending", notes: "" },
    { id: "27-Jul-2026", date: "27-Jul-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "31-Jul-2026", status: "pending", notes: "" },
    { id: "3-Aug-2026", date: "3-Aug-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "7-Aug-2026", status: "pending", notes: "" },
    { id: "10-Aug-2026", date: "10-Aug-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "14-Aug-2026", status: "pending", notes: "" },
    { id: "17-Aug-2026", date: "17-Aug-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "21-Aug-2026", status: "pending", notes: "" },
    { id: "24-Aug-2026", date: "24-Aug-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "28-Aug-2026", status: "pending", notes: "" },
    { id: "31-Aug-2026", date: "31-Aug-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "4-Sep-2026", status: "pending", notes: "" },
    { id: "7-Sep-2026", date: "7-Sep-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "11-Sep-2026", status: "pending", notes: "" },
    { id: "14-Sep-2026", date: "14-Sep-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "18-Sep-2026", status: "pending", notes: "" },
    { id: "21-Sep-2026", date: "21-Sep-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "25-Sep-2026", status: "pending", notes: "" },
    { id: "28-Sep-2026", date: "28-Sep-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "2-Oct-2026", status: "pending", notes: "" },
    { id: "5-Oct-2026", date: "5-Oct-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "9-Oct-2026", status: "pending", notes: "" },
    { id: "12-Oct-2026", date: "12-Oct-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "16-Oct-2026", status: "pending", notes: "" },
    { id: "19-Oct-2026", date: "19-Oct-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "23-Oct-2026", status: "pending", notes: "" },
    { id: "26-Oct-2026", date: "26-Oct-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "30-Oct-2026", status: "pending", notes: "" },
    { id: "2-Nov-2026", date: "2-Nov-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "6-Nov-2026", status: "pending", notes: "" },
    { id: "9-Nov-2026", date: "9-Nov-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "13-Nov-2026", status: "pending", notes: "" },
    { id: "16-Nov-2026", date: "16-Nov-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "20-Nov-2026", status: "pending", notes: "" },
    { id: "23-Nov-2026", date: "23-Nov-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "27-Nov-2026", status: "pending", notes: "" },
    { id: "30-Nov-2026", date: "30-Nov-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "4-Dec-2026", status: "pending", notes: "" },
    { id: "7-Dec-2026", date: "7-Dec-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "11-Dec-2026", status: "pending", notes: "" },
    { id: "14-Dec-2026", date: "14-Dec-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "18-Dec-2026", status: "pending", notes: "" },
    { id: "21-Dec-2026", date: "21-Dec-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "25-Dec-2026", status: "pending", notes: "" },
    { id: "28-Dec-2026", date: "28-Dec-2026", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "1-Jan-2027", status: "pending", notes: "" },
    { id: "4-Jan-2027", date: "4-Jan-2027", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "8-Jan-2027", status: "pending", notes: "" },
    { id: "11-Jan-2027", date: "11-Jan-2027", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "15-Jan-2027", status: "pending", notes: "" },
    { id: "18-Jan-2027", date: "18-Jan-2027", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "22-Jan-2027", status: "pending", notes: "" },
    { id: "25-Jan-2027", date: "25-Jan-2027", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "29-Jan-2027", status: "pending", notes: "" },
    { id: "1-Feb-2027", date: "1-Feb-2027", totalRent: 750, iPaid: null, roommatePaid: null, netPaid: 0, roommatePaidOn: "5-Feb-2027", status: "pending", notes: "" }
];

// ===== STATE MANAGEMENT =====
const STORAGE_KEY = 'hurstville_rent_data';

let currentData = [];

// Load data from localStorage or use defaults
const loadData = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            currentData = JSON.parse(stored);
            showToast('Data loaded from browser storage', 'success');
        } else {
            currentData = [...defaultData];
            saveData();
        }
    } catch (e) {
        console.error('Error loading data:', e);
        currentData = [...defaultData];
        showToast('Using default data', 'warning');
    }
};

// Save data to localStorage
const saveData = () => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
    } catch (e) {
        console.error('Error saving data:', e);
        showToast('Failed to save data', 'error');
    }
};

// ===== DOM ELEMENTS =====
const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const monthFilter = document.getElementById('monthFilter');
const summaryGrid = document.getElementById('summaryGrid');
const emptyState = document.getElementById('emptyState');
const btnExport = document.getElementById('btnExport');
const btnAddEntry = document.getElementById('btnAddEntry');
const btnAddFromEmpty = document.getElementById('btnAddFromEmpty');
const modalOverlay = document.getElementById('modalOverlay');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnCancelEntry = document.getElementById('btnCancelEntry');
const addEntryForm = document.getElementById('addEntryForm');
const editModalOverlay = document.getElementById('editModalOverlay');
const btnCloseEditModal = document.getElementById('btnCloseEditModal');
const btnCancelEdit = document.getElementById('btnCancelEdit');
const editEntryForm = document.getElementById('editEntryForm');
const deleteModalOverlay = document.getElementById('deleteModalOverlay');
const btnCloseDeleteModal = document.getElementById('btnCloseDeleteModal');
const btnCancelDelete = document.getElementById('btnCancelDelete');
const btnConfirmDelete = document.getElementById('btnConfirmDelete');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const toastClose = document.getElementById('toastClose');

// ===== UTILITY FUNCTIONS =====
const formatCurrency = (amount) => {
    if (amount === null || amount === undefined || amount === '' || isNaN(amount)) return '-';
    const num = parseFloat(amount);
    if (isNaN(num)) return '-';
    return Math.abs(num).toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
};

const formatDate = (dateStr) => {
    if (!dateStr || dateStr === '') return '-';
    return String(dateStr);
};

const formatDateForInput = (dateStr) => {
    if (!dateStr || dateStr === '') return '';
    const months = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
        'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
        'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
    };
    const parts = String(dateStr).split('-');
    if (parts.length === 3) {
        const day = parts[0].padStart(2, '0');
        const month = months[parts[1]] || '01';
        const year = parts[2];
        return `${year}-${month}-${day}`;
    }
    return dateStr;
};

const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const getStatusBadge = (status, roommatePaidOn, iPaid) => {
    if (iPaid === null || iPaid === 0 || iPaid === '') {
        return `<span class="status missed">✗ Unpaid</span>`;
    } else if (status === 'paid' || roommatePaidOn) {
        return `<span class="status paid">✓ Paid</span>`;
    }
    return `<span class="status pending">⏳ Pending</span>`;
};

// ===== TOAST NOTIFICATIONS =====
const showToast = (message, type = 'success') => {
    toastMessage.textContent = message;
    toast.className = 'toast';
    if (type) toast.classList.add(type);
    toast.hidden = false;
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
        toast.hidden = true;
    }, 4000);
};

const closeToast = () => {
    toast.hidden = true;
};

// ===== RENDER FUNCTIONS =====
const renderSummary = (data) => {
    const totalWeeks = data.filter(row => row.date && row.date !== '-').length;
    const totalRent = data.reduce((sum, row) => sum + (row.totalRent || 0), 0);
    const totalIPaid = data.reduce((sum, row) => sum + (row.iPaid || 0), 0);
    const totalRoommate = data.reduce((sum, row) => sum + (row.roommatePaid || 0), 0);
    const netTotal = data.reduce((sum, row) => sum + (row.netPaid || 0), 0);
    const unpaidCount = data.filter(row => !row.iPaid || row.iPaid === 0).length;

    summaryGrid.innerHTML = `
        <div class="summary-card">
            <div class="label">Total Weeks</div>
            <div class="value">${totalWeeks}</div>
        </div>
        <div class="summary-card">
            <div class="label">Total Rent</div>
            <div class="value">${formatCurrency(totalRent)}</div>
        </div>
        <div class="summary-card positive">
            <div class="label">Roommate Contributed</div>
            <div class="value">${formatCurrency(totalRoommate)}</div>
        </div>
        <div class="summary-card ${netTotal < 0 ? 'negative' : 'positive'}">
            <div class="label">Net Paid</div>
            <div class="value">${formatCurrency(netTotal)}</div>
        </div>
        <div class="summary-card">
            <div class="label">Unpaid Weeks</div>
            <div class="value">${unpaidCount}</div>
        </div>
    `;
};

const renderTable = (data) => {
    if (data.length === 0) {
        tableBody.innerHTML = '';
        emptyState.hidden = false;
        return;
    }
    
    emptyState.hidden = true;
    
    tableBody.innerHTML = data.map((row) => {
        // Find the actual index in currentData for edit/delete
        const actualIndex = currentData.findIndex(item => item.id === row.id);
        return `
        <tr>
            <td><strong>${formatDate(row.date)}</strong></td>
            <td>${formatCurrency(row.totalRent)}</td>
            <td>${formatCurrency(row.iPaid)}</td>
            <td class="${row.roommatePaid < 0 ? 'negative' : ''}">${formatCurrency(row.roommatePaid)}</td>
            <td class="${row.netPaid < 0 ? 'negative' : row.netPaid > 0 ? 'positive' : ''}">${formatCurrency(row.netPaid)}</td>
            <td><small>${formatDate(row.roommatePaidOn)}</small></td>
            <td>${getStatusBadge(row.status, row.roommatePaidOn, row.iPaid)}</td>
            <td>
                <button class="btn-action" data-id="${row.id}" onclick="openEditModal('${row.id}')">Edit</button>
                <button class="btn-action delete" data-id="${row.id}" onclick="confirmDelete('${row.id}')">Delete</button>
            </td>
        </tr>
    `}).join('');
};

// ===== MONTH FILTER (Fixed Duplicates) =====
const populateMonthFilter = (data) => {
    monthFilter.innerHTML = '<option value="all">All Months</option>';
    const monthSet = new Set();
    
    data.forEach(row => {
        if (!row.date || row.date === '-') return;
        const dateStr = String(row.date);
        const parts = dateStr.split('-');
        if (parts.length >= 3) {
            const monthYear = `${parts[1]}-${parts[2]}`;
            monthSet.add(monthYear);
        } else if (parts.length === 2) {
            monthSet.add(dateStr);
        }
    });
    
    const months = Array.from(monthSet).sort((a, b) => {
        const monthsOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const [monthA, yearA] = a.split('-');
        const [monthB, yearB] = b.split('-');
        if (yearA !== yearB) return parseInt(yearA) - parseInt(yearB);
        return monthsOrder.indexOf(monthA) - monthsOrder.indexOf(monthB);
    });
    
    months.forEach(month => {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        monthFilter.appendChild(option);
    });
};

const filterData = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedMonth = monthFilter.value;
    
    const filtered = currentData.filter(row => {
        const matchesSearch = !searchTerm || 
            String(row.date).toLowerCase().includes(searchTerm) ||
            String(row.status).toLowerCase().includes(searchTerm);
        
        const matchesMonth = selectedMonth === 'all' || 
            String(row.date).includes(selectedMonth);
        
        return matchesSearch && matchesMonth;
    });
    
    renderTable(filtered);
};

// ===== EXPORT FUNCTION =====
const exportSummary = () => {
    const totalWeeks = currentData.filter(row => row.date && row.date !== '-').length;
    const totalRent = currentData.reduce((sum, row) => sum + (row.totalRent || 0), 0);
    const totalIPaid = currentData.reduce((sum, row) => sum + (row.iPaid || 0), 0);
    const totalRoommate = currentData.reduce((sum, row) => sum + (row.roommatePaid || 0), 0);
    const netTotal = currentData.reduce((sum, row) => sum + (row.netPaid || 0), 0);
    
    const summary = [
        ['Hurstville Rent Summary'],
        ['Generated:', new Date().toLocaleDateString()],
        [],
        ['Metric', 'Value'],
        ['Total Weeks', totalWeeks],
        ['Total Rent', totalRent],
        ['I Paid', totalIPaid],
        ['Roommate Contributed', totalRoommate],
        ['Net Paid', netTotal]
    ];
    
    const ws = XLSX.utils.aoa_to_sheet(summary);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Summary');
    XLSX.writeFile(wb, `Rent-Summary-${new Date().toISOString().split('T')[0]}.xlsx`);
    showToast('Summary exported successfully!', 'success');
};

// ===== ADD/EDIT/DELETE ENTRIES =====
const openAddModal = () => {
    modalOverlay.hidden = false;
    document.getElementById('entryDate').valueAsDate = new Date();
    document.getElementById('entryTotalRent').value = 750;
    document.getElementById('entryIPaid').value = '';
    document.getElementById('entryRoommatePaid').value = '';
    document.getElementById('entryRoommateDate').value = '';
    document.getElementById('entryNotes').value = '';
    document.getElementById('entryDate').focus();
};

const closeAddModal = () => {
    modalOverlay.hidden = true;
    addEntryForm.reset();
};

const openEditModal = (id) => {
    const entry = currentData.find(item => item.id === id);
    if (!entry) {
        showToast('Entry not found', 'error');
        return;
    }
    
    document.getElementById('editEntryId').value = id;
    document.getElementById('editDate').value = formatDateForInput(entry.date);
    document.getElementById('editTotalRent').value = entry.totalRent || '';
    document.getElementById('editIPaid').value = entry.iPaid || '';
    document.getElementById('editRoommatePaid').value = entry.roommatePaid || '';
    document.getElementById('editRoommateDate').value = formatDateForInput(entry.roommatePaidOn);
    document.getElementById('editNotes').value = entry.notes || '';
    
    editModalOverlay.hidden = false;
    document.getElementById('editDate').focus();
};

const closeEditModal = () => {
    editModalOverlay.hidden = true;
    editEntryForm.reset();
};

const saveNewEntry = (e) => {
    e.preventDefault();
    
    const dateInput = document.getElementById('entryDate').value;
    if (!dateInput) {
        showToast('Please select a date', 'error');
        return;
    }
    
    const totalRent = parseFloat(document.getElementById('entryTotalRent').value) || 750;
    const iPaid = document.getElementById('entryIPaid').value ? parseFloat(document.getElementById('entryIPaid').value) : null;
    const roommatePaid = document.getElementById('entryRoommatePaid').value ? parseFloat(document.getElementById('entryRoommatePaid').value) : null;
    const roommatePaidOn = document.getElementById('entryRoommateDate').value || null;
    const notes = document.getElementById('entryNotes').value;
    
    const dateObj = new Date(dateInput);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = `${dateObj.getDate()}-${months[dateObj.getMonth()]}-${dateObj.getFullYear()}`;
    
    let netPaid = 0;
    if (iPaid !== null && roommatePaid !== null) {
        netPaid = iPaid - roommatePaid;
    } else if (iPaid !== null) {
        netPaid = iPaid;
    }
    
    let status = 'pending';
    if (iPaid && iPaid > 0) {
        status = 'paid';
    }
    
    const newEntry = {
        id: generateId(),
        date,
        totalRent,
        iPaid,
        roommatePaid,
        netPaid,
        roommatePaidOn,
        status,
        notes
    };
    
    currentData.push(newEntry);
    currentData.sort((a, b) => new Date(formatDateForInput(a.date)) - new Date(formatDateForInput(b.date)));
    
    saveData();
    renderSummary(currentData);
    populateMonthFilter(currentData);
    renderTable(currentData);
    closeAddModal();
    showToast('Entry added successfully!', 'success');
};

const updateEntry = (e) => {
    e.preventDefault();
    
    const id = document.getElementById('editEntryId').value;
    const index = currentData.findIndex(item => item.id === id);
    
    if (index === -1) {
        showToast('Entry not found', 'error');
        return;
    }
    
    const dateInput = document.getElementById('editDate').value;
    if (!dateInput) {
        showToast('Please select a date', 'error');
        return;
    }
    
    const totalRent = parseFloat(document.getElementById('editTotalRent').value) || 0;
    const iPaid = document.getElementById('editIPaid').value ? parseFloat(document.getElementById('editIPaid').value) : null;
    const roommatePaid = document.getElementById('editRoommatePaid').value ? parseFloat(document.getElementById('editRoommatePaid').value) : null;
    const roommatePaidOn = document.getElementById('editRoommateDate').value || null;
    const notes = document.getElementById('editNotes').value;
    
    const dateObj = new Date(dateInput);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = `${dateObj.getDate()}-${months[dateObj.getMonth()]}-${dateObj.getFullYear()}`;
    
    let netPaid = 0;
    if (iPaid !== null && roommatePaid !== null) {
        netPaid = iPaid - roommatePaid;
    } else if (iPaid !== null) {
        netPaid = iPaid;
    }
    
    let status = 'pending';
    if (iPaid && iPaid > 0) {
        status = 'paid';
    }
    
    currentData[index] = {
        ...currentData[index],
        date,
        totalRent,
        iPaid,
        roommatePaid,
        netPaid,
        roommatePaidOn,
        status,
        notes
    };
    
    saveData();
    renderSummary(currentData);
    populateMonthFilter(currentData);
    renderTable(currentData);
    closeEditModal();
    showToast('Entry updated successfully!', 'success');
};

let deleteTargetId = null;

const confirmDelete = (id) => {
    deleteTargetId = id;
    deleteModalOverlay.hidden = false;
};

const closeDeleteModal = () => {
    deleteModalOverlay.hidden = true;
    deleteTargetId = null;
};

const executeDelete = () => {
    if (!deleteTargetId) return;
    
    const index = currentData.findIndex(item => item.id === deleteTargetId);
    if (index === -1) {
        showToast('Entry not found', 'error');
        closeDeleteModal();
        return;
    }
    
    currentData.splice(index, 1);
    saveData();
    renderSummary(currentData);
    populateMonthFilter(currentData);
    renderTable(currentData);
    closeDeleteModal();
    showToast('Entry deleted', 'success');
};

// Make functions globally accessible for onclick handlers
window.openEditModal = openEditModal;
window.confirmDelete = confirmDelete;

// ===== EVENT HANDLERS =====
btnExport.addEventListener('click', exportSummary);
btnAddEntry.addEventListener('click', openAddModal);
btnAddFromEmpty?.addEventListener('click', openAddModal);

btnCloseModal.addEventListener('click', closeAddModal);
btnCancelEntry.addEventListener('click', closeAddModal);

btnCloseEditModal.addEventListener('click', closeEditModal);
btnCancelEdit.addEventListener('click', closeEditModal);

btnCloseDeleteModal.addEventListener('click', closeDeleteModal);
btnCancelDelete.addEventListener('click', closeDeleteModal);
btnConfirmDelete.addEventListener('click', executeDelete);

addEntryForm.addEventListener('submit', saveNewEntry);
editEntryForm.addEventListener('submit', updateEntry);

searchInput.addEventListener('input', filterData);
monthFilter.addEventListener('change', filterData);

toastClose.addEventListener('click', closeToast);

// Close modals on overlay click
[modalOverlay, editModalOverlay, deleteModalOverlay].forEach(overlay => {
    overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) {
            if (overlay === modalOverlay) closeAddModal();
            if (overlay === editModalOverlay) closeEditModal();
            if (overlay === deleteModalOverlay) closeDeleteModal();
        }
    });
});

// Keyboard accessibility: Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!modalOverlay.hidden) closeAddModal();
        if (!editModalOverlay.hidden) closeEditModal();
        if (!deleteModalOverlay.hidden) closeDeleteModal();
        if (!toast.hidden) closeToast();
    }
});

// ===== INITIALIZE =====
const init = () => {
    loadData();
    renderSummary(currentData);
    populateMonthFilter(currentData);
    renderTable(currentData);
};

// ===== START APP =====
document.addEventListener('DOMContentLoaded', init);
