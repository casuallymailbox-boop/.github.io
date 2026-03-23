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
let tableBody, searchInput, monthFilter, summaryGrid, emptyState;
let btnExport, btnAddEntry, btnAddFromEmpty;
let modalOverlay, btnCloseModal, btnCancelEntry, addEntryForm;
let editModalOverlay, btnCloseEditModal, btnCancelEdit, editEntryForm;
let deleteModalOverlay, btnCloseDeleteModal, btnCancelDelete, btnConfirmDelete;
let toast, toastMessage, toastClose;

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
    if (!toast) return;
    toastMessage.textContent = message;
    toast.className = 'toast';
    if (type) toast.classList.add(type);
    toast.hidden = false;
    
    setTimeout(() => {
        toast.hidden = true;
    }, 4000);
};

const closeToast = () => {
    if (toast) toast.hidden = true;
};

// ===== RENDER FUNCTIONS =====
const renderSummary = (data) => {
    if (!summaryGrid) return;
    
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
    if (!tableBody) return;
    
    if (data.length === 0) {
        tableBody.innerHTML = '';
        if (emptyState) emptyState.hidden = false;
        return;
    }
    
    if (emptyState) emptyState.hidden = true;
    
    tableBody.innerHTML = data.map((row) => {
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
                <button class="btn-action" onclick="window.openEditModal('${row.id}')">Edit</button>
                <button class="btn-action delete" onclick="window.confirmDelete('${row.id}')">Delete</button>
            </td>
        </tr>
    `}).join('');
};

// ===== MONTH FILTER =====
const populateMonthFilter = (data) => {
    if (!monthFilter) return;
    
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
    if (!searchInput || !monthFilter) return;
    
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

// ===== MODAL FUNCTIONS - FIXED =====
const openAddModal = () => {
    console.log('Opening add modal');
    if (!modalOverlay || !addEntryForm) {
        console.error('Modal elements not found');
        return;
    }
    
    // Reset form
    addEntryForm.reset();
    const dateInput = document.getElementById('entryDate');
    const totalRentInput = document.getElementById('entryTotalRent');
    
    if (dateInput) dateInput.valueAsDate = new Date();
    if (totalRentInput) totalRentInput.value = 750;
    
    // Show modal
    modalOverlay.style.display = 'flex';
    if (dateInput) dateInput.focus();
};

const closeAddModal = () => {
    if (modalOverlay) {
        modalOverlay.style.display = 'none';
    }
    if (addEntryForm) addEntryForm.reset();
};

const openEditModal = (id) => {
    console.log('Opening edit modal for ID:', id);
    if (!editModalOverlay || !editEntryForm) {
        console.error('Edit modal elements not found');
        return;
    }
    
    const entry = currentData.find(item => item.id === id);
    if (!entry) {
        showToast('Entry not found', 'error');
        return;
    }
    
    const editEntryIdInput = document.getElementById('editEntryId');
    const editDateInput = document.getElementById('editDate');
    const editTotalRentInput = document.getElementById('editTotalRent');
    const editIPaidInput = document.getElementById('editIPaid');
    const editRoommatePaidInput = document.getElementById('editRoommatePaid');
    const editRoommateDateInput = document.getElementById('editRoommateDate');
    const editNotesInput = document.getElementById('editNotes');
    
    if (editEntryIdInput) editEntryIdInput.value = id;
    if (editDateInput) editDateInput.value = formatDateForInput(entry.date);
    if (editTotalRentInput) editTotalRentInput.value = entry.totalRent || '';
    if (editIPaidInput) editIPaidInput.value = entry.iPaid || '';
    if (editRoommatePaidInput) editRoommatePaidInput.value = entry.roommatePaid || '';
    if (editRoommateDateInput) editRoommateDateInput.value = formatDateForInput(entry.roommatePaidOn);
    if (editNotesInput) editNotesInput.value = entry.notes || '';
    
    // Show modal
    editModalOverlay.style.display = 'flex';
    if (editDateInput) editDateInput.focus();
};

const closeEditModal = () => {
    if (editModalOverlay) {
        editModalOverlay.style.display = 'none';
    }
    if (editEntryForm) editEntryForm.reset();
};

const saveNewEntry = (e) => {
    e.preventDefault();
    console.log('Saving new entry');
    
    const dateInput = document.getElementById('entryDate');
    const totalRentInput = document.getElementById('entryTotalRent');
    const iPaidInput = document.getElementById('entryIPaid');
    const roommatePaidInput = document.getElementById('entryRoommatePaid');
    const roommateDateInput = document.getElementById('entryRoommateDate');
    const notesInput = document.getElementById('entryNotes');
    
    if (!dateInput || !dateInput.value) {
        showToast('Please select a date', 'error');
        return;
    }
    
    const totalRent = totalRentInput && totalRentInput.value ? parseFloat(totalRentInput.value) : 750;
    const iPaid = iPaidInput && iPaidInput.value ? parseFloat(iPaidInput.value) : null;
    const roommatePaid = roommatePaidInput && roommatePaidInput.value ? parseFloat(roommatePaidInput.value) : null;
    const roommatePaidOn = roommateDateInput && roommateDateInput.value ? roommateDateInput.value : null;
    const notes = notesInput ? notesInput.value : '';
    
    const dateObj = new Date(dateInput.value);
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
    console.log('Updating entry');
    
    const editEntryIdInput = document.getElementById('editEntryId');
    const editDateInput = document.getElementById('editDate');
    const editTotalRentInput = document.getElementById('editTotalRent');
    const editIPaidInput = document.getElementById('editIPaid');
    const editRoommatePaidInput = document.getElementById('editRoommatePaid');
    const editRoommateDateInput = document.getElementById('editRoommateDate');
    const editNotesInput = document.getElementById('editNotes');
    
    if (!editEntryIdInput || !editEntryIdInput.value) {
        showToast('Entry ID not found', 'error');
        return;
    }
    
    const id = editEntryIdInput.value;
    const index = currentData.findIndex(item => item.id === id);
    
    if (index === -1) {
        showToast('Entry not found', 'error');
        return;
    }
    
    if (!editDateInput || !editDateInput.value) {
        showToast('Please select a date', 'error');
        return;
    }
    
    const totalRent = editTotalRentInput && editTotalRentInput.value ? parseFloat(editTotalRentInput.value) : 0;
    const iPaid = editIPaidInput && editIPaidInput.value ? parseFloat(editIPaidInput.value) : null;
    const roommatePaid = editRoommatePaidInput && editRoommatePaidInput.value ? parseFloat(editRoommatePaidInput.value) : null;
    const roommatePaidOn = editRoommateDateInput && editRoommateDateInput.value ? editRoommateDateInput.value : null;
    const notes = editNotesInput ? editNotesInput.value : '';
    
    const dateObj = new Date(editDateInput.value);
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
    console.log('Confirming delete for ID:', id);
    deleteTargetId = id;
    if (deleteModalOverlay) {
        deleteModalOverlay.style.display = 'flex';
    }
};

const closeDeleteModal = () => {
    if (deleteModalOverlay) {
        deleteModalOverlay.style.display = 'none';
    }
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

// Make functions globally accessible
window.openEditModal = openEditModal;
window.confirmDelete = confirmDelete;

// ===== INITIALIZE DOM ELEMENTS =====
const initDOMElements = () => {
    tableBody = document.getElementById('tableBody');
    searchInput = document.getElementById('searchInput');
    monthFilter = document.getElementById('monthFilter');
    summaryGrid = document.getElementById('summaryGrid');
    emptyState = document.getElementById('emptyState');
    btnExport = document.getElementById('btnExport');
    btnAddEntry = document.getElementById('btnAddEntry');
    btnAddFromEmpty = document.getElementById('btnAddFromEmpty');
    modalOverlay = document.getElementById('modalOverlay');
    btnCloseModal = document.getElementById('btnCloseModal');
    btnCancelEntry = document.getElementById('btnCancelEntry');
    addEntryForm = document.getElementById('addEntryForm');
    editModalOverlay = document.getElementById('editModalOverlay');
    btnCloseEditModal = document.getElementById('btnCloseEditModal');
    btnCancelEdit = document.getElementById('btnCancelEdit');
    editEntryForm = document.getElementById('editEntryForm');
    deleteModalOverlay = document.getElementById('deleteModalOverlay');
    btnCloseDeleteModal = document.getElementById('btnCloseDeleteModal');
    btnCancelDelete = document.getElementById('btnCancelDelete');
    btnConfirmDelete = document.getElementById('btnConfirmDelete');
    toast = document.getElementById('toast');
    toastMessage = document.getElementById('toastMessage');
    toastClose = document.getElementById('toastClose');
};

// ===== SETUP EVENT LISTENERS =====
const setupEventListeners = () => {
    console.log('Setting up event listeners...');
    
    // Add Entry button
    if (btnAddEntry) {
        btnAddEntry.addEventListener('click', (e) => {
            console.log('Add Entry button clicked');
            e.preventDefault();
            openAddModal();
        });
    } else {
        console.error('btnAddEntry not found');
    }
    
    // Add from empty state button
    if (btnAddFromEmpty) {
        btnAddFromEmpty.addEventListener('click', (e) => {
            e.preventDefault();
            openAddModal();
        });
    }
    
    // Export button
    if (btnExport) {
        btnExport.addEventListener('click', exportSummary);
    }
    
    // Close modal buttons
    if (btnCloseModal) btnCloseModal.addEventListener('click', closeAddModal);
    if (btnCancelEntry) btnCancelEntry.addEventListener('click', closeAddModal);
    if (btnCloseEditModal) btnCloseEditModal.addEventListener('click', closeEditModal);
    if (btnCancelEdit) btnCancelEdit.addEventListener('click', closeEditModal);
    if (btnCloseDeleteModal) btnCloseDeleteModal.addEventListener('click', closeDeleteModal);
    if (btnCancelDelete) btnCancelDelete.addEventListener('click', closeDeleteModal);
    
    // Confirm delete
    if (btnConfirmDelete) {
        btnConfirmDelete.addEventListener('click', executeDelete);
    }
    
    // Form submissions
    if (addEntryForm) {
        addEntryForm.addEventListener('submit', saveNewEntry);
    }
    if (editEntryForm) {
        editEntryForm.addEventListener('submit', updateEntry);
    }
    
    // Search and filter
    if (searchInput) {
        searchInput.addEventListener('input', filterData);
    }
    if (monthFilter) {
        monthFilter.addEventListener('change', filterData);
    }
    
    // Toast close
    if (toastClose) {
        toastClose.addEventListener('click', closeToast);
    }
    
    // Close modals on overlay click
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeAddModal();
        });
    }
    if (editModalOverlay) {
        editModalOverlay.addEventListener('click', (e) => {
            if (e.target === editModalOverlay) closeEditModal();
        });
    }
    if (deleteModalOverlay) {
        deleteModalOverlay.addEventListener('click', (e) => {
            if (e.target === deleteModalOverlay) closeDeleteModal();
        });
    }
    
    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalOverlay && modalOverlay.style.display === 'flex') closeAddModal();
            if (editModalOverlay && editModalOverlay.style.display === 'flex') closeEditModal();
            if (deleteModalOverlay && deleteModalOverlay.style.display === 'flex') closeDeleteModal();
            if (toast && !toast.hidden) closeToast();
        }
    });
    
    console.log('Event listeners setup complete');
};

// ===== INITIALIZE =====
const init = () => {
    console.log('Initializing app...');
    
    // Initialize DOM elements
    initDOMElements();
    
    // Check if elements are found
    if (!btnAddEntry) {
        console.error('ERROR: btnAddEntry not found in DOM!');
    }
    if (!modalOverlay) {
        console.error('ERROR: modalOverlay not found in DOM!');
    }
    
    // Ensure all modals are hidden on load
    if (modalOverlay) modalOverlay.style.display = 'none';
    if (editModalOverlay) editModalOverlay.style.display = 'none';
    if (deleteModalOverlay) deleteModalOverlay.style.display = 'none';
    
    // Setup event listeners
    setupEventListeners();
    
    // Load and render data
    loadData();
    renderSummary(currentData);
    populateMonthFilter(currentData);
    renderTable(currentData);
    
    console.log('App initialized successfully');
};

// ===== START APP =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
