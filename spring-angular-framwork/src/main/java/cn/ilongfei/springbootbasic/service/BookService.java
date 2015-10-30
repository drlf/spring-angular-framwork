package cn.ilongfei.springbootbasic.service;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.ilongfei.springbootbasic.domain.Book;
import cn.ilongfei.springbootbasic.repository.BookRepository;

@Service
public class BookService extends BaseService<Book, BookRepository> {
	private static Logger log = LoggerFactory.getLogger(BookService.class);

	/*@Autowired BookRepository bookRepository;
	
	@PostConstruct
	public void setRepository(){
		repository = bookRepository;
	}*/
	
	@Autowired
	public void setRepository(BookRepository bookRepository){
		repository = bookRepository;
	}
	
}
