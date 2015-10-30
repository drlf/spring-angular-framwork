package cn.ilongfei.springbootbasic.controller.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cn.ilongfei.springbootbasic.domain.Book;
import cn.ilongfei.springbootbasic.domain.Setting;
import cn.ilongfei.springbootbasic.repository.SettingRepository;
import cn.ilongfei.springbootbasic.service.BookService;

@RestController
@RequestMapping("/api/book")
public class BookController extends BaseController<Book, BookService>{

	//private static Logger log = LoggerFactory.getLogger(BookController.class);
	
	@Autowired 
	public void setBookService(BookService bookService){
		service = bookService;
		log.info("test log");
	}

}
