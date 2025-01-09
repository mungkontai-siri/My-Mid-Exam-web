// ตรวจสอบว่าผู้ใช้เคยเลือกโหมดสีไว้หรือไม่
const theme = localStorage.getItem('theme');
if (theme) {
    document.documentElement.classList.add(theme);
} else {
    // กำหนดโหมดเริ่มต้นตามการตั้งค่าระบบ
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
}

// ฟังก์ชันสำหรับสลับโหมดสี
const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark-mode')) {
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode'); // บันทึกโหมดที่เลือก
    } else {
        document.documentElement.classList.remove('light-mode');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // บันทึกโหมดที่เลือก
    }
};

// ผูกฟังก์ชันกับปุ่ม toggle
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);

// ฟังก์ชันแสดงโค้ดของระบบการจัดการหนังสือ
document.getElementById("showCodeBtn1").addEventListener("click", function() {
    var code1 = `class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year
        self.is_borrowed = False

    def borrow(self):
        if not self.is_borrowed:
            self.is_borrowed = True
            print(f"{self.title} ถูกยืมไปแล้ว")
        else:
            print(f"{self.title} ถูกยืมไปแล้ว")

    def return_book(self):
        if self.is_borrowed:
            self.is_borrowed = False
            print(f"{self.title} ถูกส่งคืนแล้ว")
        else:
            print(f"{self.title} ยังไม่ได้ถูกยืม")

class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def find_book(self, title):
        for book in self.books:
            if book.title == title:
                return book
        return None

# ทดสอบ
book1 = Book("Python Programming", "John Doe", 2020)
book2 = Book("Data Science", "Jane Smith", 2021)

library = Library()
library.add_book(book1)
library.add_book(book2)

# ยืมหนังสือ
book = library.find_book("Python Programming")
if book:
    book.borrow()

# ส่งคืนหนังสือ
book.return_book()`;

    var codeBlock1 = document.getElementById("codeBlock1");
    if (codeBlock1.style.display === "none") {
        codeBlock1.textContent = code1;
        codeBlock1.style.display = "block";
        document.getElementById("showCodeBtn1").textContent = "ซ่อนโค้ด";
    } else {
        codeBlock1.style.display = "none";
        document.getElementById("showCodeBtn1").textContent = "แสดงโค้ด";
    }
});

// ฟังก์ชันแสดงโค้ดของระบบบัญชีธนาคาร
document.getElementById("showCodeBtn2").addEventListener("click", function() {
    var code2 = `class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"ฝากเงิน {amount} บาท เสร็จสมบูรณ์")
        else:
            print("จำนวนเงินฝากต้องมากกว่าศูนย์")

    def withdraw(self, amount):
        if amount > 0 and amount <= self.balance:
            self.balance -= amount
            print(f"ถอนเงิน {amount} บาท เสร็จสมบูรณ์")
        else:
            print("จำนวนเงินที่ถอนเกินกว่าที่มีในบัญชี")

    def check_balance(self):
        return self.balance

# ทดสอบ
account = BankAccount(1000)
account.deposit(500)
account.withdraw(300)
print(f"ยอดเงินในบัญชี: {account.check_balance()} บาท")`;

    var codeBlock2 = document.getElementById("codeBlock2");
    if (codeBlock2.style.display === "none") {
        codeBlock2.textContent = code2;
        codeBlock2.style.display = "block";
        document.getElementById("showCodeBtn2").textContent = "ซ่อนโค้ด";
    } else {
        codeBlock2.style.display = "none";
        document.getElementById("showCodeBtn2").textContent = "แสดงโค้ด";
    }
});
