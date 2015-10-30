package cn.ilongfei.springbootbasic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cn.ilongfei.springbootbasic.domain.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
	
}
