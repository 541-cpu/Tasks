function toggleAnswer(el) {
    // 找到当前问题对应的答案
    const answer = el.closest('.q-item').querySelector('.answer');
    // 切换显示/隐藏状态
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}